// 平滑滚动功能
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// 简单的动画效果
document.addEventListener('DOMContentLoaded', function() {
    // 服务项动画
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        // 初始状态下隐藏元素
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        // 添加动画延迟
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 300 * index);
    });
    
    // 作品集项动画
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        // 初始状态下隐藏元素
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        // 添加动画延迟
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 300 * index);
    });
});

// 窗口滚动事件
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});