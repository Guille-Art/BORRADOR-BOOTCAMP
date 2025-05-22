// funcionalidad acorde
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const parent = header.parentElement;
    parent.classList.toggle('accordion-active');
  });
  header.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      header.click();
    }
  });
});

// Smooth scrolling for nav links 
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  });
});

if (document.getElementById('adoptionChart')) {
  const adoptionCtx = document.getElementById('adoptionChart').getContext('2d');
  new Chart(adoptionCtx, {
    type: 'bar',
    data: {
      labels: ['Universidades', 'Escuelas Primarias', 'Institutos Técnicos', 'Plataformas Online', 'Centros de Capacitación'],
      datasets: [{
        label: 'Porcentaje de adopción (%)',
        data: [65, 55, 45, 70, 50],
        backgroundColor: '#00e5ff'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, max: 100, ticks: {color: '#ccc'} },
        x: { ticks: {color: '#ccc'} }
      },
      plugins: {
        legend: { labels: {color: '#00e5ff'} },
        tooltip: { enabled: true }
      }
    }
  });
}

if (document.getElementById('performanceChart')) {
  const perfCtx = document.getElementById('performanceChart').getContext('2d');
  new Chart(perfCtx, {
    type: 'doughnut',
    data: {
      labels: ['Mejora con IA', 'Sin IA'],
      datasets: [{
        label: 'Mejora de resultados académicos',
        data: [20, 80],
        backgroundColor: ['#00e5ff', '#203a43']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom', labels: { color: '#00e5ff' } },
        tooltip: { enabled: true }
      }
    }
  });
}

if (document.getElementById('engagementChart')) {
  const engagementCtx = document.getElementById('engagementChart').getContext('2d');
  new Chart(engagementCtx, {
    type: 'bar',
    data: {
      labels: ['Gamificación', 'Contenido Interactivo', 'Tutor Virtual', 'Plataformas Adaptativas'],
      datasets: [{
        label: 'Incremento de participación (%)',
        data: [40, 45, 38, 42],
        backgroundColor: '#00bcd4'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, max: 60, ticks: { color: '#ccc' } },
        x: { ticks: { color: '#ccc' } }
      },
      plugins: {
        legend: { labels: { color: '#00bcd4' } },
        tooltip: { enabled: true }
      }
    }
  });
}
