---
  title: "github-add"
  blurb: "Auto-add users to a github org"
  skills_needed: []
  repos: 
    - "https://github.com/sfbrigade/github-add"
  app_link: "http://c4sf.me/joingithub"
  license: "MIT"
  project_status: "live"
  project_lead: null
  project_members: null
  image_path: "http://i.imgur.com/2lHqtJ7.png"
  active: false
  tags: 
    - "infrastructure"
    - "github"
---
# github-add
A lightweight node application that adds users to the github org. This was thrown together in about an hour, Pull requests are absolutely welcome.

Code for San Francisco deploy (on free Heroku dyno): http://c4sf.me/joingithub

Screenshot:

![](https://i.imgur.com/eMrnKC2.png)

This application is driven by environment variables. When setting up your instance, please make sure to provide these values:

Variable Name | Description | Example value
------------- | ----------- | -------------
`SITE_IMAGE` | Image to show at top of form. *not currently used* | `"http://placehold.it/360x360"`
`SITE_TITLE` | Title to show at top of form | `"Github Access"`
`SITE_WELCOME` | Welcome text | `Input your username below, and you'll be added as a basic member of the org.`
`SITE_ACCEPT_INVITE` | Screenshot to show in form for accepting invite |  `http://i.imgur.com/GffNAWv.png` ![](http://i.imgur.com/GffNAWv.png)
`SITE_ACCEPT_INVITE_2` | Another screenshot to show | `http://i.imgur.com/a1Q6qkQ.png` ![](http://i.imgur.com/a1Q6qkQ.png)
`GITHUB_ORG` | Name of your github organization | `sfbrigade`
`GITHUB_TOKEN` | Access Token of an organization admin (with add rights `admin:org` scope). Can be created here: https://github.com/settings/tokens/new | ` `
