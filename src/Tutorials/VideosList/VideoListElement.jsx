/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
// @flow
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import stylex from '@serpa-cloud/stylex';

import { Flexbox } from '../../shared';

import { ReactComponent as IconLogo } from '../../shared/images/icon.svg';

import videosObject from '../videosObject';

type Props = {
  video: string,
};

const styles = stylex.create({
  thumbContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'var(--neutral-color-100)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-1)',
    aspectRatio: '9 / 5',
    rowGap: 8,
    padding: 16,
    '@media (max-width: 768px)': {
      height: 'auto',
    },
  },
  videoContainer: {
    cursor: 'pointer',
  },
  description: {
    fontFamily: 'SF Pro Text, SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 0,
    marginBottom: 0,
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: '.007em',
    lineHeight: 1.4,
    textAlign: 'center',
    color: 'var(--neutral-color-800)',
  },
});

export default function VideoListElement({ video }: Props): React$Node {
  const intl = useIntl();

  return (
    <Link to={`/tutorials/${video}`} style={{ textDecoration: 'none' }}>
      <Flexbox flexDirection="column" rowGap={16} className={stylex(styles.videoContainer)}>
        <div className={stylex(styles.thumbContainer)}>
          <IconLogo width={60} height={60} />
          <div className={stylex(styles.description)}>
            {intl.formatMessage({ id: videosObject[video]?.title })}
          </div>
        </div>
      </Flexbox>
    </Link>
  );
}
