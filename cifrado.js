document.getElementById('encrypt').addEventListener('click', function () {
    let filas = parseInt(document.getElementById('filas').value);
    let columnas = parseInt(document.getElementById('columnas').value);
    let mensaje = document.getElementById('message').value;

    let matriz = new Array(filas);
    for (let i = 0; i < filas; i++) {
        matriz[i] = new Array(columnas);
    }

    let cifrado = '';

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (i * columnas + j < mensaje.length) {
                matriz[i][j] = mensaje[i * columnas + j];
            }
        }
    }
    // Verificar la matriz que se ha hecho
    console.log(matriz);

    // poder mostrar el mensaje hecho
    for (let i = 0; i < columnas; i++) {
        for (let j = 0; j < filas; j++) {
            if (matriz[j][i]) {
                cifrado += matriz[j][i];
            }
        }
    }
    document.getElementById('result').value = cifrado;
});

document.getElementById('decrypt').addEventListener('click', function() {
    let filas = parseInt(document.getElementById('filas').value);
    let columnas = parseInt(document.getElementById('columnas').value);
    let cifrado = document.getElementById('message').value;

    let matriz = new Array(filas);
    for (let i = 0; i < filas; i++) {
        matriz[i] = new Array(columnas);
    }
    // Aqui se llena la matriz por columnas con la palabra cifrada
    let index = 0;
    for (let j = 0; j < columnas; j++) {
        for (let i = 0; i < filas; i++) {
            if (index < cifrado.length) {
                matriz[i][j] = cifrado[index];
                index++;
            }
        }
    }
    console.log(matriz);

    let descifrado = '';
    // En esta parte, se lee la matriz por filas para obtener el mensaje
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (matriz[i][j]) {
                descifrado += matriz[i][j];
            }
        }
    }
    document.getElementById('result').value = descifrado;
});



