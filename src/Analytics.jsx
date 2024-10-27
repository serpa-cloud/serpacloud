// @flow
import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useLocation, matchPath } from 'react-router-dom';
import * as amplitude from '@amplitude/analytics-browser';

import spanishTranslations from './translations/spanish.json';
import englishTranslations from './translations/english.json';

type Props = {|
  +children: React$Node,
|};

const patterns = [
  {
    path: '/',
    title: 'Build 20x faster with Serpa AI',
  },
  {
    path: '/contact',
    title: 'Contact Us',
  },
  {
    path: '/tutorials',
    title: 'title.tutorials',
  },
  {
    path: '/tutorials/build-and-deploy-automatically-from-a-git-repository-using-buildpacks',
    title: 'Build and Deploy automatically from a Git Repository using Buildpacks',
  },
  {
    path: '/tutorials/build-and-deploy-from-a-git-repository-using-dockerfile',
    title: 'Build and Deploy from a Git Repository using Dockerfile',
  },
  {
    path: '/tutorials/check-the-deployment-logs-in-real-time',
    title: 'Check the deployment Logs in real-time',
  },
  {
    path: '/tutorials/create-a-deployment-with-a-public-endpoint',
    title: 'Create a Deployment with a Public Endpoint',
  },
  {
    path: '/tutorials/create-an-account',
    title: 'Create an account',
  },
  {
    path: '/tutorials/deploy-a-docker-image-from-docker-hub',
    title: 'Deploy a Docker Image from Docker hub',
  },
  {
    path: '/tutorials/deploy-a-private-service',
    title: 'Deploy a Private Service',
  },
  {
    path: '/tutorials/how-to-make-a-rollback',
    title: 'How to make a rollback',
  },
  {
    path: '/tutorials/set-up-a-custom-listening-port-for-your-deployments',
    title: 'Set up a Custom listening port for your deployments',
  },
  {
    path: '/tutorials/trigger-a-manual-build',
    title: 'Trigger a manual build',
  },
  {
    path: '/tutorials/update-a-deployment-with-a-new-docker-image',
    title: 'Update a Deployment with a new Docker Image',
  },
  {
    path: '/tutorials/update-a-private-deployment-into-a-deployment-with-a-public-endpoint',
    title: 'Update a Private Deployment into a Deployment with a Public Endpoint',
  },
];

export function getDocumentTitle(pathname: string, locale: string): string {
  const matchResult = patterns.find((route) => matchPath(route.path, pathname));

  let translations = englishTranslations;

  if (locale === 'es') {
    translations = spanishTranslations;
  }

  if (matchResult?.title) {
    return `${matchResult.title} | Serpa AI`;
  }

  return 'Serpa AI';
}

export default function Analytics({ children }: Props): React$Node {
  const intl = useIntl();
  const { pathname } = useLocation();

  useEffect(() => {
    const matchResult = patterns.find((route) => matchPath(route.path, pathname));

    if (matchResult?.title) {
      document.title = `${matchResult.title} | Serpa AI`;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'page_view' });

      amplitude.track('[Amplitude] Page Viewed', {
        '[Amplitude] Page Domain': window.location.hostname,
        '[Amplitude] Page Location': window.location.href,
        '[Amplitude] Page Path': window.location.path,
        '[Amplitude] Page Title': `${matchResult.title} | Serpa AI`,
        '[Amplitude] Page URL': window.location.href.split('?')[0],
      });
    }
  }, [pathname]);

  return children;
}
