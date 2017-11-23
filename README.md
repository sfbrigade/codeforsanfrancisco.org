# Alpha for Code for San Francisco's website

[Brigadehub](https://github.com/brigadehub/brigadehub), the current host of
[codeforsanfranciso.org](http://codeforsanfrancisco.org) is [retired](https://brigadehub.github.io/) we desire to find
a new long term solution to host the website. The current thought is to move back to using a static site generator,
[Jekyll](https://jekyllrb.com/). This repository is attempt at that. When it is ready, it'll be hosted at
[alpha.codeforsanfrancisco.org](http://alpha.codeforsanfrancisco.org) for feedback.

Heavily inspired by [Chi Hack Night's website](https://chihacknight.org/).

## Developing

* Install the version of Ruby specified in [.ruby-version](.ruby-version)
  * Usage of [rbenv](https://github.com/rbenv/rbenv) recommended
* Run `bundle`
* `bundle exec jekyll serve`

[yarn](https://yarnpkg.com/lang/en/docs/install/) is used for managing external asset libraries (like Bootstrap, jQuery,
etc.). Please install and use this if you are adding a new external resource.
