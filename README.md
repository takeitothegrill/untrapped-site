# (un)TRAPPED Campaign Website (untrapped-site)

> [!IMPORTANT]
> **CRITICAL PROJECT IDENTITY INVARIANT**
> There are two separate projects under the unTRAPPED banner that must never be confused:
> 1. **`untrapped-site`** (This Project / Repository): The current public-facing advocacy and static campaign website. It wraps around an existing public Google My Map, provides an accessible HTML alternative, and is deployed via Vercel.
> 2. **`untrapped`** (Dormant Project): A separate, dormant future custom web application and backend concept intended for a later custom mapping phase.
>
> These two projects must not be merged, renamed, substituted, or treated as the same project. Do not use "untrapped" as shorthand for `untrapped-site` where it could create ambiguity.

---

## Document Architecture & Read Order

This repository uses a three-document structure to organize campaign charter, implementation guides, and deployment states. Please read them in this order:

1. **`ABOUT.md`**: Stable project charter. It describes why the campaign exists, target regions, credentials, core campaign principles, and future roadmap aspirations.
2. **`README.md`** (This Document): Technical repository guide. It describes what is currently implemented, file and folder structure, local development, and Vercel deployment.
3. **`CURRENT.md`**: Living verified state. It records the active production URL, verified deployment status, known quality limitations, and concrete classifications of roadmap candidates.

---

## What is Currently Implemented

This repository contains the campaign website for **unTRAPPED** (visually branded as **(un)TRAPPED**). The website acts as a campaign platform built around the existing public Google My Map, providing a responsive, high-contrast, and keyboard-navigable directory of audited locations.

## Governing Principles

1. **Map-First**: The Google My Map is the primary asset. The site wraps around it and provides a fully accessible HTML alternative.
2. **Firm but Constructive**: The tone highlights clear evidence of access conditions (e.g., VERY POOR, POOR, PASSABLE, OKAY, STANDARD, GOOD, EXCELLENT, MISSING!) to pressure councils while maintaining a constructive advocacy relationship.
3. **No Over-Engineering**: This is a fast, light, static page. It contains no database, no backend, no custom map programming, and no user accounts.

---

## Folder Structure

- `/assets/` - Renamed and cleaned branding images and audited photos.
- `index.html` - Main landing page and KML-parsed accessible location accordions.
- `style.css` - Custom, high-contrast typography and responsive layouts.
- `script.js` - Minimal print utility and anchor-focus enhancement.

---

## Local Development

You do not need to install any heavy framework dependencies. To run the site locally:

### Option A: Python HTTP Server (Built-in)
If you have Python installed, run this command in your terminal:
```bash
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Option B: Node.js Serve
If you have Node.js and npm installed, run:
```bash
npx serve .
```
Then open the port shown in your terminal (typically [http://localhost:3000](http://localhost:3000)).

---

## Deployment to Vercel

The site is designed to deploy seamlessly to Vercel. 

### Initial Setup & Login
If you are deploying this for the first time from this computer, log in to your Vercel account:
```bash
npx vercel login
```
Follow the OAuth authorization prompt in the browser.

### Deploy to Vercel
To link the project and deploy it:
```bash
npx vercel
```
Vercel will ask:
1. *Set up and deploy "~/Documents/projects/untrapped-site"?* **Yes**
2. *Which scope do you want to deploy to?* **Select your personal Vercel account**
3. *Link to existing project?* **No**
4. *What's your project's name?* **untrapped-site**
5. *In which directory is your code located?* **./**
6. *Want to modify these settings?* **No**

This will deploy a preview URL. To deploy to production:
```bash
npx vercel --prod
```

---

## Attaching the `untrapped.au` Domain

Once the project is deployed to Vercel:

1. Go to the **Vercel Dashboard** -> Select **untrapped-site** -> **Settings** -> **Domains**.
2. Add `untrapped.au` and `www.untrapped.au`.
3. Vercel will provide DNS records. Update your domain registrar with:
   - For `untrapped.au` (Apex domain):
     - **Type**: A Record
     - **Name**: `@`
     - **Value**: `76.76.21.21`
   - For `www.untrapped.au` (Subdomain):
     - **Type**: CNAME
     - **Name**: `www`
     - **Value**: `cname.vercel-dns.com.`

---

## License

All rights reserved by Michael Page. Content, design elements, and audit data are independent community advocacy assets.
