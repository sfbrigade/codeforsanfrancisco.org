---
  title: "TrustOSS"
  blurb: "A set of standards for Open Source Software projects."
  skills_needed: 
    - "node.js"
    - "documentation"
  repos: 
    - "https://github.com/trustoss"
  app_link: "http://trustoss.org"
  license: null
  project_status: "alpha"
  project_lead: null
  project_members: null
  image_path: "http://trustoss.org/static/img/trustoss_v1_title_white.885.256.jpg"
  active: false
  tags: 
    - "documentation"
    - "trust"
    - "project standards"
    - "lint"
    - "infrastructure"
---
[![](https://img.shields.io/badge/Trust-OSS-green.svg)](http://trustoss.org) [![](https://img.shields.io/badge/c4sf-Infrastructure-yellow.svg)](http://codeforsanfrancisco.org)

Open Source Software you can trust. A set of standards for Open Source Software projects that establish and maintain trust in your community. A Code for San Francisco Infrastructure Initiative.

- [v0.1.2 - Aug 15, 2016](#v012---aug-15-2016)
- [pre-v1](#pre-v1)

### Purpose
Open source projects are build on trust. Trust between maintainers and contributors. Trust between end users and maintainers. Trust between project members and community partners. As trust is built around a project, adoption and community grow, leading to greater impact. TrustOSS is a proposed project governance standard built around the goal of building and maintaining trust in your projects.

### Status

![](https://img.shields.io/badge/status-discovery-orange.svg)

This project is currently in **Discovery** or **Ideation** phase. We're building out a simple set of standard files for pre-v1, however that spec is subject to change. 

### Spec

TrustOSS specification is a set of documentation files that are regularly maintained to ensure trust with the userbase and external partners. The files themselves are outlined below.

#### v0.1.2 - Aug 15, 2016

[Essential Files](https://github.com/trustoss/essential-files/releases/tag/v0.1.2)

##### Required Files

File | Acceptable Filenames | Purpose | Update Frequency
--- | --- | --- | ---
Source Code | *various* | The source code must be provided with the repository, otherwise it's not open. | As frequently as desired
TrustOSS Configuration | `.trustoss`, `trustoss.json`, `docs.json` | Establish the version of specification and location/types of documentation files | Filename changes, updates to spec, version bump
Base Documentation | `README`, `README.md`, `readme.md` | "Landing page" of the repository, the first place new developers will look for information about the project, installation guide (or link to them), usage and troubleshooting. | When there is an update to installation, usage, or troubleshooting steps
Changelog | `CHANGELOG`, `CHANGELOG.md`, `changelog.md` | Notable changes to code or API, corresponding with git tagged version releases | version bump
Contributing | `CONTRIBUTING`, `CONTRIBUTING.md`, `contributing.md` | Information related to onboarding new contributors | when build steps change
License | `LICENSE`, `LICENSE.md`, `license.md` | Lets developers know the legal status of project usage | as desired
Code of Conduct | `COC`, `CODEOFCONDUCT`, `COC.md`, `CODEOFCONDUCT.md`, `codeofconduct.md`, `coc.md` | Lets developers know the rules of engagement while communicating with maintainers and other contributors. No specific coc is required, just that there is one. | as desired

##### Optional Files

The following files are optional to include, however are required to be upkept if included.

File | Acceptable Filenames | Purpose | Update Frequency
--- | --- | --- | ---
`civic.json` | `civic.json` | A civic-centric configuration file, outlining project members, project status, and government partners | version bump
Assets folder | `.assets/` | A folder for non-code related assets, such as logo iterations or database files | as desired
Governance + minutes | `.governance/`, `.governance/minutes` | a folder specific to governance files, including minutes, list of maintainers, etc. | as desired

#### Pre-v1

The pre-v1 spec for essential files and scoffolding tool is based on research done at National Day of Civic Hacking, 2016, at Code for San Francisco. The whiteboad screenshot is listed below for documentation purposes.

![](https://i.imgur.com/TcFHBDa.png)
