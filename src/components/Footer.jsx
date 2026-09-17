function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
            <span className='footer-brand'>NCS22.dev</span>

            <div className='footer-links'>
                <a href="https://linkedin.com/in/ignacio-cabrera-sáez-0b0a09417" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M6.94 5a2 2 0 11-4-.002 2 2 0 014 .002zM7 8.48H3V21h4V8.48zM13.32 8.48H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21h3.94v-7.93c0-6.17-7.06-5.94-8.71-2.91V8.48z" fill="currentColor"/>
                    </svg>
                </a>
                <a href="https://github.com/NCS22" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.94c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 015 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.95.68 1.92v2.85c0 .28.18.6.69.5A10.26 10.26 0 0022 12.25C22 6.58 17.52 2 12 2z" fill="currentColor"/>
                    </svg>
                </a>
                <a href="https://instagram.com/naachoo.cs" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8"/>
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                    </svg>
                </a>
            </div>

            <p className='footer-copyright'>© {year} NCS22.dev</p>
        </footer>
  )
}

export default Footer
