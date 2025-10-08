// ========================================
// Back to Top Button
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        // Smooth scroll to top when clicked
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ========================================
// Publication Filter Buttons
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const publicationItems = document.querySelectorAll('.publication-item');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter publications
            publicationItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// ========================================
// Navigation Toggle for Mobile
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
});

// ========================================
// Sticky Navigation - DISABLED (navigation is no longer fixed)
// ========================================
// Navigation is now absolute positioned and scrolls with the page

// ========================================
// Side Navigation Active State
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const sideNavLinks = document.querySelectorAll('.side-nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    if (sideNavLinks.length === 0) return;
    
    console.log('Side nav initialized with', sideNavLinks.length, 'links and', sections.length, 'sections');
    
    // Smooth scroll for side navigation
    sideNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // No offset needed since navbar is not fixed
                const targetPosition = targetSection.offsetTop;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active state on scroll
    function updateActiveSideNav() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        let currentSection = 'home';
        
        // Find the current section based on scroll position
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 250; // Offset for better UX
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = sectionId;
            }
        });
        
        console.log('Current scroll:', scrollPosition, 'Active section:', currentSection);
        
        // Update active class
        sideNavLinks.forEach(link => {
            const linkHref = link.getAttribute('href').substring(1);
            if (linkHref === currentSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Listen to scroll events with throttle for performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateActiveSideNav();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    
    // Initial update
    updateActiveSideNav();
});

// ========================================
// Lightbox for Photography Page
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return; // Only run on photography page
    
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = lightbox.querySelector('.lightbox-title');
    const lightboxDesc = lightbox.querySelector('.lightbox-description');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    let currentIndex = 0;
    let images = [];
    let scrollPosition = 0;
    
    // Get all gallery images
    const galleryItems = document.querySelectorAll('.grid-item');
    galleryItems.forEach((item, index) => {
        images.push({
            src: item.dataset.src,
            title: item.dataset.title,
            desc: item.dataset.desc
        });
        
        item.addEventListener('click', function() {
            currentIndex = index;
            openLightbox();
        });
    });
    
    function openLightbox() {
        scrollPosition = window.pageYOffset;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
        
        lightbox.style.display = 'flex';
        updateLightboxContent();
        
        // Trigger animation
        setTimeout(() => {
            lightbox.classList.add('active');
        }, 10);
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.style.display = 'none';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, scrollPosition);
        }, 300);
    }
    
    function updateLightboxContent() {
        const img = images[currentIndex];
        lightboxImg.src = img.src;
        lightboxTitle.textContent = img.title;
        lightboxDesc.textContent = img.desc;
    }
    
    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightboxContent();
    }
    
    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightboxContent();
    }
    
    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        }
    });
});
