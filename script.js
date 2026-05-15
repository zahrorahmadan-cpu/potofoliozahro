const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
 menu.classList.toggle('hidden');
});

var i = 0;
var txt = "Welcome to My Portofolio";
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
    setTimeout(typeWriter, speed);
    }
  }
typeWriter();


const section = document.querySelector(".skill");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const bars = document.querySelectorAll(".progress-bar");

      bars.forEach((bar, index) => {
        const width = bar.getAttribute("data-width");

        setTimeout(() => {
          bar.style.width = width;
        }, index * 250); // delay biar berurutan
      });

      observer.unobserve(section);
    }
  });
}, {
  threshold: 0.5
});

observer.observe(section);

