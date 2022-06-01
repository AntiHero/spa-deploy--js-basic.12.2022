if (DEPLOY_TO_GITHUB) {
  Array.from(document.body.querySelectorAll('a')).forEach((a) => {
    a.setAttribute('href', GITHUB_PREFIX + a.pathname)
  })
}

function render() {
  document.querySelector('#app')!.textContent = window.location.href;
}

document.body.addEventListener('click', (ev) => {
  if ((ev.target as HTMLElement).matches('a')) {
    ev.preventDefault();
    const href = (ev.target as HTMLAnchorElement).href;

    if (window.history) {
      window.history.pushState({}, '', href);
    } else {
      alert("Your browser doesn't support History API");
    }

    render();
  }
});

render();