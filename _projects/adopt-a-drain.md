---
  title: "Adopt a Drain"
  blurb: "Crowd-sourced cleaning of storm drains after it rains."
  skills_needed: 
    - "rails"
    - "javascript"
  repos: 
    - "https://github.com/sfbrigade/adopt-a-drain"
  app_link: "http://adoptadrain.sfwater.org/"
  license: "MIT"
  project_status: "live"
  project_lead: null
  project_members: null
  image_path: "http://i.imgur.com/Dwec8rP.png"
  active: true
  tags: 
    - "water"
    - "drains"
    - "storms"
    - "flooding"
---
<h1 id="adopt-a-drain">Adopt-a-Drain</h1>
<p><a href="http://travis-ci.org/sfbrigade/adopt-a-drain"><img src="http://img.shields.io/travis/sfbrigade/adopt-a-drain.svg" alt="Build Status"></a>
<a href="https://gemnasium.com/sfbrigade/adopt-a-drain"><img src="http://img.shields.io/gemnasium/sfbrigade/adopt-a-drain.svg" alt="Dependency Status"></a>
<a href="https://coveralls.io/r/sfbrigade/adopt-a-drain"><img src="http://img.shields.io/coveralls/sfbrigade/adopt-a-drain.svg" alt="Coverage Status"></a></p>
<p>Claim responsibility for cleaning out a storm drain after it rains.</p>
<h2 id="screenshot">Screenshot</h2>
<p><img src="https://cdn.rawgit.com/sfbrigade/adopt-a-drain/production/adopt.png" alt="Adopt-a-Drain" title="Adopt-a-Drain"></p>
<h2 id="demo">Demo</h2>
<p>You can see a running version of the application at
<a href="http://adopt-a-drain.herokuapp.com/">http://adopt-a-drain.herokuapp.com/</a>.</p>
<h2 id="installation">Installation</h2>
<p>This application requires <a href="http://www.postgresql.org/">Postgres</a> to be installed</p>
<pre><code>git clone git://github.com/sfbrigade/adopt-a-drain.git
cd adopt-a-drain
bundle install
<p>bundle exec rake db:create
bundle exec rake db:schema:load
</code></pre></p>
<p>See the <a href="https://github.com/sfbrigade/adopt-a-drain/wiki/Windows-Development-Environment">wiki</a> for a guide on how to install this application on Windows.</p>
<h2 id="usage">Usage</h2>
<pre><code>rails server
</code></pre>
<h2 id="seed-data">Seed Data</h2>
<pre><code>bundle exec rake data:load_drains
</code></pre>
<h2 id="deploying-to-heroku">Deploying to Heroku</h2>
<p>A successful deployment to Heroku requires a few setup steps:</p>
<ol>
<li>
<p>Generate a new secret token:</p>
<pre><code>rake secret
</code></pre>
</li>
<li>
<p>Set the token on Heroku:</p>
<pre><code>heroku config:set SECRET_TOKEN=the_token_you_generated
</code></pre>
</li>
<li>
<p><a href="https://devcenter.heroku.com/articles/rails3x-asset-pipeline-cedar">Precompile your assets</a></p>
<pre><code>RAILS_ENV=production bundle exec rake assets:precompile
<p>git add public/assets</p>
<p>git commit -m &quot;vendor compiled assets&quot;
</code></pre></p>
</li>
<li>
<p>Add a production database to config/database.yml</p>
</li>
<li>
<p>Seed the production db:</p>
<p><code>heroku run bundle exec rake db:seed</code></p>
</li>
</ol>
<p>Keep in mind that the Heroku free Postgres plan only allows up to 10,000 rows,
so if your city has more than 10,000 fire drains (or other thing to be
adopted), you will need to upgrade to the $9/month plan.</p>
<h3 id="google-analytics">Google Analytics</h3>
<p>If you have a Google Analytics account you want to use to track visits to your
deployment of this app, just set your ID and your domain name as environment
variables:</p>
<pre><code>heroku config:set GOOGLE_ANALYTICS_ID=your_id
heroku config:set GOOGLE_ANALYTICS_DOMAIN=your_domain_name
</code></pre>
<p>An example ID is <code>UA-12345678-9</code>, and an example domain is <code>adoptadrain.org</code>.</p>
<h2 id="contributing">Contributing</h2>
<p>In the spirit of <a href="http://www.fsf.org/licensing/essays/free-sw.html">free software</a>, <strong>everyone</strong> is encouraged to help
improve this project.</p>
<p>Here are some ways <em>you</em> can contribute:</p>
<ul>
<li>by using alpha, beta, and prerelease versions</li>
<li>by reporting bugs</li>
<li>by suggesting new features</li>
<li>by <a href="https://github.com/sfbrigade/adopt-a-drain/tree/master/config/locales">translating to a new language</a></li>
<li>by writing or editing documentation</li>
<li>by writing specifications</li>
<li>by writing code (<strong>no patch is too small</strong>: fix typos, add comments, clean up
inconsistent whitespace)</li>
<li>by refactoring code</li>
<li>by closing <a href="https://github.com/sfbrigade/adopt-a-drain/issues">issues</a></li>
<li>by reviewing patches</li>
<li><a href="https://secure.sfbrigade.org/page/contribute">financially</a></li>
</ul>
<h2 id="submitting-an-issue">Submitting an Issue</h2>
<p>We use the <a href="https://github.com/sfbrigade/adopt-a-drain/issues">GitHub issue tracker</a> to track bugs and features. Before
submitting a bug report or feature request, check to make sure it hasn't
already been submitted. When submitting a bug report, please include a <a href="https://gist.github.com/">Gist</a>
that includes a stack trace and any details that may be necessary to reproduce
the bug, including your gem version, Ruby version, and operating system.
Ideally, a bug report should include a pull request with failing specs.</p>
<h2 id="submitting-a-pull-request">Submitting a Pull Request</h2>
<ol>
<li><a href="http://help.github.com/fork-a-repo/">Fork the repository.</a></li>
<li><a href="http://learn.github.com/p/branching.html">Create a topic branch.</a></li>
<li>Add specs for your unimplemented feature or bug fix.</li>
<li>Run <code>bundle exec rake test</code>. If your specs pass, return to step 3.</li>
<li>Implement your feature or bug fix.</li>
<li>Run <code>bundle exec rake test</code>. If your specs fail, return to step 5.</li>
<li>Run <code>open coverage/index.html</code>. If your changes are not completely covered
by your tests, return to step 3.</li>
<li>Add, commit, and push your changes.</li>
<li><a href="http://help.github.com/send-pull-requests/">Submit a pull request.</a></li>
</ol>
<h2 id="supported-ruby-version">Supported Ruby Version</h2>
<p>This library aims to support and is <a href="http://travis-ci.org/sfbrigade/adopt-a-drain">tested against</a> Ruby version 2.2.2.</p>
<p>If something doesn't work on this version, it should be considered a bug.</p>
<p>This library may inadvertently work (or seem to work) on other Ruby
implementations, however support will only be provided for the version above.</p>
<p>If you would like this library to support another Ruby version, you may
volunteer to be a maintainer. Being a maintainer entails making sure all tests
run and pass on that implementation. When something breaks on your
implementation, you will be personally responsible for providing patches in a
timely fashion. If critical issues for a particular implementation exist at the
time of a major release, support for that Ruby version may be dropped.</p>
<h2 id="copyright">Copyright</h2>
<p>Copyright (c) 2015 Code for San Francisco. See <a href="https://github.com/sfbrigade/adopt-a-drain/blob/master/LICENSE.md">LICENSE.md</a> for details.</p>
