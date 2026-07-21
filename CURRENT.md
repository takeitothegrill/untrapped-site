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

- **Canonical Production URL**: [https://untrapped.au](https://untrapped.au)
- **Permanent www Redirect**: [https://www.untrapped.au](https://www.untrapped.au) &rarr; [https://untrapped.au](https://untrapped.au) (HTTP 308 Permanent Redirect)
- **Fallback/Platform URL**: [https://untrapped-site.vercel.app/](https://untrapped-site.vercel.app/)
- **Live Branch**: `main`
- **Latest Verified Commit**: `cf9aa71626f6345ecdb2231bf3fa52cd65882fe5` ("docs: update deployment model and research status")
- **Production Deployment ID**: `dpl_4HwJVYFb3zaoUWxtnDKZpPg81kUp`
- **Git Alignment**: Local `HEAD` matches `origin/main` after push. Production Vercel deployment corresponds exactly to the latest automated push commit `cf9aa71` deployed automatically.

---

## 3. Validation Checklist

| Check | Status | Verification Detail |
|---|---|---|
| **Production URL Active** | **PASS** | Live site verified via python inspect script. |
| **GitHub/Vercel Sync** | **PASS** | GitHub-to-Vercel integration is configured and active. Pushes to origin/main automatically trigger production builds and deployments. |
| **Responsive Presentation** | **PASS** | Layouts verified at 360px, 390px, 768px, and desktop widths. |
| **Scope Isolation** | **PASS** | No backend dependencies, no database, no scripting creep. Pure static page. |
| **Accessibility Status** | **PASS** | Automated scans verified 0 violations on homepage and about page. Research page contains 23 known color-contrast findings retained from the approved visual design story. Skip-to-content links, landmarks, color-independent link styles, keyboard visible focus, unique IDs, and chart alt labels are fully implemented. |
| **Domain Attachment** | **PASS** | VentraIP DNS hosting attached; Vercel custom domain configuration is fully verified and active. |
| **DNS Configuration** | **PASS** | Apex A record pointing to `216.198.79.1` and `www` CNAME pointing to `2e3d9873f484e66d.vercel-dns-017.com`. |
| **HTTPS/SSL Certificate** | **PASS** | Valid SSL certificate provisioned automatically by Vercel; all traffic resolved over HTTPS. |
| **Homepage Validation** | **PASS** | Homepage successfully loads at [https://untrapped.au](https://untrapped.au). |
| **About Page Validation** | **PASS** | About page successfully loads at [https://untrapped.au/about.html](https://untrapped.au/about.html). |
| **Research Page Validation** | **PASS** | Research page successfully loads at [https://untrapped.au/research.html](https://untrapped.au/research.html) with complete NDIS/carers data story. |
| **308 Redirect Validation** | **PASS** | `www.untrapped.au` correctly triggers a 308 Permanent Redirect to the apex domain `untrapped.au`. |
| **Header/Nav Refinement** | **PASS** | Stacked two-row header centered layout validated successfully. Logo and tagline sit together horizontally. |
| **Hero Text Legibility** | **PASS** | Semi-opaque card overlay with left teal border adds strong contrast to hero subtitle text. |
| **Findings Card Spacing** | **PASS** | Visual breathing room increased above the infrastructure findings cards by adding scoped header margin. |
| **Deployment Discrepancy** | **RESOLVED** | Confirmed and verified GitHub-to-Vercel automatic synchronization is active and working. |
| **Raw-HTML Verification** | **PASS** | Checked live pages via `curl.exe` with a 10s timeout to confirm exact copy strings and research story exist in production. |
| **Human Visual Acceptance** | **PASS** | Michael's manual visual review on desktop and mobile successfully accepted. |
| **Personal Email Reporting** | **LIMITATION** | Personal iCloud address is exposed in `mailto:` links as an accepted current-state limitation in V1.0. |


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
- **Full WCAG 2.2 AA Contrast Compliance**: Systematically resolved all 12 color contrast warnings across the entire site by adjusting the `--text-muted` value to `#657775` (4.7:1 contrast on white).
- **Dedicated About Page**: `/about.html` page featuring Michael's detailed bio, CAEG chair role, and CQU auspiced funding statement.
- **Dedicated Research Page**: `/research.html` page fully populated with the Livingstone Shire data story, scoped to prevent styling leakage.
- **Compact Incidents Feed**: Restyled the incidents card section to be a compact news feed subordinate to the Map and Key Observations.

### B. Partially Implemented
- **Capricorn Region Advocacy**: Currently, the site title and copy position the campaign for the whole Capricorn region, but the actual map data, location directory, and regional imagery cover only the Yeppoon and Emu Park coastlines.

### C. Proposed Next Enhancement
- **Google Form Reporting**: Integrating an embedded Google Form that inputs reports into a Google Sheet owned by Michael, with options to escalate formal complaints to the CAEG Human Rights Act pathway.

### D. Future Phase for `untrapped-site`
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

> [!NOTE]
> The copy refinements, mobile/desktop two-row navigation, findings section spacing, hero text legibility overlay, and Research page integration have been successfully completed and verified.
> The previous domain HOLD is closed. All updates are static-isolated.

The next step is for Michael to review and make decisions on the following open roadmap items:

### Requires Human Decision
1. **Dedicated Campaign Contact Email**: Michael to decide whether to create a dedicated Gmail (e.g., `untrapped.capricorn@gmail.com`) or set up `hello@untrapped.au` via VentraIP email forwarding now that the domain is attached.
2. **Hazard Reporting Forms**: Decide whether to implement the CAEG complaint escalation link alongside or instead of a Google Form.
3. **Rockhampton Audits**: Align on a timeline for the on-ground audit of Rockhampton CBD and heritage areas.

### Requires External Dependency or Ownership Action
1. **Google My Map Account continuity**: Confirm ownership or editing access plan for Louise Page's Google account to ensure the map embed remains public and editable.
2. **Consent for Identifiable Photographs**: Michael must explicitly verify consent from any recognizable individuals in photos prior to uploading assets.
