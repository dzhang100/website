function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  function countUp() {
    const counters = document.querySelectorAll('.counter');
    const speed = 750; // the lower the slower
  
    const options = {
      threshold: 1,
      rootMargin: "0px 0px -200px 0px" // adjust the rootMargin as needed
    };
  
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('counted');
          const updateCount = () => {
            const target = +entry.target.getAttribute('data-target');
            const count = +entry.target.innerText;
            const inc = target / speed;
            if (count < target) {
              entry.target.innerText = Math.ceil(count + inc);
              setTimeout(updateCount, 1);
            } else {
              entry.target.innerText = target;
            }
          }
          updateCount();
        }
      });
    }, options);
  
    counters.forEach(counter => {
      observer.observe(counter);
    });
  }
  
  // Call the function when the document is loaded
  document.addEventListener('DOMContentLoaded', countUp);
  

  