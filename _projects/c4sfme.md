---
  title: "c4sf.me"
  blurb: "A url shortening service for Code for San Francisco"
  skills_needed: []
  repos: 
    - "https://github.com/sfbrigade/c4sf.me"
  app_link: "http://c4sf.me/admin"
  license: "MIT"
  project_status: "live"
  project_lead: null
  project_members: null
  image_path: "http://i.imgur.com/2lHqtJ7.png"
  active: false
  tags: 
    - "infrastructure"
---
## C4SF.me

A url shortening service for Code for San Francisco. Built off [sahat/hackathon-starter](https://github.com/sahat/hackathon-starter). A very quickly made app. PRs are absolutely welcome.


Code for San Francisco deploy: http://c4sf.me/admin

### Screenshots

##### Public Page

![](https://i.imgur.com/ND8EnHd.png)

##### Add new / edit link

![](https://i.imgur.com/cyhZ1gd.png)

![](https://i.imgur.com/fZhuDns.png)

### Enviroment variables to set

Variable Name | Description | Example value
------------- | ----------- | -------------
`MONGODB` | MongoDB instance URL | `mongodb://localhost:27017/c4brigade-me`
`MONGOLAB_URI` | MongoDB instance URL (should be same as above) | `mongodb://192.168.99.100:27017/c4brigade-me`
`SESSION_SECRET` | Session salt string | `7hi$is@seCret`
`GITHUB_ID` | Github application id (create them here: `https://github.com/organizations/your-organization/settings/applications/new`) | `d4409ccd238d6db56255` (for local installation)
`GITHUB_SECRET` | Github application secret | `5c37cffa6fb7092e64e61f695d7b527f45caca15` (for local installation)
