# Audit & Hardening Todo

- [x] Initialize local git repository and set `origin` to `https://github.com/Ceyvion/whm2026_retrospective.git`.
- [x] Identify app architecture and security-relevant entry points.
- [x] Audit for runtime errors, regressions, and edge-case handling.
- [x] Apply fixes for lint/runtime regressions and edge-case resilience.
- [x] Harden Next.js configuration for Vercel deployment security headers.
- [x] Re-run verification (`npm run lint`, `npm run build`, `npm audit --omit=dev`).
- [ ] Commit all changes and push to GitHub.

## Review

### Findings (Post-Fix)

- No critical or high-severity issues found.
- Fixed medium-risk issue: raw email PII was stored in `localStorage`; now only a boolean flag is persisted.
- Fixed medium-risk issue: missing hardening headers and `X-Powered-By` exposure in production responses.
- Fixed regression risk: lint was effectively bypassed in build and now runs during `next build`.
- Residual low-risk note: content images are still loaded from a third-party host (`picsum.photos`), which exposes client metadata (IP/user-agent/referrer policy-limited).

### Verification Results

- `npm run lint`: pass.
- `npm run build`: pass.
- `npm audit --omit=dev --audit-level=low`: pass (0 vulnerabilities).
- Runtime header check (`curl -I` against production server): pass with CSP, frame policy, nosniff, referrer policy, permissions policy, and no `X-Powered-By`.
