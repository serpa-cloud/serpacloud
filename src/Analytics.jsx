// @flow
import { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import * as amplitude from '@amplitude/analytics-browser';

type Props = {|
  +children: React$Node,
|};

const patterns = [
  {
    path: '/',
    title: '(de)centralized cloud computing',
  },
];

export function getDocumentTitle(pathname: string): string {
  const matchResult = patterns.find((route) => matchPath(route.path, pathname));

  if (matchResult) {
    const message: string = matchResult.title;

    if (!message) return 'Serpa Cloud';

    return `${message} | Serpa Cloud`;
  }

  return 'Serpa Cloud';
}

export default function Analytics({ children }: Props): React$Node {
  const { pathname } = useLocation();

  useEffect(() => {
    const matchResult = patterns.find((route) => matchPath(route.path, pathname));

    if (matchResult) {
      const message = matchResult.title;
      document.title = `${matchResult.title} | Serpa Cloud`;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'page_view' });

      amplitude.track('[Amplitude] Page Viewed', {
        '[Amplitude] Page Domain': window.location.hostname,
        '[Amplitude] Page Location': window.location.href,
        '[Amplitude] Page Path': window.location.path,
        '[Amplitude] Page Title': `${message} | Serpa Cloud`,
        '[Amplitude] Page URL': window.location.href.split('?')[0],
      });
    }
  }, [pathname]);

  return children;
}
