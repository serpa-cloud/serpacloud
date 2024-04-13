// @flow
import { memo } from 'react';

import Analytics from './Analytics';
import LandingPage from './LandingPage';

function App(): React$Node {
  return (
    <Analytics>
      <LandingPage />
    </Analytics>
  );
}

export default (memo<{}>(App): React$AbstractComponent<{}, mixed>);
