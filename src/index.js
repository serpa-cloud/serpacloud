/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { datadogRum } from '@datadog/browser-rum';
import * as amplitude from '@amplitude/analytics-browser';
import { hydrateRoot, createRoot } from 'react-dom/client';

import App from './App';

import './shared/styles.css';

amplitude.init('ea0aacbcd0fbf681046bd74f091e4b28', {
  defaultTracking: {
    pageViews: false,
  },
});

datadogRum.init({
  applicationId: '487a92be-8c07-41d4-ae66-7262437e0c97',
  clientToken: 'pub43d8805a7069b99dc54ef708673cdb97',
  site: 'datadoghq.com',
  service: 'serpa-abundance',
  env: process.env.NODE_ENV,
  version: process.env.REACT_APP_VERSION,
  sessionSampleRate: process.env.NODE_ENV === 'production' ? 100 : 0,
  sessionReplaySampleRate: process.env.NODE_ENV === 'production' ? 100 : 0,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
  allowedTracingUrls: ['https://en.serpa.cloud', 'https://es.serpa.cloud'],
  forwardConsoleLogs: 'all',
  forwardErrorsToLogs: true,
});

if (window.relayRecords)
  hydrateRoot(
    document.getElementById('root'),
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
else
  createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
