let transacciones = document.getElementById('transacciones');

fetch('http://localhost:3000/api/gastos')
    .then(datos => datos.json())
    .then(registros => {
        registros.forEach(registro => {
            const claseExtra = registro.tipo == 1 ? 'gastos' : 'ingresos';
            transacciones.innerHTML += `
                <div class="fila ${claseExtra}">
                    <div>${registro.nombre}</div>
                    <div>${registro.monto}</div>
                </div>`;
        });
    })
    .catch(error => console.error('Error al cargar transacciones:', error));