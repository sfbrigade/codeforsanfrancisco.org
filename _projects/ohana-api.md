---
  title: "ohana-api"
  blurb: "The open source API directory of community social services."
  skills_needed: []
  repos: 
    - "https://github.com/sfbrigade/ohana-api"
  app_link: "https://github.com/sfbrigade/ohana-api"
  license: "MIT"
  project_status: "proposed"
  project_lead: null
  project_members: null
  image_path: "http://i.imgur.com/2lHqtJ7.png"
  active: false
  tags: []
---
#Ohana API

[![Build Status](https://circleci.com/gh/sfbrigade/ohana-api.svg?style=svg)](https://circleci.com/gh/sfbrigade/ohana-api)

This is the API + Admin Interface portion of the [Ohana API] project,
an open source community resource platform developed by [@monfresh],
[@spara], and [@anselmbradford] during their Code for America Fellowship in 2013,
in partnership with San Mateo County's Human Services Agency.
Ohana makes it easy for communities to publish a database of social services,
and allows developers to build impactful applications
that serve underprivileged residents.

[Ohana API]: http://ohanapi.org
[@monfresh]: https://github.com/monfresh
[@spara]: https://github.com/spara
[@anselmbradford]: https://github.com/anselmbradford

Before we started working on the Ohana API,
the search interface that residents and social workers in San Mateo County
had access to was the Peninsula Library System's [CIP portal].
As a demonstration of the kind of applications
that can be built on top of the Ohana API,
we developed a [better search interface] - ([repo link])
that consumes the API via our [Ruby wrapper].

[CIP portal]: http://catalog.plsinfo.org:81/
[better search interface]: http://smc-connect.org
[repo link]: https://github.com/codeforamerica/ohana-web-search
[Ruby wrapper]: https://github.com/codeforamerica/ohanakapa

## Stack Overview

* Ruby version 2.1.1
* Rails version 4.1.4
* Postgres
* Testing Frameworks: RSpec, Factory Girl, Capybara

## Demo

You can see a running version of the different parts of the application here:

- **Developer portal**: <http://sf-ohana.herokuapp.com/>
- **API**: <http://ohana-api-demo.herokuapp.com/api>
- **Admin Interface**: <http://ohana-api-demo.herokuapp.com/admin>

If you'd like to play around in the application, see [db/seeds.rb][seeds]
for a list of usernames and passwords you can sign in with.

[seeds]: https://github.com/codeforamerica/ohana-api/blob/master/db/seeds.rb

## Current Status

We are happy to announce that this project has been awarded
a grant from the [Knight Foundation],
which means we get to keep working on it in 2014!
Our primary goals this year are: simplifying the installation process,
streamlining the code, reducing dependencies,
and preparing the project for broader installation by a variety
of organizations and governments.

[grant from the Knight Foundation]: http://www.knightfoundation.org/grants/201447979/

## Data Schema

If you would like to try out the current version of the project,
please read the Wiki article about [populating the Postgres DB from a JSON file].
That article documents the current schema and data dictionary,
but please note that this will be in flux as we are working
with various interested parties to define a [Human Services Data Specification].

[populating the Postgres DB from a JSON file]: https://github.com/codeforamerica/ohana-api/wiki/Populating-the-Postgres-database-from-a-JSON-file
[Human Services Data Specification]: https://github.com/codeforamerica/OpenReferral

## API documentation

<http://ohanapi.herokuapp.com/api/docs>

## Taxonomy

By default, this project uses the [Open Eligibility] taxonomy
to assign Services to Categories.
If you would like to use your own taxonomy,
feel free to update [this rake task] to create your own hierarchy or tree structure.
Then run `rake create_categories`.

[Open Eligibility]: http://openeligibility.org
[this rake task]: https://github.com/codeforamerica/ohana-api/blob/master/lib/tasks/oe.rake

The easiest way to assign categories to a service is to use the Admin interface.
Here's a screenshot:

![Editing categories in Ohana API Admin](https://github.com/codeforamerica/ohana-api/raw/master/categories-in-ohana-api-admin.png)

## Apps that are using the Ohana API

- [SMC-Connect](http://www.smc-connect.org)
- [GitHub repo for SMC-Connect](https://github.com/codeforamerica/human_services_finder)
- [Ohana API Admin site](https://github.com/codeforamerica/ohana-api-admin)
- [Ohana SMS](https://github.com/marks/ohana-sms)

## Deploying to Heroku

See the [Wiki](https://github.com/codeforamerica/ohana-api/wiki/How-to-deploy-the-Ohana-API-to-your-Heroku-account).

## Local Installation

Follow the instructions in [INSTALL.md][install].

[install]: https://github.com/codeforamerica/ohana-api/blob/master/INSTALL.md

## Running the tests

Run tests locally with this simple command:

    script/test

To see the actual tests, browse through the [spec directory].

[spec directory]: https://github.com/codeforamerica/ohana-api/tree/master/spec

## Contributing

We'd love to get your help developing this project!
Take a look at the [Contribution Document] to see how you can make a difference.

[Contribution Document]: https://github.com/codeforamerica/ohana-api/blob/master/CONTRIBUTING.md

## Supported Ruby Version

This library aims to support and is [tested against] Ruby version 2.1.1.

If something doesn't work on this version, it should be considered a bug.

This library may inadvertently work (or seem to work) on other Ruby implementations,
however support will only be provided for the version above.

If you would like this library to support another Ruby version,
you may volunteer to be a maintainer.
Being a maintainer entails making sure all tests run and pass on that implementation.
When something breaks on your implementation,
you will be personally responsible for providing patches in a timely fashion.
If critical issues for a particular implementation exist at the time of a major release,
support for that Ruby version may be dropped.

[tested against]: http://travis-ci.org/codeforamerica/ohana-api

## Copyright
Copyright (c) 2013 Code for America. See [LICENSE](https://github.com/codeforamerica/ohana-api/blob/master/LICENSE.md) for details.
