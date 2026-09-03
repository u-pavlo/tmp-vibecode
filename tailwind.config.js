/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#020406',
        carbon: '#070A0E',
        panel: '#0C1117',
        panelBorder: '#1A2332',
        phosphor: {
          DEFAULT: '#00FF66',
          dim: '#00D957',
          dark: '#00471B',
          glow: 'rgba(0, 255, 102, 0.2)',
        },
        cyber: {
          cyan: '#00F0FF',
          blue: '#3B82F6',
          purple: '#8B5CF6',
        },
        alert: {
          critical: '#FF2E5B',
          high: '#FF8800',
          medium: '#EAB308',
          low: '#38BDF8',
          resolved: '#00FF66',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'phosphor': '0 0 25px rgba(0, 255, 102, 0.25)',
        'phosphor-sm': '0 0 10px rgba(0, 255, 102, 0.2)',
        'cyan-glow': '0 0 20px rgba(0, 240, 255, 0.25)',
        'critical-glow': '0 0 20px rgba(255, 46, 91, 0.3)',
      },
      animation: {
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        }
      }
    },
  },
  plugins: [],
}
