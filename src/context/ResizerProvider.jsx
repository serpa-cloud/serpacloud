import React, { useState, useEffect } from 'react';
import deviceTemplate from '../hooks/useDevice/deviceTemplate';
import resizer from '../hooks/useDevice/resizerFunction';

const template = deviceTemplate(null);

const { breakpoint } = resizer({
  deviceProperties: template,
  breakpoints: [],
});

export const ResizerContext = React.createContext({
  ...template,
  breakpoint,
});

// eslint-disable-next-line react/prop-types
export default function ResizerProvider({ children }) {
  const [deviceProperties, setDeviceProperties] = useState({
    ...template,
    breakpoint,
  });

  useEffect(() => {
    const handleResize = () => {
      const properties = resizer({ deviceProperties, breakpoints: [] });
      setDeviceProperties((data) => ({
        ...data,
        ...properties,
      }));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return <ResizerContext.Provider value={deviceProperties}>{children}</ResizerContext.Provider>;
}
