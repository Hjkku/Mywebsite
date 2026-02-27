// Initialize AOS
AOS.init({ duration: 1000, once: true });

// 1. Custom Cursor Movement
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 2. Typing Effect
const words = ["FUTURE.", "EXPERIENCE.", "DIGITAL ECOSYSTEM."];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
    currentWord = words[i];
    if (isDeleting) {
        document.getElementById("typing-text").textContent = currentWord.substring(0, j - 1);
        j--;
        if (j == 0) { isDeleting = false; i = (i + 1) % words.length; }
    } else {
        document.getElementById("typing-text").textContent = currentWord.substring(0, j + 1);
        j++;
        if (j == currentWord.length) isDeleting = true;
    }
    setTimeout(type, isDeleting ? 100 : 200);
}
type();

// 3. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }

    // Skill Bar Animation Trigger
    const skillsSection = document.getElementById('about');
    const skillBars = document.querySelectorAll('.skill-progress');
    const sectionPos = skillsSection.getBoundingClientRect().top;
    if (sectionPos < window.innerHeight - 100) {
        skillBars.forEach(bar => {
            bar.style.width = bar.getAttribute('data-width');
        });
    }
});

// 4. Project Filtering Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hide');
                setTimeout(() => card.style.opacity = "1", 10);
            } else {
                card.style.opacity = "0";
                setTimeout(() => card.classList.add('hide'), 500);
            }
        });
    });
});

// 5. Modal Toggle
function toggleModal() {
    const modal = document.getElementById('cv-modal');
    const content = document.getElementById('modal-content');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            content.classList.remove('scale-90', 'opacity-0');
        }, 10);
    } else {
        content.classList.add('scale-90', 'opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

// 6. Toast Notification (Simulasi sukses form)
function showToast() {
    const toast = document.getElementById('toast');
    toast.style.transform = "translateY(0)";
    toast.style.opacity = "1";
    setTimeout(() => {
        toast.style.transform = "translateY(20px)";
        toast.style.opacity = "0";
    }, 3000);
}
