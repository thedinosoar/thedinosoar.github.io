// Minimal TypeScript for essential functionality only
document.addEventListener('DOMContentLoaded', (): void => {
    // Analytics tracking (placeholder - replace with your analytics)
    const socialLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.social-link');
    socialLinks.forEach((link: HTMLAnchorElement): void => {
        link.addEventListener('click', (): void => {
            const platform: string = link.textContent?.trim() || '';
            console.log(`Clicked: ${platform}`);
            
            // Add your analytics tracking here
            // Example: gtag('event', 'click', { 'event_category': 'social', 'event_label': platform });
        });
    });
});

