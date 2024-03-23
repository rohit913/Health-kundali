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

//     // Get all video boxes
// var videoBoxes = document.getElementsByClassName('video-box');

// // Function to play the video
// function playVideo(video) {
//   video.play();
// }

// // Function to pause the video
// function pauseVideo(video) {
//   video.pause();
// }

// // Attach the hover event to each video box
// for (var i = 0; i < videoBoxes.length; i++) {
//   videoBoxes[i].addEventListener('mouseover', function () {
//      // Get the video element
//      var video = this.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName('video')[0];

//      // Add a custom cursor
//      this.style.cursor = 'pointer';

//      // Play the video
//      playVideo(video);
//   });

//   videoBoxes[i].addEventListener('mouseout', function () {
//      // Get the video element
//      var video = this.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName('video')[0];

//      // Reset the cursor
//      this.style.cursor = 'default';

//      // Pause the video
//      pauseVideo(video);
//   });
// }



 document.addEventListener('DOMContentLoaded', () => {
            // Function to check if an element is in view
            function isInView(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top <= window.innerHeight &&
                    rect.left <= window.innerWidth &&
                    rect.bottom >= 0 &&
                    rect.right >= 0
                );
            }

            // Function to add animation class to elements in view
            function addAnimation() {
                document.querySelectorAll('.service img, .service').forEach((element) => {
                    if (isInView(element)) {
                        element.classList.add('in-view');
                    }
                });
            }

            // Event listener for scroll events to add animations
            window.addEventListener('scroll', addAnimation);

            // Check for animation on initial load
            addAnimation();

            // Subscribe button click handler
            window.subscribe = function () {
                // Simple popup logic
                const modal = document.createElement('div');
                modal.className = 'modal';
                modal.innerHTML = `
          <div class="modal-content">
            <span class="close-button">&times;</span>
            <p>Thank you for your interest!</p>
            <!-- Include more content here -->
          </div>
        `;
                document.body.appendChild(modal);

                // Show the modal
                modal.style.display = 'flex';

                // Close the modal on click
                modal.querySelector('.close-button').onclick = function () {
                    modal.style.display = 'none';
                    document.body.removeChild(modal);
                };
            };
        });

        // Execute the animation check on load
        addAnimation();
