  const carouselImages = document.querySelectorAll('.carousel-image');
        const thumbnails = document.querySelectorAll('.thumb');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let currentIndex = 0;
        let autoSlideInterval;

        // Function to show image by index
        function showImage(index) {
            // Hide all images
            carouselImages.forEach(img => img.classList.remove('active'));
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            
            // Show the selected image and thumbnail
            carouselImages[index].classList.add('active');
            thumbnails[index].classList.add('active');
            
            currentIndex = index;
        }

        // Next image function
        function nextImage() {
            let nextIndex = (currentIndex + 1) % carouselImages.length;
            showImage(nextIndex);
        }

        // Previous image function
        function prevImage() {
            let prevIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
            showImage(prevIndex);
        }

        // Set up event listeners
        nextButton.addEventListener('click', nextImage);
        prevButton.addEventListener('click', prevImage);

        // Thumbnail click functionality
        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                showImage(index);
                resetAutoSlide();
            });
        });

        // Auto slide functionality
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextImage, 1000); // Change image every 4 seconds
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        // Start auto slide on page load
        startAutoSlide();

        // Pause auto slide when hovering over carousel
        const carousel = document.querySelector('.carousel');
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });

        carousel.addEventListener('mouseleave', () => {
            startAutoSlide();
        });

        // ====== Sticky CTA (Mobile) ======
        const stickyCta = document.querySelector('.sticky-cta');
        window.addEventListener('scroll', () => {
            if (window.innerWidth < 769) {
                if (window.scrollY > 300) {
                    stickyCta.style.display = 'block';
                } else {
                    stickyCta.style.display = 'none';
                }
            }
        });

        // ====== Stock Counter ======
        let stock = 12;
        const stockElement = document.getElementById('stock-count');
        const buyButtons = document.querySelectorAll('#buy-now, .sticky-cta .btn');

        // Update stock when clicking Buy Now
        buyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (stock > 0) {
                    stock--;
                    if (stockElement) stockElement.textContent = stock;
                    
                    if (stock === 0) {
                        alert("Désolé, rupture de stock!");
                        e.preventDefault();
                    }
                } else {
                    alert("Désolé, rupture de stock!");
                    e.preventDefault();
                }
            });
        });

        // Set current year in footer if needed
        document.addEventListener('DOMContentLoaded', function() {
            const yearElement = document.querySelector('footer div');
            if (yearElement) {
                yearElement.textContent = `© ${new Date().getFullYear()} TechStore — Site affilié`;
            }
        });