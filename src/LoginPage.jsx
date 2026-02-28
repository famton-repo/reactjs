import { useState, useEffect } from 'react'
import './LoginPage.css'

/* ── SVG Icons (inline, zero dependency) ── */
const EyeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
)

const EyeOffIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
)

const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
)

const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
)

const AppleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
)

export default function LoginPage({ darkMode, setDarkMode }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [toast, setToast] = useState(null)

    /* Apply dark mode class to body */
    useEffect(() => {
        document.body.classList.toggle('dark', darkMode)
    }, [darkMode])

    /* Auto-dismiss toast */
    useEffect(() => {
        if (toast) {
            const t = setTimeout(() => setToast(null), 3000)
            return () => clearTimeout(t)
        }
    }, [toast])

    /* Validation */
    const validate = () => {
        const e = {}
        if (!email.trim()) e.email = 'Email is required.'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email.'
        if (!password) e.password = 'Password is required.'
        else if (password.length < 6) e.password = 'Password must be at least 6 characters.'
        return e
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) { setErrors(errs); return }
        setErrors({})
        setLoading(true)
        /* Simulated async login */
        await new Promise(r => setTimeout(r, 1500))
        setLoading(false)
        setToast({ type: 'success', msg: 'Logged in successfully! 🎉' })
    }

    const handleSocial = (provider) => {
        setToast({ type: 'info', msg: `Continuing with ${provider}…` })
    }

    return (
        <div className={`lp-wrapper${darkMode ? ' dark' : ''}`}>
            {/* Toast */}
            {toast && (
                <div className={`lp-toast lp-toast--${toast.type}`} role="alert">
                    {toast.msg}
                </div>
            )}

            <div className="lp-card" role="main">
                {/* Header */}
                <div className="lp-header">
                    <h1 className="lp-title">Welcome Back!</h1>
                    <p className="lp-subtitle">Log in to your account</p>
                </div>

                {/* Form */}
                <form className="lp-form" onSubmit={handleSubmit} noValidate>
                    {/* Email */}
                    <div className="lp-field-row">
                        <label className="lp-label" htmlFor="email">Email Address</label>
                        <div className="lp-input-wrap">
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className={`lp-input${errors.email ? ' lp-input--error' : ''}`}
                                aria-describedby={errors.email ? 'email-error' : undefined}
                            />
                        </div>
                        {errors.email && <span id="email-error" className="lp-error">{errors.email}</span>}
                    </div>

                    {/* Password */}
                    <div className="lp-field-row">
                        <label className="lp-label" htmlFor="password">Password</label>
                        <div className="lp-password-row">
                            <div className="lp-input-wrap lp-input-wrap--pw">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className={`lp-input lp-input--pw${errors.password ? ' lp-input--error' : ''}`}
                                    aria-describedby={errors.password ? 'pw-error' : undefined}
                                />
                                <button
                                    type="button"
                                    className="lp-eye-btn"
                                    onClick={() => setShowPassword(v => !v)}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                </button>
                            </div>
                            <button
                                type="button"
                                className="lp-forgot"
                                onClick={() => setToast({ type: 'info', msg: 'Reset link sent to your email!' })}
                            >
                                Forgot Password?
                            </button>
                        </div>
                        {errors.password && <span id="pw-error" className="lp-error">{errors.password}</span>}
                    </div>

                    {/* Remember Me */}
                    <div className="lp-remember-row">
                        <label className="lp-checkbox-label">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={e => setRememberMe(e.target.checked)}
                                className="lp-checkbox"
                            />
                            <span className="lp-checkbox-custom" aria-hidden="true" />
                            Remember me
                        </label>
                    </div>

                    {/* Divider */}
                    <div className="lp-divider">
                        <span>Or continue with</span>
                    </div>

                    {/* Actions Row */}
                    <div className="lp-actions">
                        <button
                            type="submit"
                            className={`lp-signin-btn${loading ? ' lp-signin-btn--loading' : ''}`}
                            disabled={loading}
                            id="signin-btn"
                        >
                            {loading ? <span className="lp-spinner" /> : 'Sign In'}
                        </button>

                        <div className="lp-social-group">
                            <button type="button" className="lp-social-btn" aria-label="Continue with Google" id="google-btn" onClick={() => handleSocial('Google')}>
                                <GoogleIcon />
                            </button>
                            <button type="button" className="lp-social-btn" aria-label="Continue with Facebook" id="facebook-btn" onClick={() => handleSocial('Facebook')}>
                                <FacebookIcon />
                            </button>
                            <button type="button" className="lp-social-btn lp-social-btn--apple" aria-label="Continue with Apple" id="apple-btn" onClick={() => handleSocial('Apple')}>
                                <AppleIcon />
                            </button>
                        </div>
                    </div>
                </form>

                {/* Footer */}
                <div className="lp-footer">
                    <label className="lp-toggle-label" htmlFor="dark-toggle">
                        <div
                            role="switch"
                            aria-checked={darkMode}
                            id="dark-toggle"
                            className={`lp-toggle${darkMode ? ' lp-toggle--on' : ''}`}
                            tabIndex={0}
                            onClick={() => setDarkMode(v => !v)}
                            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setDarkMode(v => !v)}
                        >
                            <span className="lp-toggle-knob" />
                        </div>
                        <span className="lp-toggle-text">Dark Mode</span>
                    </label>

                    <p className="lp-signup-link">
                        Don't have an account?{' '}
                        <button type="button" className="lp-link-btn" onClick={() => setToast({ type: 'info', msg: 'Sign up coming soon!' })}>
                            Sign up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}
