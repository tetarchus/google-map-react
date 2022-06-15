type DetectBrowser = {
  isExplorer: boolean;
  isFirefox: boolean;
  isOpera: boolean;
  isChrome: boolean;
  isSafari: boolean;
};

// http://stackoverflow.com/questions/5899783/detect-safari-chrome-ie-firefox-opera-with-user-agent
let detectBrowserResult_: DetectBrowser | null = null;

const detectBrowser = (): DetectBrowser => {
  if (detectBrowserResult_ != null) {
    return detectBrowserResult_;
  }

  if (typeof navigator !== 'undefined') {
    const isExplorer = navigator.userAgent.includes('MSIE');
    const isFirefox = navigator.userAgent.includes('Firefox');
    const isOpera = navigator.userAgent.toLowerCase().includes('op');

    let isChrome = navigator.userAgent.includes('Chrome');
    let isSafari = navigator.userAgent.includes('Safari');

    if (isChrome && isSafari) {
      isSafari = false;
    }

    if (isChrome && isOpera) {
      isChrome = false;
    }

    detectBrowserResult_ = {
      isExplorer,
      isFirefox,
      isOpera,
      isChrome,
      isSafari,
    };
    return detectBrowserResult_;
  }

  detectBrowserResult_ = {
    isChrome: true,
    isExplorer: false,
    isFirefox: false,
    isOpera: false,
    isSafari: false,
  };

  return detectBrowserResult_;
};
