---
authors:
- jesse_szwedko
date: '2018-02-05'
published: true
title: Code for San Francisco Site Relaunch
image: return-to-jekyll.jpg
image_alt: The return to Jekyll
description: The return to Jekyll
---

If you are reading this post on [codeforsanfrancisco.org](codeforsanfrancisco.org), you may have noticed that it looks
a bit different than it has for the past two years. For the curious, this post explains why and how we've migrated from
the brigade-centric content management system (CMS), [BrigadeHub](https://brigadehub.github.io/), back to a static site
generator, [Jekyll](https://jekyllrb.com/) hosted, for now, on [Github Pages](https://pages.github.com/).

# The end of an era

[With BrigadeHub being retired late last year](https://brigadehub.github.io/), we needed to find a path forward for
hosting our site that would allow us to continue to make the changes we wanted to better convey to the world who we are
and what we do. Our primary desires were to:

* Create additional static content describing the organization
* Create additional content for members such as an index of resources
* Have more control over the way events are displayed to make content, agendas and presentations, from each more
  discoverable
* Create an index for our newly formed [open leadership councils]({{ "/about/leadership-council" | prepend: site.baseurl }})

But we didn't want to lose the raison d'être of BrigadeHub, namely, allowing non-technical users to edit content easily.

# The path forward

Starting with our [first leadership
council](https://docs.google.com/document/d/1dxn8MyPvPwPOgGe_wp_OI-3pJUu5kAvPiMclJszIZxo/edit#heading=h.4pnt8xk97gf3) in
October, it was decided that we would look at the current state of [static site generators](https://www.staticgen.com/)
and [headless CMSs](https://headlesscms.org/about/) to see if they could fit our needs. We felt that the static site
generators would give us a simple to maintain architucture and that the proliferation of headless CMSs would allow us to
maintain an interface for allowing non-technical users to help keep content on the site up-to-date.

We defined our goals as:

* Should be editable by non-technical users
* Should be simple in architecture to allow developers coming to the project to quickly contribute
* Should be extensible to allow things like the project matching app to be overlaid
* Should be open-source and free or cheap

We started by [evaluating static site
generators](https://docs.google.com/document/d/1-biDkKqycqT0l0i-i4cvN3U0KstvnLBM6Sy6Yet7jGI/edit?ts=5a7b4479),
eventually settling on [Jekyll](https://jekyllrb.com/) as:

* This is what we [previously used for codeforsanfrancisco.org](https://github.com/sfbrigade/sfbrigade.github.io)
* It is the one of the most popular static site generators meaning it has a well developed ecosystem and is a common
  target for headless CMSs

In advance of our [February project demo night]({{ "/events/2018-02-07-project-demo-night" | prepend: site.baseurl }})
we officially launched the beta of the site to start collecting feedback.

## Next steps

Now that we have a live beta of the website, our next steps are:

* collecting [ideas and issues](https://github.com/sfbrigade/codeforsanfrancisco.org/issues)
* work with the [UX research group](https://github.com/sfbrigade/research-group) to do some user research and ensure the
  site is meeting our organizational and member goals
* evaluating headless CMSs to identify which will best suit our goal of allowing non-technical users to edit
  content

# Getting involved

Excited about this path forward and want to contribute? Or do you have questions, feedback or concerns? Drop into
[#website](https://sfbrigade.slack.com/app_redirect?channel=website) on our Slack (if you aren't on Slack, you can
join via [c4sf.me/slack](http://c4sf.me/slack)) or drop us a line at
[hello@codeforsanfrancisco.org](mailto:hello@codeforsanfrancisco.org).

If you want to be involved in the organization of the brigade and decisions like this? Drop by our next monthly [open
leadership councils]({{ "/about/leadership-council" | prepend: site.baseurl }}) on February 21st or join us in
[#brigade](https://sfbrigade.slack.com/app_redirect?channel=brigade) on Slack.

# Special thanks

I want to give special thanks to [Oz Haven](https://therebelrobot.com/) for his tireless efforts building and project
managing BrigadeHub. We would not be here today without his vision for expanding the the ability for brigade members to
contribute and curate content on our site. While BrigadeHub has been retired, this vision will carry on through our
work.

Also thank you to [Jason Lally](http://jasonlally.com/) for heavily contributing to this discussion and for the
migration of projects to the new site.

Lastly, thank you to [ChiHackNight](https://chihacknight.org/) for providing the initial template and site design which
we shamelessly replicated.
