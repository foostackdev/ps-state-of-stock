(function () {
  return {
    result:
      document.querySelector('.box__content').innerText ===
      'Oops! Something has gone wrong.\nReturn To Home Page',
    last_update_utc: new Date().toUTCString(),
  };
})();
