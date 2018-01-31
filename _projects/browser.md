---
  title: "browser"
  blurb: "a browser for the SF Code"
  skills_needed: []
  repos: 
    - "https://github.com/sfbrigade/browser"
  app_link: "http://dccode.org/browser/"
  license: "MIT"
  project_status: "proposed"
  project_lead: null
  project_members: null
  image_path: "http://i.imgur.com/2lHqtJ7.png"
  active: false
  tags: []
---
# browser

A fast browser for the DC Code.

This is a much simpler and less feature-rich system that more developed
stuff like [The State Decoded](http://www.statedecoded.com/), but ideally
is either a proof-of-concept of a fully static approach or at least a useful
tool for proofing [our parser](https://github.com/openlawdc/dc-decoded).

This site takes a [static approach](http://macwright.org/2013/01/08/thinking-static.html)
to the task. It's hosted on [GitHub Pages](http://pages.github.com/).

## Setup

    git clone git@github.com:openlawdc/code-browser.git

[Then boot up a local development server](https://gist.github.com/tmcw/4989751)
and go to the url specified there, like `http://localhost:8080/`

## Rebuilding

To rebuild, you'll need [node.js](http://nodejs.org/) with `npm`:

    npm install
    make
