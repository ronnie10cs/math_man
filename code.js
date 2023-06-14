onEvent("botón1", "click", function( ) {
  var x = getNumber("etiqueta1");
  var y = getNumber("etiqueta2");
  var respuesta = x * y;
  var entrada = getNumber("entrada_texto1");
  if(entrada == respuesta)
  {
    setPosition("imagen1", 10, getYPosition("imagen1") + 70, 70, 70);
  }
  else
  {
    setPosition("imagen1", 10, getYPosition("imagen1") - 70, 70, 70);
  }
  if (getYPosition("imagen1") > 400) {
    hideElement("imagen1");
  showElement("label5");
  }
  setText("etiqueta1", randomNumber(1, 10));
  setText("etiqueta2", randomNumber(1, 10));
  setText("entrada_texto1", "");
});
