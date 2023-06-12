window.addEventListener("load", function () {
  console.log("loaded page");
  const body = document.querySelector("body");
  const gramsRegex = /[0-9]+[.]?[0-9]+?[g]/gm;
  body.innerHTML.replace(gramsRegex, "OYE MIRA AQUI");
});
