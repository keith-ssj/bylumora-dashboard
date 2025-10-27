# Bylumora Dashboard

Bylumora Dashboard is a premium dark‑mode SaaS platform that lets users instantly generate a free website preview using the 10Web API and later activate hosting only if they love it.  This repository contains a fully responsive Next.js application written in TypeScript with TailwindCSS.  All pages are built in **mock mode** for development; once you provide your `TENWEB_API_KEY` the preview flow can be switched over to the real [10Web API](https://apidocs.10web.io/) endpoints.

## Key Features

* **Instant preview:** visitors can generate a free preview site by entering their business name, a short description and their email.  The mock API returns a random `site_id` and preview URL.
* **Elegant dark‑glass design:** the UI uses glassmorphism, subtle gradients, large rounded corners and gold/orange accents to convey a luxurious look inspired by Apple and Stripe.
* **Multi‑language support:** a simple English/Spanish toggle stores the chosen language in `localStorage` and updates all text accordingly.
* **Modular components:** the header, footer, pricing cards and preview form are reusable React components.  TailwindCSS keeps the styling consistent and makes it easy to tweak colours or spacing.
* **Ready for 10Web:** stubs are included for creating and retrieving websites via the 10Web API.  When integrated, your users will be able to generate a fully functional WordPress website in under a minute, complete with structure, content and branded elements【288484940746670†L130-L137】.  Sites are white‑labelled under your subdomain【288484940746670†L145-L148】 and deployed on 10Web’s managed hosting infrastructure, which promises 99.99 % uptime and battle‑tested security【288484940746670†L188-L204】.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repo-url>
   cd bylumora-dashboard
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Copy `.env.example` to `.env.local` and populate the variables when ready.  For development in mock mode you can leave them empty.

   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open `http://localhost:3000` in your browser to view the app.  Changes to files inside `src/` will trigger hot reloading.

## File Structure

```
bylumora-dashboard/
├── .env.example            # example environment variables for 10Web, Stripe and n8n
├── next.config.js          # Next.js configuration
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # TailwindCSS configuration with custom palette
├── tsconfig.json           # TypeScript configuration
├── package.json
├── src/
│   ├── context/
│   │   └── LanguageContext.tsx  # context provider for EN/ES toggle
│   ├── styles/
│   │   └── globals.css      # imports Tailwind base/components/utilities
│   ├── components/
│   │   ├── Header.tsx       # sticky navigation with language toggle
│   │   ├── Footer.tsx       # site footer with links and copyright
│   │   ├── PlanCard.tsx     # reusable card for Strong, Extreme and VIP plans
│   │   └── Layout.tsx       # wraps pages with header and footer
│   ├── pages/
│   │   ├── _app.tsx         # global app wrapper importing styles and LanguageProvider
│   │   ├── _document.tsx    # custom document injecting Google Fonts
│   │   ├── index.tsx        # home page with hero section
│   │   ├── preview.tsx      # preview form and mock response handling
│   │   ├── plans.tsx        # pricing table displaying three plans
│   │   ├── account.tsx      # mock account dashboard
│   │   └── api/
│   │       └── preview.ts   # mock API route returning a fake site_id & preview URL
└── README.md
```

### Editing Text and Colours

* **Colours:** Custom colours are defined under `theme.extend.colors.brand` in `tailwind.config.js`.  To change an accent (e.g. gold or purple), edit the hex codes there and restart your dev server.  Tailwind automatically generates utility classes like `bg-brand-gold` or `text-brand-orange`.
* **Fonts:** The project uses [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) for headings and [Inter](https://fonts.google.com/specimen/Inter) for body text.  These fonts are loaded in `_document.tsx`.  To substitute your own fonts, replace the Google Fonts link and update the `fontFamily` values in `tailwind.config.js`.
* **Language:** All pages reference translation dictionaries for English and Spanish.  To add more languages or modify copy, edit the `translations` objects within each page component.

### Switching from Mock to Real 10Web API

The mock route at `src/pages/api/preview.ts` returns a random site identifier and preview URL.  Once you obtain a valid `TENWEB_API_KEY` from 10Web, replace the mock implementation with real API calls.  The 10Web Website Builder API allows you to create a blank WordPress site via `POST /websites` and generate an AI‑powered site via `POST /websites/ai-generate`.  Both endpoints accept JSON payloads describing your customer’s desired subdomain and site title, and they return a `site_id` which can be used to fetch details with `GET /websites/{site_id}` or delete the site with `DELETE /websites/{site_id}`.  The API promises mobile‑optimized websites in under one minute【288484940746670†L130-L137】 and hosts them on secure infrastructure with 99.99 % uptime【288484940746670†L188-L204】.

To enable the real API:

1. Set `TENWEB_API_KEY` in `.env.local`.
2. Uncomment the fetch logic in `src/pages/api/preview.ts` and remove the mock implementation.  The stub shows how to assemble the request body using the user’s business name and a timestamp.  You may also pass optional parameters from the 10Web docs, such as `region` or AI generation parameters.
3. When the API returns a `site_id`, persist it to your database or session if you need to track it later for billing or upgrades.

### Adding Stripe and n8n Later

The `/plans` page contains buttons that currently show an alert after a successful mock checkout.  When you integrate Stripe Checkout, replace the click handlers with calls to your payment service.  Four environment variables are reserved in `.env.example` for Stripe price IDs: `STRIPE_PRICE_STRONG_MONTHLY`, `STRIPE_PRICE_STRONG_YEARLY`, `STRIPE_PRICE_EXTREME_MONTHLY` and `STRIPE_PRICE_EXTREME_YEARLY`.  Use these IDs to initialise a Stripe session and redirect the user to the hosted payment page.

n8n can be used for automations such as sending welcome emails or notifying your team when a user activates a plan.  Set `N8N_WEBHOOK_URL` in `.env.local` and call it from your API routes after a successful payment or site generation.  Because the current implementation is mock only, these hooks are not yet invoked.

### Deployment on Vercel

1. **Create a Vercel project:** sign in to [Vercel](https://vercel.com/) with your Git provider and import this repository.  Vercel will automatically detect the Next.js framework.
2. **Configure environment variables:** in the Vercel dashboard, set the same variables you defined in `.env.local` (TENWEB_API_KEY, Stripe price IDs, etc.).  Vercel securely injects these values at build time.
3. **Custom domain:** attach the `made.bylumora.com` domain in your Vercel project’s domain settings.  Update your DNS records as instructed by Vercel to point the domain to Vercel’s edge network.
4. **Deploy:** once environment variables and domains are configured, click **Deploy**.  Vercel will build and deploy your application to its global edge network with automatic SSL certificates.

## Acknowledgements

This project was built with Next.js and TailwindCSS.  The copywriting is inspired by Bylumora’s luxury brand ethos, and the service will leverage 10Web’s AI Website Builder API for instant site generation【288484940746670†L130-L137】.  Managed WordPress hosting with a 99.99 % uptime guarantee and white‑labelled domains ensure a reliable experience for your customers【288484940746670†L188-L204】.