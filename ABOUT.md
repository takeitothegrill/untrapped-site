# ABOUT — (un)TRAPPED Campaign Website Project Charter

> [!IMPORTANT]
> **CRITICAL PROJECT IDENTITY INVARIANT**
> There are two separate projects under the unTRAPPED banner that must never be confused:
> 1. **`untrapped-site`** (This Project / Repository): The current public-facing advocacy and static campaign website. It wraps around an existing public Google My Map, provides an accessible HTML alternative, and is deployed via Vercel.
> 2. **`untrapped`** (Dormant Project): A separate, dormant future custom web application and backend concept intended for a later custom mapping phase.
>
> These two projects must not be merged, renamed, substituted, or treated as the same project. Do not use "untrapped" as shorthand for `untrapped-site` where it could create ambiguity.

---

## 1. Document Purpose & Read Order

This repository contains three main documentation files. They serve distinct purposes and should be read in this order:

1. **`ABOUT.md`** (This Document): The stable project charter and product intent. It defines why this campaign exists, the audiences, desired long-term outcomes, and core campaign principles. Proposed capabilities are listed here but are explicitly labeled as future roadmap aspirations rather than current implementation.
2. **`README.md`**: The technical repository guide. It describes what is currently implemented, file/folder structure, local development instructions, Vercel deployment, and operational requirements.
3. **`CURRENT.md`**: The living verified status of the deployment. It records the production URL, verified deployment status, known quality limitations, and classifies proposed features into a concrete roadmap for future decision-making.

---

## 2. Strategic Context & Purpose

**unTRAPPED** (visually branded as **(un)TRAPPED**) is a one-person disability-access advocacy campaign led by Michael Page.

### Target Region
The campaign covers the **whole Capricorn region of Central Queensland, Australia**, specifically addressing two local government areas:
- **Livingstone Shire Council** (including Yeppoon and the Capricorn Coast)
- **Rockhampton Regional Council** (including Rockhampton and historical areas)

### Why It Exists
People with mobility disabilities face daily structural barriers that trap them at home or put them at risk of physical injury. This project serves as an evidence bank mapping real-world accessibility failures and wins in the region to support residents navigating their towns and pressure councils for infrastructure repairs.

### Campaign Principles
- **Constructive Advocacy**: We highlight problems with evidence but remain constructive. Michael actively collaborates with local council mayors, engineers, and community organisations.
- **Dignity First**: People with disabilities are presented as active agents in their communities, not objects of pity. Photos of real individuals are subject to strict consent rules.
- **The Brackets Device**: Visual branding relies on the **(un)TRAPPED** brackets device, where the "un" represents the ultimate goal of removing accessibility barriers.

---

## 3. Desired Outcomes & Audience

### Core Audiences
1. **Primary**: Residents and tourists in the Capricorn region with mobility disabilities, their families, and carers.
2. **Secondary**: Council staff, engineers, local councillors, media, and potential future funders.

### High-Level Success Goals
- **Guidance**: Help people get around town safely by using audited access data.
- **Accountability**: Pressure Livingstone Shire Council and Rockhampton Regional Council to fix known hazards (e.g., uneven pavements, steep ramps, missing cut-outs) using on-ground photo evidence.
- **Community Voicing**: Collect reports from the community about their lived accessibility experiences.
- **Funding Readiness**: Establish campaign credibility to support future non-profit (NFP) funding applications.

---

## 4. Operational Boundaries

### Scope of the Static Campaign Site (`untrapped-site`)
- **Single Page Architecture**: A light, fast, scrolling static page using plain HTML, CSS, and minimal JS.
- **No Heavy Frameworks or Backend**: No database, no custom API backend, no custom map engines, and no user accounts.
- **Vercel Deployments**: Maintained on Michael Page's personal Vercel account.
- **Domain Name**: Deployed to `untrapped-site.vercel.app` with future transition to `untrapped.au`.

---

## 5. Candidate Roadmap & Future Intentions (Not Yet Implemented)

The following requirements and proposals were identified during initial requirements gathering on 17 July 2026. They represent Michael's aspirations for future phases of the website and campaign, but **are not currently implemented on the live production site**:

*   **Whole Capricorn Region Map Integration**: Expanding the map audits to fully cover Rockhampton (current live map and HTML alternative only cover Yeppoon and Emu Park).
*   **Google Form Community Reporting**: Embedding a direct Google Form that populates a dedicated spreadsheet for hazard submissions (the current site uses a simple `mailto:` link).
*   **Dedicated Public Campaign Email**: Using a dedicated email address (e.g., `untrapped.capricorn@gmail.com` or `hello@untrapped.au` forwarding) rather than exposing Michael's personal iCloud address.
*   **Domain Migration to `untrapped.au`**: Attaching the registered `untrapped.au` domain to Vercel (currently in progress).
*   **Regional & Heritage Imagery**: Displaying Rockhampton heritage buildings, beef-cattle imagery, and coastal Great Keppel Island (GKI) imagery to ground the visual design in Central Queensland.
*   **Full WCAG 2.2 AA Compliance**: While high contrast and keyboard accessibility are prioritised, the website is not currently verified as fully WCAG 2.2 AA compliant. Meeting this standard without contrast warnings remains an active roadmap goal.
*   **Google My Map Account Ownership Plan**: Establishing a long-term plan for the map data published under Louise Page's Google account to ensure embed continuity.

---

## 6. Michael's Credentials & Campaign Standing

The credibility layer of the site highlights Michael's active advocacy roles in Central Queensland:
- Long-time advocate with the **Capricorn Access & Equity Group (CAEG)** (Central Queensland's longest-running accessibility group).
- Served a term as **Chair of the Accessibility Capricornia Group**, meeting bi-monthly with the Livingstone Mayor, councillors, and engineers.
- Works in community engagement at **Capricorn Citizen Advocacy**, a disability advocacy charity in Rockhampton.
- Leadership Group Member of the **Capricornia Stronger Places, Stronger People** initiative auspiced by Central Queensland University (CQU).
- Personal history of daily disability care advocacy (2017–2023).
