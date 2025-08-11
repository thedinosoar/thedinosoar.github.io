// Minimal TypeScript for enhanced interactions
document.addEventListener('DOMContentLoaded', (): void => {
    // Add subtle parallax effect to the background
    let ticking: boolean = false;
    
    function updateParallax(): void {
        const scrolled: number = window.pageYOffset;
        const rate: number = scrolled * -0.5;
        document.body.style.transform = `translateY(${rate}px)`;
        ticking = false;
    }
    
    function requestTick(): void {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Only add parallax on larger screens and when motion is not reduced
    if (window.innerWidth > 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', requestTick);
    }
    
    // Add click analytics (placeholder - replace with your analytics)
    const socialLinks: NodeListOf<Element> = document.querySelectorAll('.social-link');
    socialLinks.forEach((link: Element): void => {
        link.addEventListener('click', (e: Event): void => {
            const target = e.currentTarget as HTMLElement;
            const platform: string = target.textContent?.trim() || '';
            console.log(`Clicked: ${platform}`);
            
            // Add your analytics tracking here
            // Example: gtag('event', 'click', { 'event_category': 'social', 'event_label': platform });
        });
    });
    
    // Add keyboard navigation enhancement
    socialLinks.forEach((link: Element, index: number): void => {
        link.addEventListener('keydown', (e: KeyboardEvent): void => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                const nextIndex: number = (index + 1) % socialLinks.length;
                (socialLinks[nextIndex] as HTMLElement).focus();
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const prevIndex: number = (index - 1 + socialLinks.length) % socialLinks.length;
                (socialLinks[prevIndex] as HTMLElement).focus();
            }
        });
    });
    
    // Add a subtle easter egg - konami code for fun
    let konamiCode: string[] = [];
    const expectedCode: string[] = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    document.addEventListener('keydown', (e: KeyboardEvent): void => {
        konamiCode.push(e.code);
        if (konamiCode.length > expectedCode.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.length === expectedCode.length && 
            konamiCode.every((code: string, index: number): boolean => code === expectedCode[index])) {
            // Easter egg activated!
            document.body.style.animation = 'none';
            document.body.style.background = 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)';
            document.body.style.backgroundSize = '400% 400%';
            document.body.style.animation = 'rainbow 2s ease infinite';
            
            const style: HTMLStyleElement = document.createElement('style');
            style.textContent = `
                @keyframes rainbow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `;
            document.head.appendChild(style);
            
            setTimeout((): void => {
                location.reload();
            }, 5000);
        }
    });
});

// Service worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', (): void => {
        // Uncomment if you add a service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}
