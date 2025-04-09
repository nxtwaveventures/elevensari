/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF6B6B',
                secondary: '#4ECDC4',
                accent: '#FFE66D',
                dark: '#2D3436',
                light: '#F5F5F5',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            spacing: {
                '6': '1.5rem',
            },
            borderRadius: {
                'md': '0.375rem',
                'xl': '1rem',
            },
            fontSize: {
                'base': '1rem',
                'lg': '1.125rem',
                'xl': '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '4rem',
            },
            fontWeight: {
                'medium': '500',
                'bold': '700',
            },
            boxShadow: {
                'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'card-hover': '0 10px 30px rgba(0, 0, 0, 0.12)',
                'btn': '0 4px 10px rgba(0, 0, 0, 0.1)',
                'btn-hover': '0 6px 15px rgba(0, 0, 0, 0.15)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}; 