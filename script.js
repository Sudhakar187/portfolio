// Animate progress bars
document.addEventListener('DOMContentLoaded', () => {
  const skills = [
    { id: 'htmlBar', percent: 90 },
    { id: 'jsBar', percent: 80 },
    { id: 'reactBar', percent: 70 },
    { id: 'nodeBar', percent: 75 }
  ];
  skills.forEach(skill => {
    const bar = document.getElementById(skill.id);
    let width = 0;
    const interval = setInterval(() => {
      if (width >= skill.percent) {
        clearInterval(interval);
      } else {
        width++;
        bar.style.width = width + '%';
        bar.textContent = width + '%';
      }
    }, 15);
  });
});
$(document).ready(function () {
  function checkFadeIn() {
    $('.fade-in').each(function () {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element - 100) {
        $(this).addClass('visible');
      }
    });
  }
  $(window).on('scroll', checkFadeIn);
  checkFadeIn();
});
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msgBox = document.getElementById('formMsg');
  if (name && email && message) {
    msgBox.style.display = 'block';
    msgBox.textContent = '✅ Message sent successfully!';
    this.reset();
    setTimeout(() => msgBox.style.display = 'none', 4000);
  } else {
    msgBox.style.display = 'block';
    msgBox.classList.remove('text-success');
    msgBox.classList.add('text-danger');
    msgBox.textContent = '⚠️ Please fill in all the fields.';
  }
});
// Bootstrap carousel instance
const carouselElement = document.querySelector('#achievementCarousel');
const carousel = new bootstrap.Carousel(carouselElement);
// Button to move to the next image
document.getElementById('nextSlideBtn').addEventListener('click', () => {
  carousel.next();});




