
const witaj = document.getElementById('witka')
const refR3Z1 = document.getElementById('R3Z1')



witaj.innerHTML = 'hello';


function mnoz(a,b) {
  var c = a * b;
  return c;
}

var pokaz = '';
for (i=1;i<10;i++){
  for (j=1;j<10;j++){
   pokaz += mnoz(i,j) + ', ';
  }
  pokaz += '<br>';
}

refR3Z1.innerHTML = pokaz + '<br><br>';

function args() {
  var i=0;
  var res = '';
  var liczParams = arguments.length;
  for (i=0;i<liczParams;i++){
    res += arguments[i] + ', ';
  }
  return res;
}

pokaz += args(1,2,3)

refR3Z1.innerHTML = pokaz;
