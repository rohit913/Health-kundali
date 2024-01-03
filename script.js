document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('cta-button').addEventListener('click', function() {
    // Replace 'your-destination-url' with the URL you want to redirect to
    window.location.href = 'your-destination-url';
});
function toggleMenu() {
    var navbarRight = document.querySelector('.navbar-right');
    navbarRight.classList.toggle('active');
}
// Example JavaScript to toggle the solution details
document.querySelectorAll('.solution-item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
        // You can expand this to, for example, show more information
    });
});

  function takeTest() {
    // Replace the URL with the link to your Health Kundali Test
    window.location.href = 'URL_TO_HEALTH_KUNDALI_TEST';
  }  

  