export default (url, name) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.id = url;
  if (document.getElementById(url)) {
    return Promise.resolve(window[name]);
  }
  document.body.appendChild(script);
  return new Promise((res, rej) => {
    script.onload = res;
    script.onerror = rej;
  }).then(() => {
    const app = window[name];
    return app;
  });
};
