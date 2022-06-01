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
