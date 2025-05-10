/**
 * Main JavaScript file for general website functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // Handle smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Initialize animations for elements as they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
      
      if (elementPosition < screenPosition) {
        element.classList.add('animate-fadeIn');
      }
    });
  };

  // Run on load and scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});