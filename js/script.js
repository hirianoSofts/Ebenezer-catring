const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.innerHTML = isOpen
    ? '<i class="fi fi-rr-cross-small"></i>'
    : '<i class="fi fi-rr-menu-burger"></i>';
});

mainNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.innerHTML = '<i class="fi fi-rr-menu-burger"></i>';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const eventType = document.getElementById('eventType').value;
  const message = document.getElementById('message').value.trim();

  // Configure o número oficial com indicativo do país, apenas dígitos.
  const whatsappNumber = '258XXXXXXXXX';
  if (whatsappNumber.includes('X')) {
    alert('Para ativar o envio, configure o número oficial de WhatsApp no ficheiro js/script.js.');
    return;
  }

  const text = `Olá, Ebenézer Catering! Gostaria de solicitar um orçamento.\n\nNome: ${name}\nTelefone: ${phone}\nTipo de evento: ${eventType}\nDetalhes: ${message || 'Não indicado'}`;
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});
