import stylex from '@serpa-cloud/stylex';

import { Icon, Text } from '../shared';

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 16,
  },
  title: {
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 48,
    fontWeight: 600,
    letterSpacing: '-0.005em',
    lineHeight: '1.2814285714',
    color: 'var(--always-white)',
    '@media (max-width: 980px)': {
      fontSize: 40,
    },
  },
  dotcontainer: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 16,
  },
  dotText: {
    fontSize: 24,
    lineHeight: '1.2858342857',
    fontWeight: 300,
    letterSpacing: '.007em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    color: '#f7f7fc',
    '@media (max-width: 920px)': {
      fontSize: 20,
    },
  },
});

export default function Copy() {
  return (
    <div className={stylex(styles.container)}>
      <Text type="h2" color="--neutral-color-100" id="contact.title" />
      <div className={stylex(styles.dotcontainer)}>
        <Icon
          icon="task_alt"
          size={64}
          weight={400}
          grade={-25}
          opticalSize={48}
          gradient="linear-gradient(45deg, var(--red-solid-color) 0%, var(--yellow-solid-color) 100%)"
        />
        <Text type="bl" color="--neutral-color-100" id="contact.dot1" />
      </div>

      <div className={stylex(styles.dotcontainer)}>
        <Icon
          icon="task_alt"
          size={64}
          weight={400}
          grade={-25}
          opticalSize={48}
          gradient="linear-gradient(45deg, var(--red-solid-color) 0%, var(--yellow-solid-color) 100%)"
        />
        <Text type="bl" color="--neutral-color-100" id="contact.dot2" />
      </div>

      <div className={stylex(styles.dotcontainer)}>
        <Icon
          icon="task_alt"
          size={64}
          weight={400}
          grade={-25}
          opticalSize={48}
          gradient="linear-gradient(45deg, var(--red-solid-color) 0%, var(--yellow-solid-color) 100%)"
        />
        <Text type="bl" color="--neutral-color-100" id="contact.dot3" />
      </div>
    </div>
  );
}
