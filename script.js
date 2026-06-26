document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. SPECIAL FEATURE: Dynamic Typewriter Effect
    // ==========================================
    const heroSubtitle = document.querySelector('.hero p');
    if (heroSubtitle) {
        const originalText = "A backend engineer specializing in secure enterprise ecosystems.";
        heroSubtitle.textContent = "";
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                heroSubtitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 40); // Controls typing speed (in milliseconds)
            }
        }
        // Start the effect shortly after page load
        setTimeout(typeWriter, 500);
    }

    // ==========================================
    // 2. SPECIAL FEATURE: Recruiter Console Greeting
    // ==========================================
    // When tech leads inspect your portfolio, they see a custom terminal message
    console.log(
        "%c<DevSecure /> %cSystem initialized successfully.\nWelcome to Mikiyas Bayew's Core Portfolio Environment.", 
        "color: #3b82f6; font-weight: bold; font-size: 14px;", 
        "color: #888; font-size: 12px;"
    );
    console.log("%cStatus: Ready for collaboration. Run connection pipeline...", "color: #10b981; font-style: italic;");

    // ==========================================
    // 3. THEME TOGGLE HANDLING (Dark/Light Mode)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    // Apply initial state on load
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeToggleBtn) themeToggleBtn.textContent = '🌙';
    }

    // Toggle theme on button click
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                themeToggleBtn.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeToggleBtn.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});
