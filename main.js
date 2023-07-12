
let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let clickCount = 0

burger.addEventListener('click', function() {
  let computedStyle = window.getComputedStyle(navbar);
  let display = computedStyle.getPropertyValue('display');

  if (display === 'none') {
    navbar.style.display = 'flex';
    navbar.style.opacity = '0';
    navbar.style.transform = 'translateY(-100%)';

    setTimeout(function() {
      navbar.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease';
      navbar.style.opacity = '1';
      navbar.style.transform = 'translateY(0)';
    }, 10);
  } else {
    navbar.style.opacity = '0';
    navbar.style.transform = 'translateY(-100%)';

    setTimeout(function() {
      navbar.style.transition = 'none';
      navbar.style.display = 'none';
    }, 300);
  }
  clickCount++
    let rotation = clickCount % 2 === 0 ? 0 : -90
    burger.style.transition = 'transform 0.5s'
    burger.style.transform = `rotate(${rotation}deg)`
});









const sr1 = ScrollReveal({
    duration: 1500,
    reset: false,
    distance: '50px'
})

sr1.reveal('.hidden-01', {origin: 'left', delay: 200})
sr1.reveal('.hidden-02', {origin: 'left', delay: 400})
sr1.reveal('.hidden-03', {origin: 'bottom', delay: 500})


