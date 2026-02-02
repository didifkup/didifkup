# DidIFkUp — Launch Checklist

Pre-launch checklist for deploying DidIFkUp to production.

**Note:** This project is frontend-only. Supabase, Stripe, and serverless API routes have been removed. Auth is a local stub (`useAuth()` returns `{ user: null, isLoading: false, signIn, signOut }`).

---

## 1. Vercel (static frontend)

### Environment variables

No backend env vars required. Optional for analytics:

| Variable | Required | Description |
|----------|----------|-------------|
| (none) | — | Add `VITE_*` vars here if you add client-side config later |

### Deployment steps

1. Connect repo to Vercel (GitHub/GitLab/Bitbucket).
2. **Framework Preset**: Vite (auto-detected).
3. **Build Command**: `npm run build` (default).
4. **Output Directory**: `dist` (default).
5. **Install Command**: `npm install` (default).
6. Deploy (push to main or trigger manually).
7. Configure custom domain if needed.

---

## 2. Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. The app runs in demo mode (mock analysis, no sign-in).

---

## Quick reference

- **Vercel**: [vercel.com/dashboard](https://vercel.com/dashboard)
