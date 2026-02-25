This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Client portal & admin

The app includes a **client portal** (Auth0 + Supabase + Stripe) and an **admin** area:

- **`/clients`** – Client landing; sign in/sign up with Auth0.
- **`/clients/dashboard`** – Authenticated clients see their projects, status, total/paid, and can pay via Stripe Checkout (card or Affirm).
- **`/admin`** – Admin dashboard (requires `role = 'admin'` in Supabase `profiles`).
- **`/admin/projects`** – List all projects; create and edit projects (title, description, status, total, payment link, etc.).

### Setup

1. **Env** – Copy `.env.local.example` to `.env.local` and set:
   - **Auth0**: `AUTH0_DOMAIN`, `AUTH0_CLIENT_ID`, `AUTH0_CLIENT_SECRET`, `AUTH0_SECRET`, `APP_BASE_URL`. In Auth0, set Allowed Callback URLs and Allowed Logout URLs to match your app (e.g. `http://localhost:3000/auth/callback`, `http://localhost:3000`).
   - **Supabase**: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`. Run `supabase/schema.sql` in the Supabase SQL editor to create `profiles`, `projects`, `payments` and RLS.
   - **Stripe**: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, and optionally `NEXT_PUBLIC_APP_URL`. In Stripe Dashboard add webhook endpoint `https://yoursite.com/api/stripe/webhook` and enable `checkout.session.completed`; use the signing secret for `STRIPE_WEBHOOK_SECRET`.

2. **Admin** – After signing in once, find your row in Supabase `profiles` and set `role` to `admin`.

3. **Affirm** – Enable Affirm in Stripe Dashboard (Payments → Payment methods) if you want “Pay with Affirm” in Checkout.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
