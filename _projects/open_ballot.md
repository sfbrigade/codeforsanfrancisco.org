---
  title: "open_ballot"
  blurb: "An educational tool around ballot measures"
  skills_needed: []
  repos: 
    - "https://github.com/sfbrigade/open_ballot"
  app_link: "https://github.com/sfbrigade/open_ballot"
  license: "MIT"
  project_status: "proposed"
  project_lead: null
  project_members: null
  image_path: "http://i.imgur.com/2lHqtJ7.png"
  active: false
  tags: []
---
open_ballot README
==================

Prerequisites
-------------

- virtualenv
- posgresql-9.3
- [nodejs](http://nodejs.org/)

### Mac OSX
These are detailed instructions for setting up the prerequisites on OSX.
Grab [Homebrew](http://brew.sh/) as a nifty package manager for OSX.
We’ll move these into a convenient shell script once we get a few volunteers to test these steps out.

#### Postgres

```
$ brew install postgres

$ createdb open_ballot

$ psql -d open_ballot -c "CREATE USER postgres with password 'postgres';"

$ psql -d open_ballot -f data/open_ballot.sql
```

#### Virtualenv

```
$ sudo easy_install pip

$ pip install virtualenv

$ virtualenv venv
```

Your virtualenv is not permanent. If you close your shell you’ll need to re-activate it:

```
$ source venv/bin/activate
```

Getting Started
---------------
Once you’ve got your prereqs and your virtualenv active, you can run these commands:

```
$ pip install -r requirements.txt

$ npm install

$ export PATH=./node_modules/.bin:$PATH # You’ll need to do this everytime you open your shell
#OR add it to your virtualenv's activate script

$ pip install -e /path/to/this/project

$ python setup.py develop

$ initialize_open_ballot_db development.ini

$ npm test

$ pserve development.ini
```

Yay! Looking forward to your pull requests :)
