const params = new URLSearchParams(window.location.search);

document.getElementById("resultado").innerHTML = `
  <p><strong>Nombre:</strong> ${params.get("nombre")}</p>
  <p><strong>Email:</strong> ${params.get("email")}</p>
  <p><strong>Edad:</strong> ${params.get("edad")}</p>
  <p><strong>País:</strong> ${params.get("pais")}</p>
  <p><strong>Acepta términos:</strong> ${params.get("terminos")}</p>
`;