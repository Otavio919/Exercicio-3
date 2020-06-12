// This is a JavaScript file
function validacao() {
  var lado1 = document.getElementById('lado1').value;
  var lado2 = document.getElementById('lado2').value;
  var lado3 = document.getElementById('lado3').value;

  if(lado1 == '' || lado2 == '' || lado3 == '' || lado1 <= 0 || lado2 <= 0 || lado3 <= 0){
    navigator.notification.alert('triangulo de dois lados não é triangulo', null, 'Avisado', 'OK');
    document.getElementById('creator').innerHTML = '';
    navigator.vibrate(1000);
  }
  else if(lado1 == lado2 && lado2 == lado3){
    document.getElementById('creator').innerHTML = '<label>Esse triângulo é equilátero <br> <img src="lib/todosiguais.png" width="50%"></label>';
  }
  else if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
    document.getElementById('creator').innerHTML = '<label>Esse triângulo é isósceles <br> <img src="lib/doisiguais.png" width="50%"></label>';    
  }
  else if(lado1 != lado2 && lado2 != lado3 && lado3 != lado1){
    document.getElementById('creator').innerHTML = '<label>Esse triângulo é escaleno <br> <img src="lib/diferentes.jpg" width="50%"></label>';    
  }
}