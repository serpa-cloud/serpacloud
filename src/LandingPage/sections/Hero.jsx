// @flow
import { memo } from 'react';

import HeroBackground from './HeroBackground';

import './Hero.scss';

function Hero(): React$Node {
  return (
    <section className="heroSection" id="hero">
      <div className="heroBackground">
        <HeroBackground />
      </div>
      <div className="centered">
        <img
          src="https://static.serpa.cloud/4b544710-813c-11ef-aaf3-c3b76a8f1ee1/1600/0/0/Serpa-CodeGen-AI?fit=cover"
          alt="Serpa CodeGen AI"
          className="heroImage"
        />
        <div className="heroTitle">
          <div className="heroContent">
            <h2 className="principalTitle">
              <span className="titleGradient">Serpa CodeGen AI</span>
            </h2>
            <h2 className="mainTitle">
              The AI developer that multiplies your productivity by 20x.
            </h2>
            <p className="heroDescription">
              Build products faster than ever, regardless of your development experience level.
              Integrate our AI model directly into your codebase and ask it to develop any
              functionality you need. Apply the code directly from the application.
            </p>
          </div>

          <div className="toolbar">
            <a href="#waitinglist" className="mainButton">
              Request Access
            </a>
            <a href="https://www.youtube.com/watch?v=yaaAJD75YAc" className="secondaryButton">
              See Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default (memo<{}>(Hero): React$AbstractComponent<{}, mixed>);
