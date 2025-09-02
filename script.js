  // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();
        
        // Add sticky CTA on scroll
        window.addEventListener('scroll', function() {
            const stickyCta = document.querySelector('.sticky-cta');
            if (window.innerWidth < 769) {
                if (window.scrollY > 300) {
                    stickyCta.style.display = 'block';
                } else {
                    stickyCta.style.display = 'none';
                }
            }
        });
        
        // Track CTA clicks
        document.getElementById('buy-now').addEventListener('click', function() {
            console.log('CTA clicked - would send tracking data here');
        });