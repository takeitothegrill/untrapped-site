# CURRENT — (un)TRAPPED Campaign Website Verified State

> [!IMPORTANT]
> **CRITICAL PROJECT IDENTITY INVARIANT**
> This repository is **`untrapped-site`**, the public-facing static campaign website deployed via Vercel and wrapping a Google My Map.
> It must never be confused with the dormant **`untrapped`** project, which represents a separate future application and backend concept.

---

## 1. Document Purpose & Read Order

This document contains the living verified status of the deployment.

Read order:
1. `ABOUT.md` (project charter, mission, and long-term direction)
2. `README.md` (technical structure and development instructions)
3. `CURRENT.md` (This Document: live status, validation, and roadmap candidates)

---

## 2. Production Status

- **Live Production URL**: [https://untrapped-site.vercel.app/](https://untrapped-site.vercel.app/)
- **Live Branch**: `main`
- **Latest Verified Commit**: `e764d8d3d9da0eb543e02bb67a0f2c37b5fa7628` ("chore: update desktop and mobile screenshots from live deployed site")
- **Git Alignment**: Local `HEAD` matches `origin/main`. Production Vercel deployment corresponds exactly to this repository version.

---

## 3. Validation Checklist

| Check | Status | Verification Detail |
|---|---|---|
| **Production URL Active** | **PASS** | Live site verified in incognito browser and by agent request. |
| **GitHub/Vercel Sync** | **PASS** | Automated build completed successfully on Vercel. Commit `e764d8d` is live. |
| **Responsive Presentation** | **PASS** | Desktop and mobile layouts verified. CSS adjustments are in place for devices down to 360px. |
| **Scope Isolation** | **PASS** | No backend dependencies, no database, no scripting creep. Pure static page. |
| **Accessibility Status** | **WARNING** | High-contrast CSS, skip-to-content links, and keyboard focus states are implemented. However, the site is **not** verified as full WCAG 2.2 AA compliant. An automated scan identified **12 known contrast warnings** that remain unresolved. |
| **Local Working Tree** | **HOUSEKEEPING** | Local working directory contains modified screenshot files (`assets/screenshot-desktop.png` and `assets/screenshot-mobile.png`) and several untracked png design references, but no code changes. |

---

## 4. Roadmap Candidate Classification

To support future planning, the requirements from the project brief and revised proposals are classified below:

### A. Already Implemented and Verified
- **Yeppoon & Emu Park Map Audits**: Complete Google My Map iframe embed (`mid=1mOXyoupEm3Pc8QmL-Yvrxrqt9eIsG48`).
- **Accessible HTML Alternative**: Accordions listing details of the audited locations by category: Toilets (23), Disability Parking (16), Adapted Amenities (2), Pathway Access (26), Venue Accessibility (15), Access Tour 2025 Locations (9).
- **Campaign Branding**: Text logo device showing **(un)TRAPPED** and the tagline "ACCESS FOR ALL. EVERYWHERE."
- **Credentials Section**: Michael Page's standing with the Capricorn Access & Equity Group (CAEG) and Capricorn Citizen Advocacy is prominently displayed.
- **Manual Email Reporting Flow**: A campaign reporting `mailto:` button with prefilled subject and body addressed to `michael.page010@icloud.com`.
- **Keyboard & Motion Support**: Skip-link, visible focus styles, and `prefers-reduced-motion` CSS rules are active.

### B. Partially Implemented
- **Capricorn Region Advocacy**: Currently, the site title and copy position the campaign for the whole Capricorn region, but the actual map data, location directory, and regional imagery cover only the Yeppoon and Emu Park coastlines.

### C. Proposed Next Enhancement
- **Google Form Reporting**: Integrating an embedded Google Form that inputs reports into a Google Sheet owned by Michael, with options to escalate formal complaints to the CAEG Human Rights Act pathway.

### D. Future Phase for `untrapped-site`
- **Full WCAG 2.2 AA Compliance**: Systematically fixing the 12 known color contrast warnings on the static website.
- **Rockhampton Audits**: Expanding on-ground audits and adding a Rockhampton map and HTML alternative toggle.

### E. Out of Scope for `untrapped-site`
- **Custom Map Programming**: Custom JavaScript-based interactive mapping (the site relies strictly on the Google My Map iframe).
- **CMS or Blogging Platform**: Replaced by direct editing of `index.html`.
- **User Accounts and Analytics**: Keeping the site zero-maintenance and cookie-free.

### F. Belongs to Dormant `untrapped` App/Backend
- **Whole-Outing Accessibility Planner**: The complex V2 routing and planning tool to compute outing safety.
- **Community Submission & Moderation**: Multi-user registration, ratings, and backend workflows.

---

## 5. Next Actions & Human Decisions Required

The next step is for Michael to review and make decisions on the following open roadmap items:

### Requires Human Decision
1. **Dedicated Campaign Contact Email**: Michael to decide whether to create a dedicated Gmail (e.g., `untrapped.capricorn@gmail.com`) or wait to set up `hello@untrapped.au` via VentraIP email forwarding once the domain is attached.
2. **Hazard Reporting Forms**: Decide whether to implement the CAEG complaint escalation link alongside or instead of a Google Form.
3. **Rockhampton Audits**: Align on a timeline for the on-ground audit of Rockhampton CBD and heritage areas.

### Requires External Dependency or Ownership Action
1. **Domain Acquisition & Attachment**: Michael is completing the registration of `untrapped.au` at VentraIP. Once registered, Vercel DNS A and CNAME records must be configured as detailed in `README.md`.
2. **Google My Map Account continuity**: Confirm ownership or editing access plan for Louise Page's Google account to ensure the map embed remains public and editable.
3. **Consent for Identifiable Photographs**: Michael must explicitly verify consent from any recognizable individuals in photos prior to uploading assets.
