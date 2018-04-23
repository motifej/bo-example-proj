import React from 'react';

const handleScriptLoading = {
  appendScript(url, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (
          script.readyState === 'loaded' ||
                    script.readyState === 'complete'
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function () {
        callback();
      };
    }
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
  },
  loadScript() {
    handleScriptLoading.appendScript('b1.js', () => {
      window.Aviv.default.show();
    });
  },
};
const TestComponent = () => {
  <div>
    <button onClick={handleScriptLoading.loadScript}>Click me</button>
  </div>;
};

export default TestComponent;
