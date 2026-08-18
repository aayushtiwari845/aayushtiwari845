# Profile launch checklist

The root `README.md` in this package is a GitHub **profile README**. It must live in a separate public repository named exactly `aayushtiwari845`; placing it in the existing `portfolio` repository will only change that project's documentation.

## 1. Create the special repository

1. Open <https://github.com/new> while signed in as `aayushtiwari845`.
2. Set **Repository name** to `aayushtiwari845`.
3. Select **Public**.
4. Do not initialize it with a README, `.gitignore`, or license—the package already contains them.
5. Create the repository.

GitHub will recognize the matching public repository as special and render its root README on the profile overview.

## 2. Publish this prepared package

From `C:\Users\Aayus\Documents\ChatGPT\aayushtiwari845`:

```powershell
git remote add origin https://github.com/aayushtiwari845/aayushtiwari845.git
git add README.md PROFILE_SETUP.md ASSET_NOTES.md LICENSE .github scripts assets
git commit -m "Create profile README"
git push -u origin main
```

## 3. Complete the profile metadata

Recommended public profile fields:

- **Name:** Aayush Tiwari
- **Bio:** Software engineer building backend systems, data infrastructure, and applied AI.
- **Location:** Mumbai, India
- **Website:** <https://aayushktiwari.tech>
- **Social link:** <https://www.linkedin.com/in/aayushktiwari/>

Do not add “open to work” or a current-employer claim unless that status is intentionally public and up to date.

## 4. Curate the six repository pins

Recommended order:

1. `TracePilot`
2. `Tiny-Linguist`
3. `IPO-Analytics`
4. `portfolio`
5. `Civic-Issues-Dashboard`
6. `Trading-Assistant`

This replaces GitHub's automatic “Popular repositories” selection, which currently foregrounds several older or minimally documented repositories.

## 5. Add repository descriptions and topics

The public repositories currently have empty descriptions and topics. Add short, evidence-safe descriptions and a few precise topics to the pinned repositories so search and profile scanning remain coherent.

Suggested descriptions:

- **TracePilot:** Evidence-grounded incident investigation with auditable RCA rankings and reproducible fault labs.
- **Tiny-Linguist:** Reduced-compute multilingual language identification and sentiment research through model distillation.
- **IPO-Analytics:** Reproducible analysis and interactive exploration of a curated 2019–2024 Indian IPO dataset.
- **portfolio:** Technical portfolio for backend systems, data infrastructure, and applied AI case studies.
- **Civic-Issues-Dashboard:** Supabase-to-Storacha/IPFS archival utility with a static public exploration dashboard.
- **Trading-Assistant:** Multi-agent market-research prototype with analytics, retrieval, and offline fallbacks.

## 6. Set the social preview

In the new repository, open **Settings → General → Social preview → Edit** and upload:

`assets/readme/social-preview.png`

The social preview is intentionally separate from the 3:1 README banners so link cards crop correctly.

## 7. Final quality check

- Confirm light and dark GitHub themes select the correct banner and systems map.
- Enable reduced motion at operating-system level and confirm the static map appears.
- Check the profile at 320–390 px wide and on desktop.
- Open every project, case-study, résumé, email, and workflow link.
- Confirm the `README Quality` workflow passes.
- Verify the profile overview shows the README and the chosen six pins.
