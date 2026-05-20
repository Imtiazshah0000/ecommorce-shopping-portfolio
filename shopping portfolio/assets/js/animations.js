// Initialize AOS with premium settings
AOS.init({
    duration: 1200,
    once: true,
    offset: 150,
    easing: 'ease-out-quint'
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Advanced Preloader Timeline with Fail-safe
    const loaderTl = gsap.timeline({
        onComplete: () => {
            document.body.style.overflowY = 'auto';
        }
    });

    const forceHideLoader = () => {
        gsap.to(".loader-wrapper", { duration: 1, height: 0, ease: "expo.inOut", onComplete: () => {
            document.querySelector(".loader-wrapper").style.display = "none";
            document.body.style.overflowY = 'auto';
        }});
    };

    // Force hide loader after 3.5 seconds as a fail-safe
    const failSafeTimeout = setTimeout(forceHideLoader, 3500);

    loaderTl.to(".luxury-loader", { duration: 1.5, scale: 0, opacity: 0, ease: "power4.inOut" })
            .to(".loader-text", { duration: 0.8, y: -50, opacity: 0, ease: "power4.inOut" }, "-=0.5")
            .to(".loader-wrapper", { duration: 1.2, height: 0, ease: "expo.inOut", onComplete: () => clearTimeout(failSafeTimeout) })
            .from(".navbar", { duration: 1, y: -100, opacity: 0, ease: "expo.out" }, "-=0.5")
            .from(".hero-tag", { duration: 0.8, y: 20, opacity: 0, ease: "power3.out" }, "-=0.2")
            .from(".hero-title", { duration: 1.5, scale: 1.1, opacity: 0, ease: "power4.out" }, "-=0.5");

    // 2. Custom Magnetic Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        gsap.to(cursorDot, { x: posX, y: posY, duration: 0 });
        
        // Outline follows with lag
        gsap.to(cursorOutline, { x: posX - 16, y: posY - 16, duration: 0.15 });
    });

    // Cursor interaction with buttons/links
    const interactiveElements = document.querySelectorAll('a, button, .premium-card, .collection-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursorOutline, { scale: 2, borderColor: 'var(--neon-purple)', backgroundColor: 'rgba(188, 19, 254, 0.1)', duration: 0.3 });
            gsap.to(cursorDot, { scale: 0, duration: 0.2 });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(cursorOutline, { scale: 1, borderColor: 'var(--neon-cyan)', backgroundColor: 'transparent', duration: 0.3 });
            gsap.to(cursorDot, { scale: 1, duration: 0.2 });
        });
    });

    // 3. Hero Floating Elements (GSAP)
    gsap.to(".bag-1", { y: -40, rotation: 15, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".bag-2", { y: 30, rotation: -10, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
    gsap.to(".bag-3", { x: 20, y: -20, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });

    // 4. Parallax Effect for Lifestyle Banners
    gsap.utils.toArray(".parallax-bg").forEach(bg => {
        gsap.to(bg, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: bg.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // 5. Typing Animation (Enhanced)
    const typingText = document.getElementById('typing-text');
    const phrases = [
        "Curated for the modern elite.",
        "Where luxury meets innovation.",
        "Your global shopping destination.",
        "Excellence in every detail."
    ];
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function typeEffect() {
        const current = phrases[phraseIdx];
        if (isDeleting) {
            typingText.textContent = current.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typingText.textContent = current.substring(0, charIdx + 1);
            charIdx++;
        }

        if (!isDeleting && charIdx === current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2500);
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 40 : 80);
        }
    }
    setTimeout(typeEffect, 4000);

    // 6. Stats Counter (GSAP ScrollTrigger)
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        ScrollTrigger.create({
            trigger: counter,
            start: "top 90%",
            onEnter: () => {
                gsap.to(counter, {
                    innerText: target,
                    duration: 2.5,
                    snap: { innerText: 1 },
                    ease: "power2.out"
                });
            }
        });
    });

    // 7. Premium Card Hover (3D Tilt Effect)
    const cards = document.querySelectorAll('.premium-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5 });
        });
    });

    // 8. Fashion Particles (contained in Ladies Fashion section)
    const fashionSection = document.querySelector('.ladies-fashion');
    if (fashionSection) {
        for (let i = 0; i < 15; i++) {
            const dot = document.createElement('div');
            dot.className = 'fashion-particle';
            const size = Math.random() * 15 + 5;
            dot.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: linear-gradient(to right, var(--neon-pink), var(--neon-purple));
                border-radius: 50%;
                opacity: 0.15;
                pointer-events: none;
                z-index: 1;
            `;
            fashionSection.appendChild(dot);

            gsap.set(dot, {
                x: Math.random() * window.innerWidth,
                y: Math.random() * fashionSection.offsetHeight
            });

            gsap.to(dot, {
                x: "+=" + (Math.random() * 100 - 50),
                y: "+=" + (Math.random() * 100 - 50),
                duration: Math.random() * 5 + 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }
});
