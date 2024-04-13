// @flow

import { memo } from 'react';
import stylex from '@serpa-cloud/stylex';

import { Icon } from '../../shared';

const styles = stylex.create({
  centered: {
    maxWidth: 1344,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  technologySection: {
    paddingTop: 64,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundImage: 'var(--neutral-gradient)',
  },
  techGradient: {
    backgroundClip: 'text',
    '-webkit-text-fill-color': 'transparent',
    '-webkit-background-clip': 'text',
    backgroundImage:
      'linear-gradient(270deg, var(--blue-solid-color) 0%, var(--pink-solid-color) 100%)',
  },
  techTitle: {
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 180,
    marginBottom: 0,
    fontSize: 40,
    fontWeight: 500,
    letterSpacing: '-0.005em',
    lineHeight: '1.0714285714',
    textAlign: 'center',
    color: 'var(--orange-solid-color)',
  },
  techDescription: {
    letterSpacing: '.007em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 28,
    fontWeight: 300,
    color: 'var(--neutral-color-600)',
    marginBottom: 0,
    marginTop: 8,
    textAlign: 'center',
  },

  productGrid: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '400px 2fr',
    columnGap: 32,
    marginTop: 40,
    paddingBottom: 80,
  },
  productCardsList: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 40,
  },
  productTube: {
    height: '60vh',
  },
  productCard: {
    top: '33vh',
    height: 400,
    rowGap: 0,
    width: '100%',
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 4,
    display: 'flex',
    paddingRight: 16,
    paddingBottom: 16,
    position: 'sticky',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    flexDirection: 'column',
    boxShadow: 'var(--shadow-2)',
    border: '1px solid var(--border-color)',
    background: 'var(--neutral-gradient)',
  },

  productCardTitle: {
    fontWeight: '600',
    fontSize: '28px',
    lineHeight: '1.1904761905',
    letterSpacing: '.011em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 12,
    marginBottom: 8,
    margin: 0,
    textAlign: 'center',
  },
  productCardDescription: {
    fontSize: 19,
    lineHeight: '1.4211026316',
    fontWeight: '600',
    letterSpacing: '.012em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    color: 'var(--neutral-color-800)',
    marginBottom: 0,
    marginTop: 8,
    textAlign: 'center',
  },
  buildTitle: {
    color: 'var(--orange-solid-color)',
  },
  deployTitle: {
    color: 'var(--cyan-solid-color)',
  },
  networkTitle: {
    color: 'var(--blue-solid-color)',
  },
  productIllustration: {
    top: '33vh',
    position: 'sticky',
    width: '100%',
    height: 400,
    boxSizing: 'border-box',
    borderRadius: 4,

    boxShadow: 'var(--shadow-2)',
    border: '1px solid var(--border-color)',
    background: 'var(--neutral-gradient)',
  },
});

function Tech(): React$Node {
  return (
    <section className={`${stylex(styles.technologySection)}`}>
      <div className={stylex(styles.centered)}>
        <h3 className={stylex(styles.techTitle)}>
          <span className={stylex(styles.techGradient)}>Deploy, Deliver and Scale</span>
        </h3>
        <p className={stylex(styles.techDescription)}>with easy to use cloud native tooling</p>

        <div className={stylex(styles.productGrid)}>
          <div className={stylex(styles.productCardsList)}>
            <div className={stylex(styles.productTube)}>
              <div className={stylex(styles.productCard)}>
                <Icon
                  icon="precision_manufacturing"
                  size={80}
                  weight={200}
                  grade={-25}
                  opticalSize={48}
                  gradient="
            linear-gradient(265.7deg, var(--yellow-solid-color) -2.24%, var(--red-solid-color) 102.98%)"
                />
                <div>
                  <h4 className={stylex(styles.productCardTitle, styles.buildTitle)}>
                    Build containers
                  </h4>
                  <p className={stylex(styles.productCardDescription)}>
                    From your source code, leveraging Buildpacks and Docker
                  </p>
                </div>
              </div>
            </div>
            <div className={stylex(styles.productTube)}>
              <div className={stylex(styles.productCard)}>
                <Icon
                  icon="developer_board"
                  size={80}
                  weight={200}
                  grade={-25}
                  opticalSize={48}
                  gradient="
            linear-gradient(265.7deg, var(--green-solid-color) -2.24%, var(--cyan-solid-color) 102.98%)"
                />
                <div>
                  <h4 className={stylex(styles.productCardTitle, styles.deployTitle)}>Compute</h4>
                  <p className={stylex(styles.productCardDescription)}>
                    Our cloud-native deployments and orchestration are CPU-efficient, requiring 10x
                    fewer resources for scaling
                  </p>
                </div>
              </div>
            </div>

            <div className={stylex(styles.productTube)}>
              <div className={stylex(styles.productCard)}>
                <Icon
                  icon="router"
                  size={80}
                  weight={200}
                  grade={-25}
                  opticalSize={48}
                  gradient="
            linear-gradient(265.7deg, var(--cyan-solid-color) -2.24%, var(--blue-solid-color) 102.98%)"
                />
                <div>
                  <h4 className={stylex(styles.productCardTitle, styles.networkTitle)}>
                    Networking
                  </h4>
                  <p className={stylex(styles.productCardDescription)}>
                    Powerful Layer 7 Routing: Scale and Securely Direct Incoming Traffic with Ease
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${stylex(styles.productIllustration)} DARK`}>Hola mundo</div>
        </div>
      </div>
    </section>
  );
}

export default (memo<{}>(Tech): React$AbstractComponent<{}, mixed>);
