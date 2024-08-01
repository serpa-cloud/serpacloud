/* eslint-disable import/no-extraneous-dependencies */
// @flow
import { memo } from 'react';
import { IntlProvider } from 'react-intl';

import { Routes, Route } from 'react-router-dom';
import Analytics from './Analytics';
import LandingPage from './LandingPage';
import ContactUs from './ContactUs';
import Tutorials from './Tutorials';

import spanishTranslations from './translations/spanish.json';
import englishTranslations from './translations/english.json';

type Props = {
  locale: 'es' | 'en',
};

function App({ locale }: Props): React$Node {
  let translations = spanishTranslations;

  if (locale === 'en') {
    translations = englishTranslations;
  }
  return (
    <IntlProvider messages={translations} locale={locale}>
      <Analytics>
        <Routes>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/tutorials/*" element={<Tutorials />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Analytics>
    </IntlProvider>
  );
}

export default (memo<Props>(App): React$AbstractComponent<Props, mixed>);
