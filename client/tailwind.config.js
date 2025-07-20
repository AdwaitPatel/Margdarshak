/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'blob1': 'blob1 7s infinite',
        'blob2': 'blob2 7s infinite',
        'pan-overlay': 'pan-overlay 22s infinite linear',
        'float-0': 'float 10s ease-in-out infinite',
        'float-1': 'float 12s ease-in-out infinite',
        'float-2': 'float 14s ease-in-out infinite',
        'float-3': 'float 16s ease-in-out infinite',
        'float-4': 'float 18s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-delay': 'fade-in 0.5s ease-out 0.2s both',
        'fade-up': 'fade-up 0.5s ease-out both',
        'scale-up': 'scale-up 0.3s ease-out',
        'title-slide-up': 'title-slide-up 0.8s cubic-bezier(0.3, 0, 0.3, 1) forwards',
        'title-slide-up-delay': 'title-slide-up 0.8s cubic-bezier(0.3, 0, 0.3, 1) 0.2s forwards',
        'beam': 'beam 4s ease-in-out infinite alternate',
        'slide-left': 'slide-left 0.8s cubic-bezier(0.3, 0, 0.3, 1) forwards',
        'slide-right': 'slide-right 0.8s cubic-bezier(0.3, 0, 0.3, 1) forwards',
        'fade-slide-up': 'fade-slide-up 0.6s cubic-bezier(0.3, 0, 0.3, 1) forwards',
        'fade-slide-down': 'fade-slide-down 0.6s cubic-bezier(0.3, 0, 0.3, 1) forwards',
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.3, 0, 0.3, 1) forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        blob1: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '33%': {
            transform: 'translate(30%, 30%) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20%, 20%) scale(0.9)',
          },
        },
        blob2: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '33%': {
            transform: 'translate(-30%, -30%) scale(1.1)',
          },
          '66%': {
            transform: 'translate(20%, -20%) scale(0.9)',
          },
        },
        'pan-overlay': {
          '0%': {
            'background-position': '0% 0%',
          },
          '100%': {
            'background-position': '100% 100%',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'scale-up': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'title-slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'beam': {
          '0%': {
            opacity: '0.05',
            transform: 'translateX(-30%) rotate(45deg)',
          },
          '50%': {
            opacity: '0.2',
          },
          '100%': {
            opacity: '0.05',
            transform: 'translateX(30%) rotate(45deg)',
          },
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'slide-right': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'fade-slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-slide-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'glow': {
          '0%': {
            'box-shadow': '0 0 20px rgba(var(--color-primary-rgb), 0.3)',
          },
          '100%': {
            'box-shadow': '0 0 40px rgba(var(--color-primary-rgb), 0.6)',
          },
        },
      },
      backgroundSize: {
        'gradient-size': '400% 400%',
      },
    },
  },
  plugins: [],
} 