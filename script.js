// ---------------- MENÚ HAMBURGUESA ----------------
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const bars = menuBtn.querySelectorAll('.menu-icon');

// Crear overlay dorado dinámico
const overlay = document.createElement('div');
overlay.id = 'overlay';
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.background = 'linear-gradient(180deg, rgba(212,175,55,0.15), rgba(0,0,0,0.8))';
overlay.style.opacity = '0';
overlay.style.transition = 'opacity 0.4s ease';
overlay.style.zIndex = '40';
overlay.style.pointerEvents = 'none';

document.body.appendChild(overlay);

const toggleMenu = () => {
  const isActive = menuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');

  // Efecto morph del menú hamburguesa
  if (isActive) {
    bars[0].style.transform = 'rotate(45deg) translateY(9px)';
    bars[1].style.opacity = '0';
    bars[2].style.transform = 'rotate(-45deg) translateY(-9px)';
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';
  } else {
    bars[0].style.transform = 'none';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'none';
    overlay.style.opacity = '0';
    setTimeout(() => (overlay.style.pointerEvents = 'none'), 300);
  }
};

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', (e) => {
  if (
    !mobileMenu.classList.contains('hidden') &&
    !mobileMenu.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    toggleMenu();
  }
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', toggleMenu);
});


// ---------------- SWEETALERT2 - CATÁLOGO EN DESARROLLO ----------------
function mostrarAlertaCatalogo() {
  Swal.fire({
    title: '<h2 style="color:#d4af37; font-family:Playfair Display;">Catálogo en desarrollo</h2>',
    html: `
      <video autoplay muted playsinline style="width:100%; border-radius:12px; margin-bottom:15px;">
        <source src="assets/Athletic_Store_Animado.mp4" type="video/mp4">
      </video>
      <p style="color:#ddd; font-family:Poppins; font-size:15px;">
        Estamos trabajando para ofrecerte un amplio catálogo de calzado y accesorios deportivos.
        <br><br><span style="color:#d4af37;">¡Vuelve pronto para descubrirlo!</span>
      </p>
    `,
    background: '#111',
    color: '#fff',
    confirmButtonText: 'Entendido',
    confirmButtonColor: '#d4af37',
    width: '600px',
    backdrop: `rgba(0,0,0,0.85)`,
    showClass: {
      popup: 'animate__animated animate__fadeInDown animate__faster'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp animate__faster'
    }
  });
}


// ---------------- EVENTOS QUE DISPARAN LA ALERTA ----------------

// 1️⃣ Botón principal "Ver catálogo"
const btnCatalogo = document.querySelector('#btnCatalogo');
if (btnCatalogo) {
  btnCatalogo.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarAlertaCatalogo();
  });
}

// 2️⃣ Enlace del menú móvil "Productos"
const linkProductosMovil = document.querySelector('#mobile-menu a[href="#productos"]');
if (linkProductosMovil) {
  linkProductosMovil.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarAlertaCatalogo();
  });
}

// 3️⃣ Enlace del navbar desktop "Productos"
const linkProductosDesktop = document.querySelector('header nav ul li a[href="#productos"]');
if (linkProductosDesktop) {
  linkProductosDesktop.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarAlertaCatalogo();
  });
}
