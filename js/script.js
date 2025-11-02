document.addEventListener('DOMContentLoaded', () => {
  // Contact form submit handler (client-side)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();

      // Simple validation
      if (!name || !email || !msg) {
        alert('Please complete all fields before sending.');
        return;
      }

      // Show success (placeholder for server submit)
      alert(`Thanks ${name}! Your message was received. I will get back to you at ${email}.`);
      form.reset();
    });
  }

  // Projects "Show More" toggle
  const showBtn = document.getElementById('showMoreProjects');
  const more = document.getElementById('moreProjects');
  if (showBtn && more) {
    showBtn.addEventListener('click', () => {
      more.classList.toggle('d-none');
      showBtn.textContent = more.classList.contains('d-none') ? 'Show More Projects' : 'Show Less';
    });
  }
});
