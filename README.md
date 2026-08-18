<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/readme/hero-dark.png">
  <img src="./assets/readme/hero-light.png" width="100%" alt="An abstract systems topology connecting services, data streams, and intelligent decision nodes.">
</picture>

<h1 align="center">Aayush Tiwari</h1>

<p align="center"><strong>Software engineer working across backend systems, data infrastructure, and applied AI.</strong></p>

<p align="center">
  I build systems where evidence can be replayed, decisions can be inspected,<br>
  and model behavior has explicit operational boundaries.
</p>

<p align="center">
  <a href="https://aayushktiwari.tech"><strong>Portfolio</strong></a>
  &nbsp;·&nbsp;
  <a href="https://aayushktiwari.tech/resume"><strong>Résumé</strong></a>
  &nbsp;·&nbsp;
  <a href="https://www.linkedin.com/in/aayushktiwari/"><strong>LinkedIn</strong></a>
  &nbsp;·&nbsp;
  <a href="mailto:aayushkumar345@gmail.com"><strong>Email</strong></a>
</p>

<p align="center"><sub>Mumbai, India · B.Tech, Artificial Intelligence &amp; Data Science · 2023–2027</sub></p>

---

## How I think about systems

<picture>
  <source media="(prefers-reduced-motion: reduce) and (prefers-color-scheme: dark)" srcset="./assets/readme/systems-static-dark.svg">
  <source media="(prefers-reduced-motion: reduce)" srcset="./assets/readme/systems-static-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="./assets/readme/systems-dark.svg">
  <img src="./assets/readme/systems-light.svg" width="100%" alt="A system map in which typed services create replayable data, which is evaluated before intelligence is allowed to act.">
</picture>

The model is only one part of the system. I care about the path around it: typed interfaces, observable execution, replayable evidence, deterministic baselines, evaluation gates, and bounded action surfaces.

```text
SYSTEMS                   DATA                         INTELLIGENCE
typed boundaries    →     replayable evidence    →    evaluated decisions
auth · tests · APIs       streams · lineage · state   baselines · gates · review
```

---

## Built inside real operating constraints

### Barclays · Technology Developer Intern

`June 2026 — August 2026` · `Python` `FastAPI` `React` `TypeScript`

Helped evolve a sanctions-screening proof of concept into a configuration-driven workflow spanning ingestion, validation, normalization, clustering, candidate generation, rules, decision merging, monitoring, access control, and testing.

- Designed for record files exceeding **80 million rows**, with isolated runs and explicit environment stages.
- Added operational visibility, bearer authentication, role-based access, audit logging, and Pytest coverage around the workflow.

### Makeflow India · Backend Developer Intern

`September 2025 — November 2025` · `Node.js` `Backend systems` `Applied AI`

Refactored an AI-assisted counselling backend so inference, session state, and workflow orchestration had clearer boundaries.

- Reduced inter-service coupling by roughly **40%** and code redundancy by roughly **30%** across a four-stage workflow.
- Implemented bounded keyword-based crisis routing below **100 ms** without presenting the system as a clinical decision-maker.

### Segmentriq Analytics · Data Analytics Intern

`December 2024 — January 2025` · `SQL` `ETL` `Power BI` `DAX`

Built normalized reporting foundations across more than five source systems and translated them into operational dashboards for revenue, churn, and funnel analysis.

- Improved ad-hoc analysis turnaround by roughly **35%** through a reusable warehouse model.
- Reworked the star schema and refresh path for roughly **25%** faster dashboard refreshes.

<sub>Experience descriptions are intentionally limited to public résumé-level context and disclose no confidential company or client data.</sub>

---

## Selected systems

### 01 · [TracePilot](https://github.com/aayushtiwari845/TracePilot)

**Evidence-grounded incident investigation for distributed systems.** TracePilot correlates metrics, logs, traces, topology, and change evidence into auditable root-cause rankings and evidence-cited diagnoses.

> **What matters:** evaluation can keep a learned ranker out of the decision path when a simpler deterministic baseline performs better.

`Python` `FastAPI` `Next.js` `PostgreSQL` `pgvector` `Redis` `MLflow` `Kubernetes` `OpenTelemetry`

[Source](https://github.com/aayushtiwari845/TracePilot) · [Case study](https://aayushktiwari.tech/projects/tracepilot)

<details>
<summary><strong>Architecture, validation, and boundaries</strong></summary>

- **Flow:** telemetry → immutable incident bundle → evidence correlation → deterministic/model ranking → cited diagnosis.
- **Evidence:** metrics, logs, traces, topology, and deployment/change context remain attributable throughout the investigation.
- **Validation:** generated fault labs, runbooks, candidate-model evaluation, and feedback records make experiments reproducible.
- **Boundary:** recovery experiments stay inside controlled sandboxes; this is not framed as unrestricted autonomous production remediation.

</details>

### 02 · [TinyLinguist](https://github.com/aayushtiwari845/Tiny-Linguist)

**A reduced-compute multilingual language and sentiment research system.** The project distills a four-layer student model across English, Hindi, French, German, Italian, and Spanish.

> **What matters:** the checked-in benchmark reports a **10.8× speedup** and **5.2× smaller model**, while also exposing a weak **41.57% sentiment result** instead of hiding the limitation.

`Python` `PyTorch` `Transformers` `Knowledge distillation` `Multilingual NLP`

[Source and benchmark notes](https://github.com/aayushtiwari845/Tiny-Linguist)

<details>
<summary><strong>Why the negative result belongs here</strong></summary>

The same reduced-compute benchmark reports **92.22% language-identification accuracy**, but sentiment quality remains far behind a polished classifier. That makes TinyLinguist useful as an honest compression experiment—not as a universal multilingual sentiment claim.

</details>

### 03 · [Indian IPO Analytics](https://github.com/aayushtiwari845/IPO-Analytics)

**Reproducible analysis of a curated 2019–2024 Indian IPO dataset.** The work combines data enrichment, regression, clustering, distribution analysis, and an interactive Plotly Dash exploration surface.

> **What matters:** the dataset boundary—**63 IPOs across 27 sectors**—stays beside the results, so descriptive findings are not presented as prospective market forecasts.

`Python` `Pandas` `NumPy` `SciPy` `scikit-learn` `statsmodels` `Plotly Dash`

[Source](https://github.com/aayushtiwari845/IPO-Analytics) · [Case study](https://aayushktiwari.tech/projects/indian-ipo-analytics)

<details>
<summary><strong>Analysis surface</strong></summary>

- A curated dataset with 34 columns and complete enriched-return coverage inside the project dataset.
- Regression and cross-validation, two-cluster risk segmentation, fitted distributions, sector comparisons, and an explorable dashboard.
- Results are dataset-specific research findings, not investment advice or evidence of future predictive performance.

</details>

### 04 · [Portfolio](https://github.com/aayushtiwari845/portfolio)

**A production-oriented technical portfolio, not a résumé template.** It uses typed content, server-rendered case studies, accessible dark and light systems, progressive motion, generated metadata, and first-class reduced-motion fallbacks.

> **What matters:** the visual layer degrades cleanly—content stays understandable without animation, optional graphics, or client-side interaction.

`Next.js` `React` `TypeScript` `Tailwind CSS` `Vitest` `Accessibility` `SEO`

[Live site](https://aayushktiwari.tech) · [Source](https://github.com/aayushtiwari845/portfolio)

### 05 · [Civic archive](https://github.com/aayushtiwari845/Civic-Issues-Dashboard)

**A credentialed Supabase-to-Storacha/IPFS archival utility with a static public exploration surface.** Archival and public presentation are deliberately separate responsibilities.

> **What matters:** the implementation is described at its real boundary; it is not presented as a municipal submission, routing, or case-management platform.

`Node.js` `Supabase` `Storacha` `IPFS` `Static web`

[Source](https://github.com/aayushtiwari845/Civic-Issues-Dashboard) · [Live archive](https://civic-issues-dashboard.vercel.app) · [Case study](https://aayushktiwari.tech/projects/civiclens)

<details>
<summary><strong>Additional research systems</strong></summary>

#### CONCLAVE

A mutual-fund research prototype combining public-data ingestion, feature engineering, four role-specialised agents, provider-independent inference, deterministic consensus/fallback behavior, evaluation, and backtesting. It is a research tool—not financial advice.

[Read the case study](https://aayushktiwari.tech/projects/conclave)

#### Real-Time Fraud Detection Pipeline · collaborative academic project

A Kafka and Spark Structured Streaming experiment studying compact fraud inference under severe class imbalance. Three features retained **99.2%** of full-feature AUC-ROC and reduced local inference latency by roughly **30%**, but false positives increased from 27 to 466. The reported **3,285 transactions/s** and **26.53 ms median batch latency** are simulated local benchmark results, not production-payment claims.

[Shared source](https://github.com/aditya-ravi11/realtime-fraud-detection-qiea) · [Read the case study](https://aayushktiwari.tech/projects/real-time-fraud-detection)

</details>

---

## Engineering principles

**Evidence before automation.** Preserve source context and replayable artifacts before asking a model to decide.

**Baselines before promotion.** A learned system should outperform an appropriate deterministic alternative, not merely clear an absolute score.

**Bounded action surfaces.** Authentication, typed interfaces, audit trails, and human approval keep automation inside an explicit blast radius.

**Limitations stay visible.** Dataset scope, ownership, deployment boundaries, collaboration, and negative findings belong beside the result.

---

## Working set

```text
SYSTEMS        Python · FastAPI · Node.js · Spring Boot · REST APIs · Pytest
DATA           Kafka · Spark · PySpark · PostgreSQL · Redis · Warehousing · ETL
INTELLIGENCE   PyTorch · TensorFlow · MLflow · Spark MLlib · LangChain · LLM systems
PLATFORM       Docker · Kubernetes · Linux · Prometheus · OpenTelemetry
PRODUCT        React · Next.js · TypeScript
```

<details>
<summary><strong>Broader foundations</strong></summary>

`Java` · `C++` · `SQL` · `JavaScript` · `Pandas` · `NumPy` · `MySQL` · `DSA` · `OOP` · `DBMS` · `Operating systems` · `Computer networks` · `Distributed systems` · `Software design`

</details>

---

## Education

**K.J. Somaiya School of Engineering**  
B.Tech — Artificial Intelligence &amp; Data Science  
August 2023 — July 2027 · Mumbai, India

---

## Let’s compare notes

**Building a backend, data, or applied-AI system?**

If the hard part is making it trustworthy, operable, or understandable, I would be glad to compare notes.

[aayushkumar345@gmail.com](mailto:aayushkumar345@gmail.com) · [aayushktiwari.tech](https://aayushktiwari.tech) · [LinkedIn](https://www.linkedin.com/in/aayushktiwari/)

---

<p align="center">
  <a href="https://github.com/aayushtiwari845/aayushtiwari845/actions/workflows/readme-quality.yml"><img alt="Profile README quality checks" src="https://github.com/aayushtiwari845/aayushtiwari845/actions/workflows/readme-quality.yml/badge.svg"></a>
  &nbsp;
  <a href="https://github.com/aayushtiwari845/portfolio/actions/workflows/ci.yml"><img alt="Portfolio production checks" src="https://github.com/aayushtiwari845/portfolio/actions/workflows/ci.yml/badge.svg"></a>
</p>

<p align="center"><sub>Designed as a dependable technical surface: local assets, progressive motion, no visitor counters, no streak cards, and no third-party stats dependency.</sub></p>
