import React, { useState } from 'react'
import './LoginPage.css'

export default function LoginPage() {
    const [form, setForm] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})
    const [showPass, setShowPass] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const validate = () => {
        const e = {}
        if (!form.email.trim()) e.email = 'Email is required.'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.'
        if (!form.password) e.password = 'Password is required.'
        else if (form.password.length < 6) e.password = 'At least 6 characters.'
        return e
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) { setErrors(errs); return }
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setSuccess(true)
        }, 1800)
    }

    return (
        <div className="lp-root">
            {/* Orbs */}
            <div className="lp-orb lp-orb--1" aria-hidden />
            <div className="lp-orb lp-orb--2" aria-hidden />

            <div className="lp-card" role="main">
                {/* Logo / Brand */}
                <div className="lp-brand">
                    <div className="lp-logo" aria-hidden>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <circle cx="14" cy="14" r="13" stroke="url(#g)" strokeWidth="2" />
                            <path d="M9 14l3.5 3.5L19 10" stroke="url(#g)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            <defs>
                                <linearGradient id="g" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#a78bfa" />
                                    <stop offset="1" stopColor="#7c3aed" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span className="lp-brand-name">Nexus</span>
                </div>

                {success ? (
                    <div className="lp-success">
                        <div className="lp-success-icon" aria-hidden>✓</div>
                        <h1 className="lp-success-title">Welcome back!</h1>
                        <p className="lp-success-sub">You have signed in successfully.</p>
                    </div>
                ) : (
                    <>
                        <h1 className="lp-title">Sign in</h1>
                        <p className="lp-subtitle">Access your account securely.</p>

                        <form className="lp-form" onSubmit={handleSubmit} noValidate>
                            {/* Email */}
                            <div className={`lp-field ${errors.email ? 'lp-field--error' : ''}`}>
                                <label htmlFor="email" className="lp-label">Email address</label>
                                <div className="lp-input-wrap">
                                    <span className="lp-input-icon" aria-hidden>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                    </span>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="lp-input"
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.email && <p className="lp-error" role="alert">{errors.email}</p>}
                            </div>

                            {/* Password */}
                            <div className={`lp-field ${errors.password ? 'lp-field--error' : ''}`}>
                                <div className="lp-label-row">
                                    <label htmlFor="password" className="lp-label">Password</label>
                                    <button type="button" className="lp-forgot">Forgot password?</button>
                                </div>
                                <div className="lp-input-wrap">
                                    <span className="lp-input-icon" aria-hidden>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                    </span>
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPass ? 'text' : 'password'}
                                        className="lp-input"
                                        placeholder="••••••••"
                                        autoComplete="current-password"
                                        value={form.password}
                                        onChange={handleChange}
                                    />
                                    <button
                                        type="button"
                                        className="lp-eye"
                                        onClick={() => setShowPass(p => !p)}
                                        aria-label={showPass ? 'Hide password' : 'Show password'}
                                    >
                                        {showPass ? (
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" />
                                            </svg>
                                        ) : (
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors.password && <p className="lp-error" role="alert">{errors.password}</p>}
                            </div>

                            {/* Remember */}
                            <label className="lp-remember">
                                <input type="checkbox" className="lp-checkbox" id="remember" />
                                <span className="lp-check-box" aria-hidden />
                                <span className="lp-check-label">Remember me for 30 days</span>
                            </label>

                            {/* Submit */}
                            <button
                                id="login-submit"
                                type="submit"
                                className={`lp-btn ${loading ? 'lp-btn--loading' : ''}`}
                                disabled={loading}
                            >
                                {loading ? <span className="lp-spinner" aria-hidden /> : null}
                                {loading ? 'Signing in…' : 'Sign in'}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="lp-divider"><span>or continue with</span></div>

                        {/* Social */}
                        <div className="lp-social">
                            <button type="button" className="lp-social-btn" aria-label="Sign in with Google">
                                <svg width="18" height="18" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                                    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
                                    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                                    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                                </svg>
                                Google
                            </button>
                            <button type="button" className="lp-social-btn" aria-label="Sign in with GitHub">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                                GitHub
                            </button>
                        </div>

                        <p className="lp-signup">
                            Don't have an account?{' '}
                            <button type="button" className="lp-signup-link">Create one</button>
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}
