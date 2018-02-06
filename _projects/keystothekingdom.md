---
  title: "keystothekingdom"
  blurb: "A small Node/Mongo tool to manage SSO credentials + Chrome extension. Relies on Github OAuth for login."
  skills_needed: []
  repos: 
    - "https://github.com/sfbrigade/keystothekingdom"
  app_link: "https://github.com/sfbrigade/keystothekingdom"
  license: "MIT"
  project_status: "proposed"
  project_lead: null
  project_members: null
  image_path: "http://i.imgur.com/2lHqtJ7.png"
  active: false
  tags: []
---
<img src="/k2k.png" width="200" />

# keystothekingdom

***[Code for San Francisco Infrastructure Project](http://codeforsanfrancisco.org/infrastructure)***

A small Node.js tool to manage SSO credentials. Relies on Github OAuth for login.

Goal list:

- Server:
  - [ ] Github Oauth
  - [ ] User Management
  - [ ] store creds in MongoDB
  - [ ] encrypt data at rest
  - [ ] store immutable audit log (possibly [blockchain](https://github.com/ConsenSys/truffle)?)
  - [ ] copy to clipboard by button
- Extension:
  - [ ] Dropdown menu
  - [ ] Login
  - [ ] access remote server
  - [ ] copy to clipboard by button
  - [ ] auto-fill forms on pre-defined services
