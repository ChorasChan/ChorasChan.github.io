document.addEventListener('DOMContentLoaded', function() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    const homeSection = document.getElementById('home');

    if (backToTopButton && homeSection) {
        const homeObserver = new IntersectionObserver(([entry]) => {
            backToTopButton.classList.toggle('show', !entry.isIntersecting);
        }, { threshold: 0.05 });

        homeObserver.observe(homeSection);
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: scrollBehavior });
        });
    }

    // Publication Filter Buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    const publicationItems = document.querySelectorAll('.publication-item');

    filterButtons.forEach(button => {
        button.setAttribute('aria-pressed', button.classList.contains('active'));

        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            filterButtons.forEach(btn => {
                const isActive = btn === this;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-pressed', isActive);
            });
            this.classList.add('active');

            publicationItems.forEach(item => {
                const category = item.getAttribute('data-category');
                item.classList.toggle('hidden', filter !== 'all' && category !== filter);
            });
        });
    });

    // Navigation Toggle for Mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        const closeMenu = () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        };

        navToggle.addEventListener('click', function() {
            const isOpen = navMenu.classList.toggle('active');
            navToggle.classList.toggle('active', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') closeMenu();
        });
    }

    // Navigation Active State
    const sideNavLinks = document.querySelectorAll('.side-nav-link');
    const sectionNavLinks = document.querySelectorAll('.side-nav-link, .nav-link[href^="#"]');
    const sections = document.querySelectorAll('section[id]');

    sideNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
            }
        });
    });

    if (sections.length && sectionNavLinks.length) {
        const sectionObserver = new IntersectionObserver(entries => {
            const activeEntry = entries.find(entry => entry.isIntersecting);
            if (!activeEntry) return;

            const activeId = activeEntry.target.id;
            sectionNavLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
            });
        }, { rootMargin: '-20% 0px -70% 0px' });

        sections.forEach(section => sectionObserver.observe(section));
    }
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
