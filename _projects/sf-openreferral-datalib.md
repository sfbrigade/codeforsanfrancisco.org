---
  title: "sf-openreferral-datalib"
  blurb: "Data library for the SF OpenReferral project  https://github.com/sfbrigade/sf-openreferral  "
  skills_needed: []
  repos: 
    - "https://github.com/sfbrigade/sf-openreferral-datalib"
  app_link: "https://github.com/sfbrigade/sf-openreferral-datalib"
  license: "MIT"
  project_status: "proposed"
  project_lead: null
  project_members: null
  image_path: "http://i.imgur.com/2lHqtJ7.png"
  active: false
  tags: []
---
SF Open Referral Source Data Library
====================================

# NOTE: This repo is no longer under development or being maintained. Information is for reference purposes only.

##Installation

From the root of the repository, run the following:

    pip install virtualenv
    virtualenv venv
    source venv/bin/activate
    python setup.py develop
    pip install -r requirements.txt

##Usage

A `sforparser` script is provided for parsing data in a given format into JSON
matching the Open Referral spec.

###Examples

* sforparser -f apd data/apd/input.txt > data/apd/output.json

##Development

You can run tests with:

    py.test
