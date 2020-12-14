document.getElementById('resultado2').style.display = "none"

const formulario = document.getElementById('formulario');
const listaMoneda = document.getElementById('moneda');
const listaCambio = document.getElementById('criptomoneda');
const alerta = document.getElementById('principal');

const fragmento = document.createDocumentFragment();
const fragmento2 = document.createDocumentFragment();

var dinero;
var res;

//Vector Moneda
var moneda = ['Elige tu Moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euros', 'Bolivar'];
var cambio = ['Elige tu Moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euros', 'Bolivar'];
//Vector Moneda destino

moneda.forEach((data, index) => {
    const item = document.createElement('option');
    item.setAttribute('value', index)
    item.textContent = data;
    fragmento.appendChild(item)
})

cambio.forEach((data, index) => {
    const item = document.createElement('option');
    item.setAttribute('value', index)
    item.textContent = data;
    fragmento2.appendChild(item)
})

listaMoneda.appendChild(fragmento);
listaCambio.appendChild(fragmento2);
//Recorrer vector para insertar la informacion de la lista

function Convertir() {
    document.getElementById('resultado2').style.display = "block"

    dinero = Number(document.getElementById('cantidad').value);

    res = Caso(dinero);

    document.getElementById('conversorRes').value = res;
}

// var Caso = function (dinero) {
    function Caso(dinero) {

    const monedaSeleccionada1 = listaMoneda.options[listaMoneda.selectedIndex].value;
    const monedaSeleccionada2 = listaCambio.options[listaCambio.selectedIndex].value;

    console.log(monedaSeleccionada1);
    console.log(monedaSeleccionada2);

    if (monedaSeleccionada1 == 0 || monedaSeleccionada2 == 0) {
        alert('Error')
    }

    switch (monedaSeleccionada1) {
        case '1':
            switch (monedaSeleccionada2) {
                case '1':
                    alert('Error')
                    break;
                case '2':
                    console.log('Convertir a Pesos Mexicanos')
                    alert('Convertir a Pesos Mexicanos')
                    res = dinero * 19.8003;
                    alert(res)

                    break;
                case '3':
                    console.log('Convertir a Pesos Colombianos')
                    alert('Convertir a Pesos Colombianos')
                    res = dinero * 3466.38;
                    alert(res)
                    break;
                case '4':
                    console.log('Convertir a Euros')
                    alert('Convertir a Euros')
                    res = dinero * 0.824628;
                    alert(res)
                    break;
                case '5':
                    console.log('Convertir a Bolivares')
                    alert('Convertir a Bolivares')
                    res = dinero * 9987.5;
                    alert(res)
                    break;
                default:
                    break;
            }
            break;
        case '2':
            switch (monedaSeleccionada2) {
                case '1':
                    console.log('Convertir a Dolares')
                    alert('Convertir a Dolares')
                    res = dinero * 0.0505108;
                    alert(res)
                    break;
                case '2':
                    alert('Error')
                    break;
                case '3':
                    console.log('Error')
                    alert('Error')
                    res = dinero * 175.05;
                    alert(res)
                    break;
                case '4':
                    console.log('Convertir a Euros')
                    alert('Convertir a Euros')
                    res = dinero * 0.0416405;
                    alert(res)
                    break;
                case '5':
                    console.log('Convertir a Bolivares')
                    alert('Convertir a Bolivares')
                    res = dinero * 504.329;
                    alert(res)
                    break;
                default:
                    break;

            }
            break;
        case '3':
            switch (monedaSeleccionada2) {
                case '1':
                    console.log('Convertir a Dolares')
                    alert('Convertir a Dolares')
                    res = dinero * 0.000288474;
                    alert(res)
                    break;
                case '2':
                    console.log('Convertir a Pesos Mexicanos')
                    alert('Convertir a Pesos Mexicanos')
                    res = dinero * 0.00571318;;
                    alert(res)
                    break;
                case '3':
                    alert('Error')
                    break;
                case '4':
                    console.log('Convertir a Euros')
                    alert('Convertir a Euros')
                    res = dinero * 0.000237911;
                    alert(res)
                    break;
                case '5':
                    console.log('Convertir a Bolivares')
                    alert('Convertir a Bolivares')
                    res = dinero * 2.88143;
                    alert(res)
                    break;
                default:
                    break;

            }
            break;
        case '4':
            switch (monedaSeleccionada2) {
                case '1':
                    console.log('Convertir a Dolares')
                    alert('Convertir a Dolares')
                    res = dinero * 1.21295;
                    alert(res)
                    break;
                case '2':
                    console.log('Convertir a Pesos Mexicanos')
                    alert('Convertir a Pesos Mexicanos')
                    res = dinero * 24.0224;
                    alert(res)
                    break;
                case '3':
                    console.log('Convertir a Pesos Colombianos')
                    alert('Convertir a Pesos Colombianos')
                    res = dinero * 4203.89;
                    alert(res)
                    break;
                case '4':
                    alert('Error')
                    break;
                case '5':
                    console.log('Convertir a Bolivares')
                    alert('Convertir a Bolivares')
                    res = dinero * 12115.23;
                    alert(res)
                    break;
                default:
                    break;

            }
            break;
        case '5':
            switch (monedaSeleccionada2) {
                case '1':
                    console.log('Convertir a Dolares')
                    alert('Convertir a Dolares')
                    res = dinero * 0.000100125;
                    alert(res)
                    break;
                case '2':
                    console.log('Convertir a Pesos Mexicanos')
                    alert('Convertir a Pesos Mexicanos')
                    res = dinero * 0.00198248;
                    alert(res)
                    break;
                case '3':
                    console.log('Convertir a Pesos Colombianos')
                    alert('Convertir a Pesos Colombianos')
                    res = dinero * 0.34695;
                    alert(res)
                    break;
                case '4':
                    console.log('Convertir a Euros')
                    alert('Convertir a Euros')
                    res = dinero * 0.0000825311;
                    alert(res)

                    break;
                case '5':
                    alert('Error')
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    return res;
}

// formulario.addEventListener('submit', (e) => {
//      e.preventDefault();

//      // leer la moneda seleccionada
//      const monedaSelect = document.getElementById('moneda');
//      const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;


//      // leer la criptomoneda seleccionada
//     const criptoMonedaSelect = document.getElementById('criptomoneda');
//      //const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

//      const divMensaje = document.createElement('div');
//      divMensaje.classList.add('text-center', 'alert');

//      // comprobar que ambos campos tengan algo seleccionado
//      if(monedaSeleccionada == 0 || criptoMonedaSeleccionada == 0) {
//           divMensaje.classList.add('alert-danger');
//           divMensaje.appendChild(document.createTextNode('Es requisito escoger las monedas'));
//           alerta.appendChild(divMensaje)
//      } else {
//           divMensaje.classList.add('alert-success');
//           divMensaje.appendChild(document.createTextNode('Gracias'));
//           alerta.appendChild(divMensaje)
//      }

//      setTimeout(function() {
//           document.querySelector('#principal .alert').remove();
//           formulario.reset();
//      }, 3000);

// }