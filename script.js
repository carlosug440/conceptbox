function includeHTML(id, file) {
  fetch(file).then(r => r.text()).then(html => {
    document.getElementById(id).innerHTML = html;
  });
}

includeHTML('header', 'header.html');
includeHTML('footer', 'footer.html');