---
  title: "Universal Civic Anomaly Detector"
  blurb: "A versatile temporal-spatial anomaly detection app for all levels and agencies of government (and NGOs)."
  skills_needed: 
    - "data science"
    - "R"
    - "shiny"
    - "inferential statistics"
  repos: 
    - ""
  app_link: "http://datascience.codeforsanfrancisco.org/project/universal-civic-anomaly-detector/"
  license: null
  project_status: "mvp"
  project_lead: null
  project_members: null
  image_path: "http://datascience.codeforsanfrancisco.org/wp-content/uploads/2016/10/shiny_anomalies-R_jude-calvillo_mock-412x330.png"
  active: true
  tags: 
    - "anomaly detection"
    - "inferential statistics"
    - "R"
    - "shiny"
---
## Universal Civic Anomaly Detector

A project by the Data Science Working Group @ Code for San Francisco
Project Lead: Jude Calvillo

The aim of this project is to develop a highly versatile temporal-spatial anomaly detection app for all levels and agencies of government (and NGOs). Such an anomaly detector would not just reveal truly significant events (or summary events), given such events' underlying seasonality and trend, but it would also provide time-series and local news context. Thus, it would point civic authorities to events that actually warrant a tactical response, and it would better prepare them for that response, all of which would improve efficiency (saving time, funds, etc).

**Abstraction and Parameterization of Existing App**

This app will be an abstraction of the DSWG's Dept. of Transportation Hazmat Incident Anomaly Detector, where its interface and purported relevance will be generalized, while its inputs and parameters will be as follows:

**Inputs:**

* Data (uploaded or API)
* Shape files (optional: for custom geographic units)

**Parameters:**

* Time interval (hour/day/week/month/year)
* Geographic unit (e.g. census tract, city, county, state)
* Target news topics and filters (e.g. 'hazmat-related accidents')

**Responsible DSWG Teammates**

* Jude Calvillo
* And YOU? (looking for a teammate with R + Shiny experience)

**Stack**

* R (statistical programming language)
* Shiny (web framework for R apps)
* Leaflet (javascript mapping and interactivity)
* Microsoft Cognitive Services API (for news search) / Webhose.io (for -possible- social search)

**Status, as of Oct. 25, 2016**

* Proof of concept, DoT Hazmat Incident Anomaly Detector app, complete.
* Planning abstraction and parameterization.
* Developing a custom 'month picker' input for Shiny, as no such input widget exists (i.e. could help promote the DSWG).
* Honing MS Cognitive Services search operators in hopes of improving news relevance.

**Keywords**

Shiny, Shiny app, anomaly detection, Leaflet, data science working group, code for san francisco, R, r programming, jude calvillo, inferential statistics, code for america, brigade