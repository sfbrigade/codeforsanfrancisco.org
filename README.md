# Code for San Francisco's website

[Brigadehub](https://github.com/brigadehub/brigadehub), the current host of
[codeforsanfranciso.org](http://codeforsanfrancisco.org) is [retired](https://brigadehub.github.io/) we desire to find
a new long term solution to host the website. The current thought is to move back to using a static site generator,
[Jekyll](https://jekyllrb.com/). This repository is attempt at that. It is now live at
[codeforsanfrancisco.org](codeforsanfrancisco.org).

Heavily inspired by [Chi Hack Night's website](https://chihacknight.org/).

## Developing

* Install the version of Ruby specified in [.ruby-version](.ruby-version)
  * Usage of [rbenv](https://github.com/rbenv/rbenv) recommended
* Run `make`

[yarn](https://yarnpkg.com/lang/en/docs/install/) is used for managing external asset libraries (like Bootstrap, jQuery,
etc.).

If you add a new external resource, be sure to add lines to the relevant [`Makefile`](Makefile) target to copy
them into `css/vendor` and `js/vendor`.

## Scripts

Several scripts are included to facilitate synchronizing data to/from the site and external sources. Relevant scripts
are highlighted below:

### scripts/update-meetup

This script is used to update a Meetup.com event with the description and metadata specified in the corresponding
markdown document in the `_events/` collection. It should be run any time an event is updated. We would like to automate
this in the future.
