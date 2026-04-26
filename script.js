function includeHTML(id, file) {
  fetch(file).then(r => r.text()).then(html => {
    document.getElementById(id).innerHTML = html;
  });
}

includeHTML('header', 'header.html');
includeHTML('footer', 'footer.html');

async function loadComponent(id, file) {
  const response = await fetch(file);
  const data = await response.text();
  document.getElementById(id).innerHTML = data;

  if (id === "header") {
    document
      .getElementById("menu-toggle")
      .addEventListener("click", function () {
        document
          .getElementById("navbar")
          .classList.toggle("active");
      });
  }
}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");
