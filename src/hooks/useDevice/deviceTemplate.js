/* eslint-disable radix */
/* eslint-disable no-shadow */
/* eslint-disable no-bitwise */
/* eslint-disable prefer-destructuring */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */
/* eslint-disable space-before-function-paren */
const navigator = global.navigator || {};

const isMobile = (function() {
  const u = navigator?.userAgent || '';
  const b =
    u.match(/Android/i) ||
    u.match(/webOS/i) ||
    u.match(/iPhone/i) ||
    u.match(/iPad/i) ||
    u.match(/iPod/i) ||
    u.match(/BlackBerry/i) ||
    u.match(/Windows Phone/i);
  if (b) return true;
  return false;
})();

const osFunction = function(userAgent) {
  const nAgt = (userAgent && userAgent) || navigator.userAgent || '';
  const nVer = (userAgent && '') || navigator.appVersion;
  let os;

  const clientStrings = [
    { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
    { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
    { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
    { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
    { s: 'Windows Vista', r: /Windows NT 6.0/ },
    { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
    { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
    { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
    { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
    { s: 'Windows 98', r: /(Windows 98|Win98)/ },
    { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
    { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
    { s: 'Windows CE', r: /Windows CE/ },
    { s: 'Windows 3.11', r: /Win16/ },
    { s: 'Android', r: /Android/ },
    { s: 'Open BSD', r: /OpenBSD/ },
    { s: 'Sun OS', r: /SunOS/ },
    { s: 'Linux', r: /(Linux|X11)/ },
    { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
    { s: 'Mac OS X', r: /Mac OS X/ },
    { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
    { s: 'QNX', r: /QNX/ },
    { s: 'UNIX', r: /UNIX/ },
    { s: 'BeOS', r: /BeOS/ },
    { s: 'OS/2', r: /OS\/2/ },
    {
      s: 'Search Bot',
      r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
    },
  ];

  for (const id in clientStrings) {
    const cs = clientStrings[id];
    if (cs.r.test(nAgt)) {
      os = cs.s;
      break;
    }
  }

  let osVersion = 'unknown';

  if (/Windows/.test(os)) {
    osVersion = /Windows (.*)/.exec(os)[1];
    os = 'Windows';
  }

  switch (os) {
    case 'Mac OS X':
      osVersion = /Mac OS X ([._\d]+)/.exec(nAgt)[1];
      break;

    case 'Android':
      // eslint-disable-next-line no-useless-escape
      // osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
      osVersion = 'Android';
      break;

    case 'iOS':
      osVersion = (nVer && /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer)) || '';
      osVersion = (nVer && `${osVersion[1]}.${osVersion[2]}.${osVersion[3] | 0}`) || '';
      break;

    default:
      osVersion = osVersion || '';
  }

  let browser = 'unknow';

  if (nAgt.indexOf('Opera') !== -1) {
    browser = 'Opera';
  } else if (nAgt.indexOf('MSIE') !== -1) {
    browser = 'Microsoft Internet Explorer';
  } else if (nAgt.indexOf('Chrome') !== -1) {
    browser = 'Chrome';
  } else if (nAgt.indexOf('Safari') !== -1) {
    browser = 'Safari';
  } else if (nAgt.indexOf('Firefox') !== -1) {
    browser = 'Firefox';
  } else if (nAgt.indexOf('Trident/') !== -1) {
    browser = 'Microsoft Internet Explorer +11';
  }

  return {
    os,
    version: osVersion,
    browser,
  };
};

const os = osFunction();
const device = (function() {
  if (typeof window === 'undefined') return 'desktop';
  if (isMobile) {
    let width;
    if (window.matchMedia('(orientation: portrait)').matches) {
      width = window.innerWidth;
      if (os.os === 'iOS') width = window.screen.width;
    } else {
      width = window.innerHeight;
      if (os.os === 'iOS') width = window.screen.height;
    }
    if (width < 650) return 'phone';
    return 'tablet';
  }
  if (window.innerWidth > 1200) return 'desktop';
  if (window.innerWidth < 815) return 'phone';
  return 'tablet';
})();

const deviceTemplate = (userAgentStr) => {
  if (typeof window === 'undefined') return {};
  return (
    (userAgentStr &&
      ((userAgent) => {
        const isMobile = userAgent.match(
          /Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i,
        );
        const isTablet = userAgent.match(/Tablet|iPad/i);
        const isDesktop = !(isMobile || isTablet);
        const device = (isDesktop && 'desktop') || (isTablet && 'tablet') || 'phone';
        const os = osFunction(userAgentStr);

        return {
          isTouch: !isDesktop,
          isMobileAgent: !isDesktop,
          isIE: (function() {
            const myNav = userAgent.toLowerCase();
            return myNav.indexOf('msie') !== -1 ? parseInt(myNav.split('msie')[1]) : false;
          })(),
          device,
          width: (isDesktop && 1200) || (isTablet && 600) || 320,
          height: (isDesktop && 900) || (isTablet && 800) || 640,
          screenSize: device,
          isOrientationCapable: !isDesktop,
          orientation: (isDesktop && 'landscape') || 'portrait',
          os: os.os,
          browser: os.browser,
          version: os.version,
        };
      })(userAgentStr)) || {
      isTouch: (function() {
        const b =
          'ontouchstart' in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0;
        if (b) return true;
        return false;
      })(),
      isMobileAgent: isMobile,
      isIE: (function() {
        const myNav = navigator.userAgent.toLowerCase();
        return myNav.indexOf('msie') !== -1 ? parseInt(myNav.split('msie')[1]) : false;
      })(),
      device,
      width: (os.os === 'iOS' && window.screen.width) || window.innerWidth,
      height: (os.os === 'iOS' && window.screen.height) || window.innerHeight,
      screenSize: device,
      isOrientationCapable: (function() {
        if (typeof window.matchMedia === 'undefined') return false;
        return true;
      })(),
      orientation: (function() {
        if (typeof window.matchMedia === 'undefined') return 'NOT_COMPATIBLE';

        if (window.matchMedia('(orientation: portrait)').matches) return 'portrait';
        return 'landscape';
      })(),
      browser: os.browser,
      os: os.os,
      version: os.version,
    }
  );
};

export default deviceTemplate;
