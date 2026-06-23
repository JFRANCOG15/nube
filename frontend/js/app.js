let transacciones = document.getElementById('transacciones');
fetch('http://localhost:3000/api/gastos').then(datos => datos.json()).then(registros => {

for(i=0;i<=5;i++){


    if (registros.data[i].tipo == 1) {
        transacciones.innerHTML += `<div class="fila gastos">
        <div>${registros.data[i].nombre}</div>
        <div>${registros.data[i].monto}</div>
    </div>`
    }
transacciones.innerHTML += `<div class="fila">
                        <div>${registros.data[i].nombre}</div>
                        <div>${registros.data[i].monto}</div>
                    </div>`
}
})
