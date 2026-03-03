# Security Best Practices Report

## Executive Summary

Scope: Next.js app security audit before Vercel deployment, including frontend data handling, config hardening, and runtime header posture.

Outcome: No critical/high findings remain after remediation. Medium findings were fixed. One low residual privacy risk remains due third-party image hosting.

## Fixed Findings

### SBP-001 (Medium) - Browser-stored PII in signup flow

- **Location:** `/Users/macbookpro/Desktop/angélique-kidjo_-a-retrospective/app/email-signup.tsx:13`, `/Users/macbookpro/Desktop/angélique-kidjo_-a-retrospective/app/email-signup.tsx:58`
- **Previous issue:** Raw email addresses were persisted in `localStorage`.
- **Risk:** XSS/privacy exposure of user emails on shared or compromised clients.
- **Fix applied:** Persist only a boolean subscription flag (`'true'`) and keep email in memory only for validation.

### SBP-002 (Medium) - Missing production security headers and framework fingerprint

- **Location:** `/Users/macbookpro/Desktop/angélique-kidjo_-a-retrospective/next.config.ts:24`, `/Users/macbookpro/Desktop/angélique-kidjo_-a-retrospective/next.config.ts:45`
- **Previous issue:** No explicit CSP/referrer/frame/nosniff/permissions headers; `X-Powered-By` exposed.
- **Risk:** Weaker browser mitigations against XSS/clickjacking/data-leak scenarios and unnecessary framework disclosure.
- **Fix applied:** Added global headers policy (`Content-Security-Policy`, `Referrer-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`, `X-DNS-Prefetch-Control`) and `poweredByHeader: false`.

### SBP-003 (Low) - Lint bypass in build pipeline

- **Location:** `/Users/macbookpro/Desktop/angélique-kidjo_-a-retrospective/next.config.ts:26`
- **Previous issue:** `eslint.ignoreDuringBuilds` allowed builds to pass with lint errors.
- **Risk:** Security/quality regressions can ship unchecked.
- **Fix applied:** Re-enabled lint during build (`ignoreDuringBuilds: false`), and lint now passes.

## Open Findings

### SBP-004 (Low) - Third-party image hosting leaks client metadata

- **Location:** `/Users/macbookpro/Desktop/angélique-kidjo_-a-retrospective/app/page.tsx:33`, `/Users/macbookpro/Desktop/angélique-kidjo_-a-retrospective/app/animated-section.tsx:85`
- **Issue:** Browsers fetch image assets from `picsum.photos`/`fastly.picsum.photos`.
- **Risk:** External host receives client network metadata (IP/user-agent, referrer limited by policy).
- **Recommendation:** For production/editorial use, self-host images in the project/CDN you control, or proxy through your backend/edge.

## Verification Evidence

- `npm run lint` -> pass.
- `npm run build` -> pass.
- `npm audit --omit=dev --audit-level=low` -> `found 0 vulnerabilities`.
- Runtime header check (`curl -I http://127.0.0.1:4010/`) confirms hardened headers are present and `X-Powered-By` is absent.
