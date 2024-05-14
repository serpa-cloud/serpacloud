// @flow
import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import VideosList from './VideosList';
import VideoLanding from './VideoLanding';

function Tutorials(): React$Node {
  return (
    <div>
      <Routes>
        <Route path="/:videoName" element={<VideoLanding />} />
        <Route path="/" element={<VideosList />} />
      </Routes>
    </div>
  );
}

export default (memo<{}>(Tutorials): React$AbstractComponent<{}, mixed>);
