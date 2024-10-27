// @flow

import React, { useRef, useEffect, useMemo, useState } from 'react';
import styles from './HeroBackground.module.scss';

type Props = {
  size?: number,
};

const waveColors = ['#ff5e5e', '#fdb200', '#ff4083', '#00c798', '#177ef7', '#2665d9', '#8d1ac2'];

function HeroBackground(): React$Node {
  const [size, setSize] = useState(global.innerWidth >= 640 ? 400 : 200);
  const canvasRef = useRef<?HTMLCanvasElement>(null);

  // Generar waveDetails una sola vez al montar el componente
  const waveDetails = useMemo(() => {
    const radius = size / 2;
    const totalWaves = waveColors.length;

    return waveColors.map((color, index) => {
      // Calcular el factor de posición: las ondas superiores tienen índices más bajos
      const positionFactor = (totalWaves - index) / totalWaves; // 1 para la onda superior, disminuye hacia abajo

      // Ajustar opacidad: más alta para las ondas superiores
      const opacity = 0.6 + positionFactor * 1; // De 0.6 a 1.0
      const adjustedOpacity = Math.min(opacity, 1.0);

      // Ajustar amplitud para más vibración en las ondas superiores
      const baseAmplitude = radius * (0.1 + positionFactor * 0.3); // De 0.1 a 0.7 del radio

      // Configurar la variación de amplitud
      const amplitudeVariation = 0.3 + Math.random() * 0.5; // Variación entre 0.3 y 0.5
      const amplitudeSpeed = 0.3 + Math.random() * 0.2; // Velocidad de variación
      const timeOffset = Math.random() * Math.PI * 2; // Desfase de tiempo para variación

      // Todas las ondas se mueven hacia la izquierda
      const direction = -1;

      return {
        baseAmplitude,
        amplitudeVariation,
        amplitudeSpeed,
        timeOffset,
        wavelength: size * 1.2,
        speed: (0.03 + (Math.random() * 0.02 - 0.04)) * 2,
        color,
        opacity: adjustedOpacity,
        offset: Math.random() * Math.PI * 2,
        direction,
      };
    });
  }, [size]);

  useEffect(() => {
    const handleResize = () => {
      setSize(global.innerWidth >= 640 ? 400 : 200);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas: ?HTMLCanvasElement = canvasRef.current;
    if (!canvas) return;

    const ctx: ?CanvasRenderingContext2D = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: AnimationFrameID;
    let borderRotationAngle = 0; // Ángulo inicial para la rotación del borde
    let time = 0; // Variable de tiempo para la variación de amplitud

    const dpr: number = window.devicePixelRatio || 1;

    const render = () => {
      const width: number = canvas.clientWidth * dpr;
      const height: number = size * dpr;

      canvas.width = width;
      canvas.height = height;
      ctx.scale(dpr, dpr);

      const centerY: number = size / 2; // La mitad de 400px
      const radius: number = size / 2;

      animationFrameId = requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.clientWidth, size);

      // Incrementar el tiempo para la variación de amplitud
      time += 0.01;

      // Renderizar las ondas en orden inverso para que las superiores queden al frente
      waveDetails
        .slice()
        .reverse()
        .forEach((wave) => {
          ctx.beginPath();

          // Desplazamiento vertical para separar las ondas superior e inferior
          const verticalOffset = radius * 0.2; // Ajusta este valor para cambiar la distancia

          // Calcular la amplitud actual con variación lenta
          const currentAmplitude =
            wave.baseAmplitude *
            (1 + Math.sin(time * wave.amplitudeSpeed + wave.timeOffset) * wave.amplitudeVariation);

          // Empezar desde el centro vertical en el borde izquierdo
          ctx.moveTo(0, centerY);

          // Dibujar la onda superior
          for (let x = 0; x <= canvas.clientWidth; x += 1) {
            const y =
              currentAmplitude * Math.sin((2 * Math.PI * x) / wave.wavelength + wave.offset) +
              (centerY - verticalOffset);
            ctx.lineTo(x, y);
          }

          // Dibujar la onda inferior (reflejo)
          for (let x = canvas.clientWidth; x >= 0; x -= 1) {
            const y =
              -currentAmplitude * Math.sin((2 * Math.PI * x) / wave.wavelength + wave.offset) +
              (centerY + verticalOffset);
            ctx.lineTo(x, y);
          }

          ctx.closePath();

          // Crear un gradiente vertical para la onda
          const gradient = ctx.createLinearGradient(0, centerY - radius, 0, centerY + radius);
          const startColor = `${wave.color}${Math.round(wave.opacity * 255)
            .toString(16)
            .padStart(2, '0')}`;
          const endColor = `${wave.color}00`; // Color transparente

          gradient.addColorStop(0.4, startColor);
          gradient.addColorStop(0.8, endColor);

          ctx.fillStyle = gradient;

          ctx.fill();

          // Actualizar el offset de la onda para animación
          // eslint-disable-next-line no-param-reassign
          wave.offset += wave.speed * wave.direction;
        });

      ctx.restore();

      // Dibujar el borde circular con degradado giratorio que cubre el 75%
      ctx.save();

      // Incrementar el ángulo de rotación
      borderRotationAngle += 0.02; // Ajusta este valor para cambiar la velocidad de rotación

      ctx.restore();
    };

    render();

    // eslint-disable-next-line consistent-return
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [waveDetails, size]);

  return <canvas className={styles.canvas} ref={canvasRef} />;
}

// Memoizamos el componente con Flow para mejorar el rendimiento
export default (React.memo<{}>(HeroBackground): React$AbstractComponent<{}, mixed>);
