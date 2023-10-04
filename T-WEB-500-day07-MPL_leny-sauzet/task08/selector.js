window.addEventListener("load", (event) => {
    let links = document.querySelectorAll('a:not([target="_blank"])')
    links.forEach(link => {
        link.style.opacity = '50%'
    });
  });