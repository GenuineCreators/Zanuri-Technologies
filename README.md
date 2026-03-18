# Zanuri Technologies - Next.js Website

A modern, responsive, multi-page company website for **Zanuri Technologies**, built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Next Themes**.

## What is included

- Multi-page website with a strong marketing homepage
- Dedicated pages for About, Services, Process, Industries, and Contact
- Individual detailed pages for each service
- Light and dark mode
- Mobile-friendly responsive navigation
- Contact form wired to a Next.js API route
- WhatsApp, phone, email, and social contact links

## Main routes

- `/` - Home
- `/about` - About Zanuri Technologies
- `/services` - All services
- `/services/[slug]` - Detailed service pages
- `/process` - Delivery process
- `/industries` - Industries and use cases
- `/contact` - Contact page with form

## Run locally

1. Open the project folder:
   ```bash
   cd zanuri-technologies-next
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create your local environment file:
   ```bash
   cp .env.example .env.local
   ```
4. Update `.env.local` with your SMTP details.
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open `http://localhost:3000`

## Build for production

```bash
npm run build
npm run start
```

## Contact form email setup

The form posts to `/api/contact` and sends the message to:

- `zanuritechnologies@gmail.com`

To make the form send successfully, set valid SMTP credentials in `.env.local`.

### Gmail option

If you want to use Gmail:

- Turn on 2-Step Verification on the Gmail account you will use to send mail.
- Create a Gmail App Password.
- Put the values into `.env.local`.

Example:

```env
EMAIL_TO=zanuritechnologies@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM="Zanuri Website <yourgmail@gmail.com>"
```

## Notes

- The contact form target email is already set to `zanuritechnologies@gmail.com`.
- Social links are set for Instagram, TikTok, and X using `@zanuritechnologies`.
- The logo provided in the conversation is included in `public/logo.webp`.

## Vercel deployment note

This project pins **Node.js 20.x** in `package.json` and `.nvmrc` because newer Vercel defaults may use Node 24.x. If you deploy on Vercel, keep the project Node.js version on **20.x** for the most predictable install/build behavior.

