const usuario = 'Jaime-Moranchel';
const repositorio = 'Jaime-Moranchel';

async function obtenerProyectos() {
    try {
        const respuesta = await fetch(`https://api.github.com/repos/${usuario}/${repositorio}/projects`);
        const proyectos = await respuesta.json();

        if (Array.isArray(proyectos) && proyectos.length > 0) {
            // Obtener los últimos 3 proyectos
            const ultimosProyectos = proyectos.slice(-3).reverse();
            mostrarProyectos(ultimosProyectos);
        } else {
            console.log('No se encontraron proyectos.');
        }
    } catch (error) {
        console.error('Error al obtener los proyectos:', error);
    }
}

function mostrarProyectos(proyectos) {
    const contenedor = document.getElementById('proyectos'); // Asegúrate de tener un elemento con este ID
    contenedor.innerHTML = ''; // Limpiar el contenedor

    proyectos.forEach(proyecto => {
        const proyectoDiv = document.createElement('div');
        proyectoDiv.innerHTML = `
            <h3>${proyecto.name}</h3>
            <p>${proyecto.description || 'Sin descripción'}</p>
            <a href="${proyecto.html_url}" target="_blank">Ver proyecto</a>
        `;
        contenedor.appendChild(proyectoDiv);
    });
}

// Llamar a la función para obtener y mostrar los proyectos
obtenerProyectos();
