/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* gray-200 */
        input: "var(--color-input)", /* gray-200 */
        ring: "var(--color-ring)", /* green-900 */
        background: "var(--color-background)", /* cream-50 */
        foreground: "var(--color-foreground)", /* gray-800 */
        surface: "var(--color-surface)", /* warm-gray-100 */
        primary: {
          DEFAULT: "var(--color-primary)", /* green-900 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* red-900 */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-600 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* warm-gray-100 */
          foreground: "var(--color-muted-foreground)", /* gray-500 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* gold-400 */
          foreground: "var(--color-accent-foreground)", /* gray-900 */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* gray-800 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* gray-800 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-600 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* yellow-600 */
          foreground: "var(--color-warning-foreground)", /* gray-900 */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-600 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        brand: {
          'dark-green': "var(--color-brand-dark-green)", /* green-800 */
          'maroon': "var(--color-brand-maroon)", /* dark-red */
          'gold': "var(--color-brand-gold)", /* goldenrod */
          'orange-cta': "var(--color-brand-orange-cta)", /* orange-500 */
        },
        text: {
          primary: "var(--color-text-primary)", /* gray-900 */
          secondary: "var(--color-text-secondary)", /* gray-700 */
        },
      },
      fontFamily: {
        headline: ['Crimson Text', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
        cta: ['Nunito Sans', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            transform: "scale(1)",
            boxShadow: "0 0 10px rgba(218, 165, 32, 0.5)"
          },
          "50%": { 
            transform: "scale(1.05)",
            boxShadow: "0 0 20px rgba(218, 165, 32, 0.8)"
          },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
      },
      boxShadow: {
        'organic': '0 4px 12px rgba(139, 38, 53, 0.08)',
        'organic-lg': '0 8px 24px rgba(27, 67, 50, 0.12)',
        'layered': '0 4px 6px rgba(27, 67, 50, 0.1), 0 1px 3px rgba(27, 67, 50, 0.08)',
      },
      spacing: {
        '13': '3.25rem',
        '21': '5.25rem',
        '34': '8.5rem',
        '55': '13.75rem',
      },
    },
  },
  plugins: [],
}
