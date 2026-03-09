import { useState } from 'react'
import './LoginPage.css'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if (!email || !password) {
            setError('Please fill in all fields.')
            return
        }

        setIsLoading(true)
        // Simulate API call
        await new Promise((r) => setTimeout(r, 1500))
        setIsLoading(false)

        // Demo: any email/password succeeds
        setSuccess(true)
    }

    if (success) {
        return (
            <div className="lp-wrapper">
                <div className="lp-orb lp-orb--1" />
                <div className="lp-orb lp-orb--2" />
                <div className="lp-card lp-success-card">
                    <div className="lp-success-icon">✓</div>
                    <h2 className="lp-success-title">Welcome back!</h2>
                    <p className="lp-success-sub">You have successfully signed in.</p>
                    <button className="lp-btn" onClick={() => { setSuccess(false); setEmail(''); setPassword('') }}>
                        Sign Out
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="lp-wrapper">
            {/* Decorative background orbs */}
            <div className="lp-orb lp-orb--1" />
            <div className="lp-orb lp-orb--2" />

            <div className="lp-card">
                {/* Logo / Brand */}
                <div className="lp-brand">
                    <div className="lp-logo">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <circle cx="20" cy="20" r="20" fill="url(#lg1)" />
                            <path d="M12 20 L20 12 L28 20 L20 28 Z" fill="white" opacity="0.9" />
                            <defs>
                                <linearGradient id="lg1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6366f1" />
                                    <stop offset="1" stopColor="#a855f7" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span className="lp-brand-name">Nexus</span>
                </div>

                <h1 className="lp-title">Sign in to your account</h1>
                <p className="lp-subtitle">Welcome back! Please enter your details.</p>

                <form className="lp-form" onSubmit={handleSubmit} noValidate>
                    {/* Email */}
                    <div className="lp-field">
                        <label htmlFor="lp-email" className="lp-label">Email address</label>
                        <div className="lp-input-wrapper">
                            <span className="lp-input-icon" aria-hidden="true">
                                <svg viewBox="0 0 20 20" fill="none">
                                    <path d="M2.5 5.5A1.5 1.5 0 014 4h12a1.5 1.5 0 011.5 1.5v9A1.5 1.5 0 0116 16H4a1.5 1.5 0 01-1.5-1.5v-9z" stroke="currentColor" strokeWidth="1.4" />
                                    <path d="M2.5 5.5l7.5 5.5 7.5-5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                </svg>
                            </span>
                            <input
                                id="lp-email"
                                type="email"
                                className="lp-input"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="lp-field">
                        <div className="lp-label-row">
                            <label htmlFor="lp-password" className="lp-label">Password</label>
                            <a href="#" className="lp-forgot" onClick={(e) => e.preventDefault()}>Forgot password?</a>
                        </div>
                        <div className="lp-input-wrapper">
                            <span className="lp-input-icon" aria-hidden="true">
                                <svg viewBox="0 0 20 20" fill="none">
                                    <rect x="3" y="9" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                                    <path d="M6.5 9V6.5a3.5 3.5 0 017 0V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                    <circle cx="10" cy="13.5" r="1.25" fill="currentColor" />
                                </svg>
                            </span>
                            <input
                                id="lp-password"
                                type={showPassword ? 'text' : 'password'}
                                className="lp-input"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                            <button
                                type="button"
                                className="lp-toggle-pw"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? (
                                    <svg viewBox="0 0 20 20" fill="none">
                                        <path d="M3 10s2.8-5 7-5 7 5 7 5-2.8 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.4" />
                                        <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.4" />
                                        <line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 20 20" fill="none">
                                        <path d="M3 10s2.8-5 7-5 7 5 7 5-2.8 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.4" />
                                        <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.4" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Remember me */}
                    <label className="lp-remember">
                        <input type="checkbox" className="lp-checkbox" id="lp-remember" />
                        <span className="lp-checkmark" />
                        <span className="lp-remember-text">Remember me for 30 days</span>
                    </label>

                    {/* Error message */}
                    {error && (
                        <div className="lp-error" role="alert">
                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
                                <line x1="8" y1="5" x2="8" y2="9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                <circle cx="8" cy="11.5" r="0.75" fill="currentColor" />
                            </svg>
                            {error}
                        </div>
                    )}

                    {/* Submit */}
                    <button type="submit" className="lp-btn" disabled={isLoading} id="lp-submit">
                        {isLoading ? <span className="lp-spinner" /> : 'Sign in'}
                    </button>
                </form>

                {/* Divider */}
                <div className="lp-divider"><span>or continue with</span></div>

                {/* Social buttons */}
                <div className="lp-socials">
                    <button className="lp-social-btn" type="button" aria-label="Sign in with Google">
                        <svg viewBox="0 0 20 20" fill="none">
                            <path d="M18.17 9.09H10v3.27h4.7c-.44 2.13-2.27 3.27-4.7 3.27-2.87 0-5.18-2.33-5.18-5.18A5.18 5.18 0 0110 5.27c1.24 0 2.36.44 3.24 1.18l2.43-2.43A9 9 0 001 10.45 9 9 0 0010 19.45c5 0 9-3.45 9-9 0-.62-.07-1.24-.18-1.82l-.65-.54z" fill="currentColor" />
                        </svg>
                        Google
                    </button>
                    <button className="lp-social-btn" type="button" aria-label="Sign in with GitHub">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0110 4.84c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0020 10c0-5.52-4.48-10-10-10z" clipRule="evenodd" />
                        </svg>
                        GitHub
                    </button>
                </div>

                {/* Sign up link */}
                <p className="lp-signup-link">
                    Don't have an account?{' '}
                    <a href="#" onClick={(e) => e.preventDefault()}>Sign up for free</a>
                </p>
            </div>
        </div>
    )
}
