# Indelible Technologies Website

The official portfolio and business website for Indelible Technologies, a Malawi-based team building practical websites, custom software, and digital products for businesses, schools, and organisations.

**Live website:** https://indelibletech.vercel.app  
**Flagship product:** [MsikaFlo Storefront](https://jefinvestment-e1fc1.web.app/store)

## What this website includes

- Company overview, services, and project pricing information
- Portfolio and solutions pages highlighting selected digital products
- Contact and quote-request form
- Newsletter subscription interface
- Responsive navigation and mobile-friendly layouts
- Page metadata, Open Graph sharing details, sitemap, and crawler rules
- Admin-facing tools and API routes for website operations

## Featured work

### MsikaFlo — retail management

A retail product built with React, Firebase, and Firestore. It supports shop workflows such as sales and inventory management, with an offline-first workflow and an AI-assisted product finder. The public storefront is available at the link above. Source code: https://github.com/Indelible-cpu/Jefinvestment. Hosting is Firebase Hosting, with application data stored in Cloud Firestore.

### Cooperative Finance Platform / Teachers Bank

A cooperative finance management platform for member-based organisations, with workflows for member records, contributions, loans, and financial reporting. The live platform is available at https://teachers-bank.vercel.app/ and both its frontend and backend are deployed on Vercel. The source code is available at https://github.com/Indelible-cpu/TeachersBank. The codebase includes an Express API, Prisma/PostgreSQL data access, and Firebase integration.

## Technology

- **Framework:** Next.js (App Router)
- **UI:** React, Tailwind CSS, Framer Motion, Lucide icons
- **Data layer:** Prisma with PostgreSQL for website data
- **Website deployment:** Vercel
- **Website data:** PostgreSQL via Prisma
- **Additional integrations:** Email handling and API routes
- **Teachers Bank platform:** Frontend and backend deployed on Vercel; Express API with Prisma/PostgreSQL and Firebase integration. Live URL: [teachers-bank.vercel.app](https://teachers-bank.vercel.app/). Source: [GitHub repository](https://github.com/Indelible-cpu/TeachersBank).
- **MsikaFlo:** React application deployed on Firebase Hosting with Cloud Firestore data. Live storefront: [MsikaFlo Store](https://jefinvestment-e1fc1.web.app/store). Source: [GitHub repository](https://github.com/Indelible-cpu/Jefinvestment).

## Local development

Requirements: a compatible Node.js version, npm, and the environment configuration needed by the application's database and API integrations.

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Configure the required environment variables locally; do not commit credentials or secret values.
4. Start the development server with `npm run dev`.
5. Open http://localhost:3000.

Useful scripts:

- `npm run dev` — run the local development server.
- `npm run lint` — run ESLint.
- `npm run build` — generate the Prisma client, synchronise the Prisma schema with the configured database, and build the Next.js application.

**Important:** the build script runs `prisma db push`, which can change the schema of the database configured in your environment. Use a safe development database for local testing and verify the deployment database configuration before running a build. Never point local experiments at production data.

## Configuration and security

- Keep database URLs, email credentials, and other secrets in local environment files or the deployment platform's secret settings.
- Never commit `.env` files or share secret values publicly.
- Test contact, newsletter, and admin functionality with non-production data before changing deployment settings.
- Changes to this repository deploy through its connected Vercel project; verify the deployment checks before treating a commit as live.

## Project status

This repository contains the source for the Indelible Technologies public website. It is separate from the live MsikaFlo retail application and its production shop data.
