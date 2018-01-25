---
title: SF Crime Data
repos: 
  - https://github.com/sfbrigade/sf-crime-data
project_status: beta
app_link: http://sfcrimedata.org/
related_links:
  - title: News coverage
    url: https://example.com
tags:
  - crime
  - safety
  - university
  - rate
  - neighborhood
  - college
  - police
  - statistics
skills_needed:
  - html
  - css
  - javascript
  - api
  - frontend dev
  - mapox
  - sf opendata
learning_opportunities:
  - code
civic_topics:
  - public safety
project_lead: jesse_szwedko
project_members:
  - jason_lally

---

Reduce paper public records requests made to SFPD, by delivering fast, accurate OpenData in a web browser.

## Use Case

Universities and colleges are required by a federal law, the Jeanne Clery Act, to report statistics on specific crimes that happened within ~500 feet of anywhere their student population went. The SFPD fields about 2,500 requests per year from universities and colleges for information about those crimes, which take between 20-40 minutes to fulfill per request (about ~156.25 8-hour days annually). SFPD performs a radial search around a specific address (or list of addresses), provided by the universities or colleges.

This application performs a search of variable size around an address provided by the user, and then offers the crime datapoints for download.

For version 1.0, the application is 100% browser-based. No servers. Just API calls, HTML, CSS, and JavaScript.
MVP Launched

After speaking with the Crime Data Analysis Unit at SFPD on 5/6/2016 for initial user research, the current prototype satisfies their minimum needs. They plan to direct future inquiries from universities and colleges directly to [http://sfcrimedata.org]. Great!

## Vision (1.0)

Satisfy SFPD crime reporting needs, as well as the needs of other interested parties including campus crime statisticians, watchdog groups and post-secondary students while ensuring an easily maintainable product.

## Vision (2.0)

Create a single place for all universities and colleges in the United States to collect the data for their Clery Act reporting requirements, incorporating data from as many police departments in the country as possible.

## Project Needs

- UX and Copywriters The site needs more, easily understandable information ("Help" options or visual cues) on how to use it. Zero coding required.
- User Research and Testing Can you reach out to a university's crime data reporting team, understand their needs (without biasing them), and take notes as they test this application? Zero coding required.
- Front-End Developers HTML, CSS, Javascript, API Calls to Mapbox and SFOpenData. Bonus points if you love APIs and are up for the challenge of keeping the whole project browser-based.
