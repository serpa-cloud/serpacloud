/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import express from 'express';
import cookieParser from 'cookie-parser';
import { Crawler } from 'es6-crawler-detect';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from './App';
import { getDocumentTitle } from './Analytics';

const { createProxyMiddleware } = require('http-proxy-middleware');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

async function renderReactApp(req, res) {
  // eslint-disable-next-line global-require
  const manifest = isProduction ? require('../build/asset-manifest.json') : {};
  const CrawlerDetector = new Crawler(req);

  const isCrawler = CrawlerDetector.isCrawler();

  let didError = false;

  const host = req.get('host');
  const isEnglish = host.includes(`en.`);

  const { pipe, abort } = ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <StaticRouter location={req.originalUrl}>
        <html lang="en">
          <head>
            <meta charSet="utf-8" />
            <link rel="icon" href="https://static.yellowcode.io/yellowcode/favicon.png" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="canonical" href="https://serpa.cloud" />

            <meta
              name="description"
              content="Deploy, Scale and Deliver Applications faster than ever using (de)centralized cloud computing."
            />

            <meta
              name="google-signin-client_id"
              content="388801772528-n5pcgq4tpvdistu3dk3e0b6avjhs7ach.apps.googleusercontent.com"
            />

            <meta name="msapplication-TileColor" content="#09003d" />
            <meta name="theme-color" content="#09003d" />

            <link rel="icon" href={`${process.env.CLOUDFRONT_DISTRIBUTION ?? ''}/favicon.ico`} />
            <link
              rel="apple-touch-icon"
              sizes="57x57"
              href={`${process.env.CLOUDFRONT_DISTRIBUTION ?? ''}/apple-touch-icon.png`}
            />

            <link
              rel="icon"
              type="image/png"
              sizes="192x192"
              href={`${process.env.CLOUDFRONT_DISTRIBUTION ?? ''}/android-chrome-192x192.png`}
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href={`${process.env.CLOUDFRONT_DISTRIBUTION ?? ''}/favicon-32x32.png`}
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href={`${process.env.CLOUDFRONT_DISTRIBUTION ?? ''}/favicon-16x16.png`}
            />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

            <link
              href="https://unpkg.com/maplibre-gl@3.6.0/dist/maplibre-gl.css"
              rel="stylesheet"
            />

            <link
              rel="stylesheet"
              href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <link rel="manifest" href="/manifest.json" />
            <title>{getDocumentTitle(req.originalUrl, isEnglish ? 'en' : 'es')}</title>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z3FHBDTHQC" />
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-WCHPZC5X');`,
              }}
            />
            <style
              dangerouslySetInnerHTML={{
                __html: `@font-face {
                  font-family: 'SF Pro Display';
                  font-style: normal;
                  font-weight: 100;
                  src: local('☺'), url('${process.env.FONT_DISTRIBUTION ??
                    '.'}/fonts/sf-pro-display_ultralight.woff2') format('woff2');
                }
          
                @font-face {
                  font-family: 'SF Pro Display';
                  font-style: normal;
                  font-weight: 400;
                  src: local('☺'), url('${process.env.CLOUDFRONT_DISTRIBUTION ??
                    '.'}/fonts/sf-pro-display_regular.woff2') format('woff2');
                }
          
                @font-face {
                  font-family: 'SF Pro Text';
                  font-style: normal;
                  font-weight: 700;
                  src: local('☺'), url('${process.env.CLOUDFRONT_DISTRIBUTION ??
                    '.'}/fonts/sf-pro-text_bold.woff2') format('woff2');
                }
          
                @font-face {
                  font-family: 'SF Pro Text';
                  font-style: normal;
                  font-weight: 600;
                  src: local('☺'), url('${process.env.FONT_DISTRIBUTION ??
                    '.'}/fonts/sf-pro-text_semibold.woff2') format('woff2');
                }
          
                @font-face {
                  font-family: 'SF Pro Display';
                  font-style: normal;
                  font-weight: 600;
                  src: local('☺'), url('${process.env.FONT_DISTRIBUTION ??
                    '.'}/fonts/sf-pro-display_semibold.woff2') format('woff2');
                }
          
                @font-face {
                  font-family: 'SF Pro Text';
                  font-style: normal;
                  font-weight: 400;
                  src: local('☺'), url('${process.env.FONT_DISTRIBUTION ??
                    '.'}/fonts/sf-pro-text_regular.woff2') format('woff2');
                }
          
                @font-face {
                  font-family: 'SF Pro Icons';
                  font-style: normal;
                  font-weight: 400;
                  src: local('☺'), url('${process.env.FONT_DISTRIBUTION ??
                    '.'}/fonts/sf-pro-icons_regular.woff2') format('woff2');
                }
          
                @font-face {
                  font-family: 'SF Pro Display';
                  font-style: normal;
                  font-weight: 500;
                  src: local('☺'), url('${process.env.FONT_DISTRIBUTION ??
                    '.'}/fonts/sf-pro-display_medium.woff2') format('woff2');
                }
          
                @font-face {
                  font-family: 'SF Pro Display';
                  font-style: normal;
                  font-weight: 300;
                  src: local('☺'), url('${process.env.FONT_DISTRIBUTION ??
                    '.'}/fonts/sf-pro-display_light.woff2') format('woff2');
                }`,
              }}
            />

            <link
              href={
                isDevelopment
                  ? ''
                  : `${process.env.CLOUDFRONT_DISTRIBUTION ?? ''}${manifest.files['main.css']}`
              }
              rel="stylesheet"
            />
          </head>
          <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>

            <div id="root">
              <App />
            </div>
          </body>
        </html>
      </StaticRouter>
    </React.StrictMode>,
    {
      bootstrapScriptContent: `window.initialRenderedUrl = "${req.originalUrl}"`,
      bootstrapScripts: [
        isDevelopment
          ? process.env.MAIN_SCRIPT_URL
          : `${process.env.CLOUDFRONT_DISTRIBUTION ?? ''}${manifest.files['main.js']}`,
      ],
      onShellReady() {
        if (!isCrawler) {
          res.statusCode = didError ? 500 : 200;
          res.setHeader('content-type', 'text/html');
          pipe(res);
        }
      },
      onAllReady() {
        if (isCrawler) {
          res.statusCode = didError ? 500 : 200;
          res.setHeader('content-type', 'text/html');
          pipe(res);
        }
        res.write(`<script>window.initialRenderedUrl = "${req.originalUrl}";</script>`);
      },
      onShellError() {
        res.statusCode = 500;
        res.setHeader('content-type', 'text/html');
        res.send('<h1>Something went wrong</h1>');
      },
      onError(error) {
        didError = true;
        // eslint-disable-next-line no-console
        console.error(error);
      },
    },
  );

  setTimeout(() => {
    abort();
  }, 10000);
}

const app = express();

app.use((req, res, next) => {
  req.tracingHeaders = {};
  const { headers } = req;
  const headersKeys = Object.keys(headers);

  headersKeys.forEach((el) => {
    if (
      el.includes('x-') ||
      el.includes('grpc-') ||
      el.includes('traceparent') ||
      el.includes('b3')
    )
      req.tracingHeaders[el] = headers[el];
  });

  const host = req.get('host');

  // eslint-disable-next-line no-underscore-dangle
  const queryURL = req._parsedUrl.query;

  if (host.includes('es.') || host.includes('en.')) {
    return res
      .status(302)
      .redirect(
        `https://${process.env.BASE_DOMAIN}${req?.path ?? ''}${queryURL ? `?${queryURL}` : ''}`,
      );
  }

  return next();
});

app.use(cookieParser());

app.get('/', async (req, res) => {
  return renderReactApp(req, res);
});

if (isDevelopment) {
  app.use(
    '/static',
    createProxyMiddleware({
      target: process.env.DEVELOPMENT_SERVER,
      changeOrigin: true,
      headers: {
        Connection: 'keep-alive',
      },
    }),
  );

  app.use(
    /\/main\..*\.hot-update\.js(on)?/,
    createProxyMiddleware({
      target: process.env.DEVELOPMENT_SERVER,
      changeOrigin: true,
      headers: {
        Connection: 'keep-alive',
      },
    }),
  );
}

app.use(express.static('./build'));

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${process.env.PORT}`);
});
