(function (window, document) {
    const markers = document.querySelectorAll('mark');
    let userActionTriggered = false; // Initialize to false

    // Detect user scroll or click to trigger user actions
    window.addEventListener('scroll', function() {
        userActionTriggered = true;
    });

    document.addEventListener('click', function() {
        userActionTriggered = true;
    });

    // Intersection Observer to manage mark elements
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && entry.target.closest('#resume-section') === null) {
                // Only scroll if the user action has been triggered, and it's not the resume section
                if (userActionTriggered) {
                    entry.target.style.animation = 'highlight 900ms 1 ease-out';
                }

                // Trigger re-animation by removing and adding a class
                requestAnimationFrame(() => {
                    entry.target.style.animation = 'none'; // Reset animation
                    setTimeout(() => {
                        entry.target.style.animation = ''; // Reapply animation
                        entry.target.style.animationPlayState = 'running'; // Start animation
                    }, index * 250);
                });
            } else {
                requestAnimationFrame(() => {
                    entry.target.style.animationPlayState = 'paused';
                });
            }
        });
    }, {
        threshold: 0
    });

    markers.forEach(mark => {
        observer.observe(mark);
    });

        document.addEventListener('DOMContentLoaded', function() {
            const projectTiles = document.querySelectorAll('.projects-loop');
            const sectionItems = document.querySelectorAll('.section-item'); // Items in other sections

            const observer = new IntersectionObserver(entries => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 200); // Staggered animation
                    }
                });
            }, {
                threshold: 0.12 // Trigger when 20% of the tile is visible
            });

            sectionItems.forEach(item => {
                observer.observe(item);
            });
        
            projectTiles.forEach(tile => {
                observer.observe(tile);
            });
            

        });

        

    // Additional styling for each mark element on page load
    document.querySelectorAll('mark').forEach((mark, index) => {
        mark.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'; 
        mark.style.transitionDelay = `${index * 0.3}s`; 
        mark.style.animationPlayState = 'paused';
        mark.style.animationIterationCount = '1'; 
    });

    // Optional parallax effect for the banner section
    window.addEventListener('scroll', function () {
        const banner = document.querySelector('.banner');
        let scrollPos = window.scrollY;
        banner.style.backgroundPositionY = `${scrollPos * 0.5}px`;
    });

    // Debounced scroll event handler (in case of future use)
    let debounceTimer;
    window.addEventListener('scroll', function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            // Your scroll logic here, if needed
        }, 100);
    });

    // Ensure no automatic scrolling on load by resetting the user action
    window.addEventListener('DOMContentLoaded', function() {
        userActionTriggered = false; // Reset user action state on load
    });
})(window, document);


document.querySelectorAll('mark').forEach((mark, index) => {
    mark.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'; 
    mark.style.transitionDelay = `${index * 0.3}s`; 
    mark.style.animationPlayState = 'paused';
    mark.style.animationIterationCount = '1'; 
});

window.addEventListener('scroll', function () {
    const banner = document.querySelector('.banner');
    let scrollPos = window.scrollY;
    banner.style.backgroundPositionY = `${scrollPos * 0.5}px`;
});
