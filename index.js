document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    // Smooth movement untuk cursor
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Follower dengan sedikit delay
    setTimeout(() => {
        follower.style.left = e.clientX - 16 + 'px';
        follower.style.top = e.clientY - 16 + 'px';
    }, 50);
});

// Efek Hover pada Link
const navItems = document.querySelectorAll('.nav-item, .card');
navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.querySelector('.cursor-follower').style.transform = 'scale(2)';
        document.querySelector('.cursor-follower').style.background = 'rgba(255,255,255,0.1)';
    });
    item.addEventListener('mouseleave', () => {
        document.querySelector('.cursor-follower').style.transform = 'scale(1)';
        document.querySelector('.cursor-follower').style.background = 'none';
    });
});

// Reveal Text Animation (Sederhana tapi efektif)
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.card');
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if(position < window.innerHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});
