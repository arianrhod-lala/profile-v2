(function () {
    'use strict';

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // update focus for accessibility
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
    });

    function showToast(text, timeout = 1600) {
        const t = document.createElement('div');
        Object.assign(t.style, {
            position: 'fixed',
            left: '50%',
            bottom: '30px',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.8)',
            color: '#fff',
            padding: '8px 14px',
            borderRadius: '6px',
            fontSize: '13px',
            zIndex: 9999,
            opacity: '0',
            transition: 'opacity 200ms ease',
            pointerEvents: 'none'
        });
        t.textContent = text;
        document.body.appendChild(t);
        requestAnimationFrame(() => t.style.opacity = '1');
        setTimeout(() => {
            t.style.opacity = '0';
            setTimeout(() => t.remove(), 250);
        }, timeout);
    }

    const emailBtn = document.querySelector('.email-button');
    if (emailBtn) {
        emailBtn.addEventListener('click', () => {
            showToast('Opening your mail client...');
        });
    }

    let lightboxOverlay = null;
    function openLightbox(src, alt = '') {
        if (lightboxOverlay) return;
        lightboxOverlay = document.createElement('div');
        Object.assign(lightboxOverlay.style, {
            position: 'fixed',
            inset: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.85)',
            zIndex: 9998,
            cursor: 'zoom-out',
            padding: '20px'
        });

        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        Object.assign(img.style, {
            maxWidth: '94%',
            maxHeight: '94%',
            boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
            borderRadius: '6px',
            cursor: 'auto'
        });

        lightboxOverlay.addEventListener('click', closeLightbox);
        lightboxOverlay.appendChild(img);
        document.body.appendChild(lightboxOverlay);
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightboxOverlay) return;
        lightboxOverlay.removeEventListener('click', closeLightbox);
        lightboxOverlay.remove();
        lightboxOverlay = null;
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', (e) => {
            openLightbox(e.currentTarget.src, e.currentTarget.alt || '');
        });
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeLightbox();
            document.querySelectorAll('.sidebar.active').forEach(s => s.classList.remove('active'));
        }

        if (e.key.toLowerCase() === 's' && !e.metaKey && !e.ctrlKey && !e.altKey) {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) sidebar.classList.toggle('active');
        }
    });

    window.addEventListener('resize', () => {
        if (lightboxOverlay) closeLightbox();
    });
})();