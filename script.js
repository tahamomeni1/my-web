document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const authButtons = document.getElementById('auth-buttons');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        authButtons.classList.toggle('active');
        
        // تغییر آیکون همبرگر به ضربدر هنگام باز شدن منو
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});




document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentNode;
        const answer = this.nextElementSibling;
        const icon = this.querySelector('.toggle-icon');
        
        // بستن تمام آیتم‌های دیگر
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
                item.querySelector('.toggle-icon').textContent = '+';
            }
        });
        
        // تغییر وضعیت آیتم جاری
        if (faqItem.classList.contains('active')) {
            faqItem.classList.remove('active');
            answer.style.maxHeight = null;
            icon.textContent = '+';
        } else {
            faqItem.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.textContent = '−'; // استفاده از منهای یونیکد برای ظاهر بهتر
        }
    });
});



// افزودن کلاس active به لینک‌های کلیک شده
document.querySelectorAll('.footer-column a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // حذف کلاس active از تمام لینک‌ها
        document.querySelectorAll('.footer-column a').forEach(el => {
            el.classList.remove('active');
        });
        
        // افزودن کلاس active به لینک کلیک شده
        this.classList.add('active');
    });
});


// اسکریپت انیمیشن اسکرول
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }
    
    // اجرا هنگام بارگذاری صفحه
    checkScroll();
    
    // اجرا هنگام اسکرول
    window.addEventListener('scroll', checkScroll);
});