document.addEventListener("DOMContentLoaded", function () {
    // --- Configuración de datos ---
    const datosGraficos = [
        {
            id: "ia-global",
            titulo: "IA Global",
            descripcion: "Datos sobre el uso global de la IA.",
            datos: [30, 50, 20],
            etiquetas: ["2022", "2023", "2024"]
        },
        {
            id: "ia-salud",
            titulo: "IA en la Salud",
            descripcion: "Impacto de la IA en la salud.",
            datos: [10, 40, 60],
            etiquetas: ["2022", "2023", "2024"]
        },
        {
            id: "ia-educacion",
            titulo: "IA en la Educación",
            descripcion: "Aplicaciones de la IA en la educación.",
            datos: [15, 25, 45],
            etiquetas: ["2022", "2023", "2024"]
        }
    ];

    // --- Utilidades ---
    function cargarChartJs(callback) {
        if (typeof Chart !== 'undefined') {
            callback();
            return;
        }
        if (document.querySelector('script[src="https://cdn.jsdelivr.net/npm/chart.js"]')) {
            document.querySelector('script[src="https://cdn.jsdelivr.net/npm/chart.js"]').onload = callback;
            return;
        }
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/chart.js";
        script.onload = callback;
        document.head.appendChild(script);
    }

    function aplicarEstilosBasicos() {
        document.body.style.fontFamily = "Arial, sans-serif";
        document.body.style.margin = "0";
        document.body.style.padding = "20px";
        document.body.style.backgroundColor = "#f4f4f4";
    }

    // --- Componentes UI ---
    function crearBarraSuperior() {
        const barra = document.createElement("div");
        barra.style.display = "flex";
        barra.style.alignItems = "center";
        barra.style.background = "#f8f9fa";
        barra.style.padding = "12px 24px";
        barra.style.boxShadow = "0 2px 4px rgba(0,0,0,0.04)";
        barra.style.marginBottom = "24px";

        const botonAtras = document.createElement("button");
        botonAtras.textContent = "← Volver atrás";
        botonAtras.style.background = "#007bff";
        botonAtras.style.color = "#fff";
        botonAtras.style.border = "none";
        botonAtras.style.padding = "8px 18px";
        botonAtras.style.borderRadius = "4px";
        botonAtras.style.cursor = "pointer";
        botonAtras.style.fontSize = "16px";
        botonAtras.style.marginRight = "16px";
        botonAtras.onclick = function () {
            window.location.href = "index.html";
        };

        const titulo = document.createElement("h1");
        titulo.textContent = "Gráficos de Inteligencia Artificial";
        titulo.style.margin = "0";
        titulo.style.fontSize = "1.5rem";
        titulo.style.fontWeight = "bold";
        titulo.style.textAlign = "center";
        titulo.style.color = "#333";

        barra.appendChild(botonAtras);
        barra.appendChild(titulo);
        document.body.insertBefore(barra, document.body.firstChild);
    }

    function crearContenedorGraficos() {
        let contenedor = document.querySelector('.grafico-contenedor');
        if (!contenedor) {
            contenedor = document.createElement('div');
            contenedor.className = 'grafico-contenedor';
            contenedor.style.margin = "24px";
            document.body.appendChild(contenedor);
        }
        return contenedor;
    }

    function crearSeccionGrafico(grafico) {
        const seccion = document.createElement("div");
        seccion.style.marginBottom = "30px";
        seccion.style.padding = "10px";
        seccion.style.backgroundColor = "#fafafa";
        seccion.style.borderRadius = "8px";
        seccion.style.boxShadow = "0 2px 6px rgba(0,0,0,0.05)";

        const boton = document.createElement("button");
        boton.textContent = grafico.titulo;
        boton.style.display = "block";
        boton.style.marginBottom = "8px";
        boton.style.background = "#007bff";
        boton.style.color = "#fff";
        boton.style.border = "none";
        boton.style.padding = "8px 16px";
        boton.style.borderRadius = "4px";
        boton.style.cursor = "pointer";
        boton.style.fontSize = "15px";

        const contenido = document.createElement("div");
        contenido.id = grafico.id;
        contenido.style.display = "none";
        contenido.style.padding = "10px";
        contenido.style.backgroundColor = "#f1f1f1";
        contenido.style.border = "1px solid #ccc";
        contenido.style.borderRadius = "6px";

        const descripcion = document.createElement("p");
        descripcion.textContent = grafico.descripcion;
        contenido.appendChild(descripcion);

        const canvas = document.createElement("canvas");
        canvas.id = `canvas-${grafico.id}`;
        canvas.width = 400;
        canvas.height = 200;
        contenido.appendChild(canvas);

        boton.onclick = function () {
            const visible = contenido.style.display === "block";
            document.querySelectorAll('.grafico-contenedor > div > div').forEach(div => {
                div.style.display = "none";
            });
            if (!visible) {
                contenido.style.display = "block";
                if (!canvas.dataset.rendered) {
                    new Chart(canvas, {
                        type: 'bar',
                        data: {
                            labels: grafico.etiquetas,
                            datasets: [{
                                label: grafico.titulo,
                                data: grafico.datos,
                                backgroundColor: 'rgba(54, 162, 235, 0.5)'
                            }]
                        },
                        options: {
                            responsive: false,
                            scales: {
                                y: { beginAtZero: true }
                            }
                        }
                    });
                    canvas.dataset.rendered = "true";
                }
            }
        };

        seccion.appendChild(boton);
        seccion.appendChild(contenido);
        return seccion;
    }

    // --- Inicialización ---
    aplicarEstilosBasicos();
    crearBarraSuperior();

    cargarChartJs(function () {
        const contenedor = crearContenedorGraficos();
        datosGraficos.forEach(grafico => {
            const seccion = crearSeccionGrafico(grafico);
            contenedor.appendChild(seccion);
        });
    });
});
window.onbeforeunload = function () {
    window.location.href = "https://tusitio.com/otra-pagina";
};