---
  title: "Brigadehub"
  blurb: "Data portal and CMS for brigades"
  skills_needed: 
    - "MongoDB"
    - "Jade/pug"
    - "APIs"
    - "NPM"
    - "node.js"
  repos: 
    - "https://github.com/brigadehub/brigadehub"
  app_link: "https://brigadehub.github.io"
  license: "MIT"
  project_status: "beta"
  project_lead: null
  project_members: null
  image_path: "https://cdn.rawgit.com/brigadehub/brigadehub/cc51c9ad/assets/rasterized/logo-banner-color-white.png"
  active: false
  tags: 
    - "Infrastructure"
    - "CMS"
    - "brigades"
    - "leadership"
    - "admin"
    - "website"
    - "analytics"
---
<h1 id="brigadehub">Brigadehub</h1>
<h3 id="in-a-nutshell">In a nutshell</h3>
<p>BrigadeHub is an <strong>beta</strong> stage data portal for volunteer coding organizations. While being built for Code for America Brigades, it can be be used for any project-based coding organization. It's being built to consolidate the efforts of maintaining a brigade's information into a single location, to distribute the task of content creation across the various non-technical brigade roles, and to enhance the experience of both members and admins of these unique organizations.</p>
<p>For a complete top-down view of the roadmap, take a look at our active <strong><em><a href="https://github.com/brigadehub/brigadehub/wiki/Roadmap">Roadmap Wiki</a></em></strong> (currently being worked on).</p>
<p>In short, BrigadeHub is designed to meet some very specific goals:</p>
<ul>
<li>Provide out-of-the-box utilities for organization admins:
<ul>
<li>Public facing website, with contact page, blog, project profiles and more</li>
<li>Admin dashboard</li>
<li>Robust content management permissioning and distribution</li>
</ul>
</li>
<li>Be easy to install and upkeep. You shouldn't have to dedicate a team just for your website anymore, nor should you need to know how to code to update your site.</li>
<li>Be modular, extensible, and hackable. Brigadehub Core provides a simple REST API for minimal deployment if you already have your infrastructure in place.</li>
<li>Allow brigades to communicate with each other quickly and effectively</li>
</ul>
<h3 id="ways-to-use">Ways to use</h3>
<p>There are three different ways of interacting with/using Brigadehub:</p>
<ul>
<li><strong>Suite</strong>: out of the box solution, best if you have no current site solution and don't want to deal with any coding. Swap out themes as you like with community-built solutions.</li>
<li><strong>Admin Gateway</strong>: Minimal API with a GUI admin gateway, best if you already have a website and want a way of dynamically generating the content of it. You'll need to read up on the Core API to tie it into your frontend, but once deployed, the data can be maintained by non-coders.</li>
<li><strong>Mini</strong>: This is just a REST API interface. Best if you already have an interface built out and just want to leverage the dataset of Brigadehub.</li>
</ul>
<p>Depending on the needs of your organization, you'll want to decide which will work best for you.</p>
<h4 id="suite">Suite</h4>
<p><strong>Brigadehub Suite</strong> is the flagship install of Brigadehub, and is more or less a <strong><em>brigade-in-a-box</em></strong>. It installs three components: <strong>Core</strong>, <strong>Admin Theme</strong>, and <strong>Public Theme</strong>. It's deployed in such a way that you should never <em>need</em> to touch the code, but if you <em>want</em> to, it's a simple matter. It provides Admin tools to manage your brigade information, and a slick frontend to display the info you're managing. Your frontend developers can dynamically pull the data about your brigade via the Core API if they have external tools that need the same data. And you can rest assured that we'll be working on patches and updates over time to make this the most secure and stable platform ever.</p>
<h6 id="production-install">Production Install</h6>
<details><summary><img src="http://saasiter.com/img/services/heroku.png" height="25" /> Heroku (click to open)</summary><p>
Heroku sports this handy one-click-install feature, which will handle most of the configuration for you. Base the install off [brigadehub/brigadehub](https://github.com/brigadehub/brigadehub), and you're good to go (the button below does that ⬇)
<p><a href="https://dashboard.heroku.com/new?template=https%3A%2F%2Fgithub.com%2Fbrigadehub%2Fbrigadehub%2Ftree%2Fmaster"><img src="https://www.herokucdn.com/deploy/button.svg" alt="Brigadehub Suite Heroku Install"></a></p>
</p></details><br/>
<details><summary><img src="https://pbs.twimg.com/profile_images/378800000124779041/fbbb494a7eef5f9278c6967b6072ca3e_normal.png" height="25" /> Docker (click to open)</summary><p>
***Pre-requisites***
<ul>
<li><a href="https://docs.docker.com/engine/installation/">Docker Engine</a></li>
<li>A running mongo instance, via docker or otherwise</li>
</ul>
<p><strong><em>Installation and Running</em></strong></p>
<pre><code class="language-bash">docker pull brigadehub/suite
docker run -d --expose=8080:desiredport -e MONGODB='mongodb://location.of.mongo:27017/brigadehub-suite' -e PORT=desiredport brigadehub/suite
</code></pre>
</p></details><br/>
<details><summary><img src="https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png" height="25" /> NPM CLI (click to open)</summary><p>
***Pre-requisites***
<ul>
<li><a href="https://nodejs.org/en/">Node 6+</a></li>
<li>A running mongo instance</li>
</ul>
<p><strong><em>Installation and Running</em></strong></p>
<pre><code class="language-bash">npm install -g brigadehub
PORT=desiredport MONGODB_URI=mongodb://location.of.mongo:27017/brigadehub-suite brigadehub-suite
</code></pre>
</p></details><br/>
<details><summary><img src="http://lepbase.org/wp-content/themes/lepbase-dot-org/images/code-icon.png" height="25" /> Source (click to open)</summary><p>
***Pre-requisites***
<ul>
<li>Git</li>
<li><a href="https://nodejs.org/en/">Node 6+</a></li>
<li>A running mongo instance</li>
</ul>
<p><strong><em>Installation and Running</em></strong></p>
<pre><code class="language-bash">git clone https://github.com/brigadehub/brigadehub
cd brigadehub
make install
PORT=desiredport MONGODB_URI=mongodb://location.of.mongo:27017/brigadehub-suite make start
</code></pre>
</p></details>
<h6 id="development-install">Development Install</h6>
<details><summary><img src="http://lepbase.org/wp-content/themes/lepbase-dot-org/images/code-icon.png" height="25" /> Source (click to open)</summary><p>
To work on Brigadehub Suite as a developer, you need to clone and link internally all four portions of the suite. Fork all 4 repos into your desired organization or account, and work from those, making sure to update from upstream periodically.
<p><strong><em>Pre-requisites</em></strong></p>
<ul>
<li>Git</li>
<li><a href="https://nodejs.org/en/">Node 6+</a></li>
<li>A running mongo instance</li>
</ul>
<p><strong><em>Installation and Running</em></strong></p>
<pre><code class="language-bash">git clone https://github.com/brigadehub/brigadehub
git clone https://github.com/brigadehub/core
git clone https://github.com/brigadehub/theme-public-c4sf
git clone https://github.com/brigadehub/theme-admin-c4sf
</code></pre>
<p>In separate terminals, run the following:</p>
<pre><code class="language-bash">cd theme-public-c4sf
make install
make link
</code></pre>
<pre><code class="language-bash">cd theme-admin-c4sf
make install
make link
</code></pre>
<pre><code class="language-bash">cd core
make install
make link
</code></pre>
<pre><code class="language-bash">cd brigadehub
make install
make link
MONGODB_URI=mongodb://location.of.mongo:27017/brigadehub-suite make start/develop
</code></pre>
<p>Any changes made in core, theme-public-c4sf, and theme-admin-c4sf will restart the server in brigadehub, and allow you to preview the changes. When you're done with your changes, make sure the tests pass via <code>make test</code>, and create a pull request from the appropriate repo.</p>
</p></details>
<h4 id="admin-gateway">Admin Gateway</h4>
<p><strong>Brigadehub Admin Gateway</strong> installs two components: <strong>Core</strong> and <strong>Admin Theme</strong>. Your frontend developers can dynamically pull the data about your brigade via the Core API, but you as an administrator should never need to touch the code. This is a good option if you already have a site and want to augment it with brigadehub data.</p>
<h6 id="production-install">Production Install</h6>
<details><summary><img src="http://saasiter.com/img/services/heroku.png" height="25" /> Heroku (click to open)</summary><p>
Heroku sports this handy one-click-install feature, which will handle most of the configuration for you. Base the install off [brigadehub/admin-gateway](https://github.com/brigadehub/admin-gateway), and you're good to go (the button below does that ⬇)
<p><a href="https://dashboard.heroku.com/new?template=https%3A%2F%2Fgithub.com%2Fbrigadehub%2Fadmin-gateway%2Ftree%2Fmaster"><img src="https://www.herokucdn.com/deploy/button.svg" alt="Brigadehub Admin Gateway Heroku Install"></a></p>
</p></details><br/>
<details><summary><img src="https://pbs.twimg.com/profile_images/378800000124779041/fbbb494a7eef5f9278c6967b6072ca3e_normal.png" height="25" /> Docker (click to open)</summary><p>
***Pre-requisites***
<ul>
<li><a href="https://docs.docker.com/engine/installation/">Docker Engine</a></li>
<li>A running mongo instance, via docker or otherwise</li>
</ul>
<p><strong><em>Installation and Running</em></strong></p>
<pre><code class="language-bash">docker pull brigadehub/admin-gateway
docker run -d --expose=8080:desiredport -e MONGODB='mongodb://location.of.mongo:27017/brigadehub-admin-gateway' -e PORT=desiredport brigadehub/admin-gateway
</code></pre>
</p></details><br/>
<details><summary><img src="https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png" height="25" /> NPM CLI (click to open)</summary><p>
***Pre-requisites***
<ul>
<li><a href="https://nodejs.org/en/">Node 6+</a></li>
<li>A running mongo instance</li>
</ul>
<p><strong><em>Installation and Running</em></strong></p>
<pre><code class="language-bash">npm install -g brigadehub-admin-gateway
brigadehub-admin-gateway --port desiredport --mongodb mongodb://location.of.mongo:27017/brigadehub-admin-gateway
</code></pre>
</p></details><br/>
<details><summary><img src="http://lepbase.org/wp-content/themes/lepbase-dot-org/images/code-icon.png" height="25" /> Source (click to open)</summary><p>
***Pre-requisites***
<ul>
<li>Git</li>
<li><a href="https://nodejs.org/en/">Node 6+</a></li>
<li>A running mongo instance</li>
</ul>
<p><strong><em>Installation and Running</em></strong></p>
<pre><code class="language-bash">git clone https://github.com/brigadehub/admin-gateway
cd admin-gateway
make install
PORT=desiredport MONGODB_URI=mongodb://location.of.mongo:27017/brigadehub-admin-gateway make start
</code></pre>
</p></details>
<h6 id="development-install">Development Install</h6>
<details><summary><img src="http://lepbase.org/wp-content/themes/lepbase-dot-org/images/code-icon.png" height="25" /> Source (click to open)</summary><p>
To work on Brigadehub Admin Gateway as a developer, you need to clone and link internally all three portions of the install. Fork all 3 repos into your desired organization or account, and work from those, making sure to update from upstream periodically.
<p><strong><em>Pre-requisites</em></strong></p>
<ul>
<li>Git</li>
<li><a href="https://nodejs.org/en/">Node 6+</a></li>
<li>A running mongo instance</li>
</ul>
<p><strong><em>Installation and Running</em></strong></p>
<pre><code class="language-bash">git clone https://github.com/brigadehub/admin-gateway
git clone https://github.com/brigadehub/core
git clone https://github.com/brigadehub/theme-admin-c4sf
</code></pre>
<p>In separate terminals, run the following:</p>
<pre><code class="language-bash">cd theme-admin-c4sf
make install
make link
</code></pre>
<pre><code class="language-bash">cd core
make install
make link
</code></pre>
<pre><code class="language-bash">cd admin-gateway
make install
make link
MONGODB_URI=mongodb://location.of.mongo:27017/brigadehub-admin-gateway make start/develop
</code></pre>
<p>Any changes made in core and theme-admin-c4sf will restart the server in admin-gateway, and allow you to preview the changes. When you're done with your changes, make sure the tests pass via <code>make test</code>, and create a pull request from the appropriate repo.</p>
</p></details>
<h4 id="mini">Mini</h4>
<p><strong>Brigadehub Mini</strong> installs only one component: <strong>Core</strong>. No Frontends will be deployed with this install, exposing only the authentication routes and REST APIs. This is an advanced setting, and should be only done if you already have a site and admin portal to manage on your own. All features are accessible via REST API (GraphQL to come soon)</p>
<h6 id="production-install">Production Install</h6>
<details><summary><img src="http://saasiter.com/img/services/heroku.png" height="25" /> Heroku (click to open)</summary><p>
Heroku sports this handy one-click-install feature, which will handle most of the configuration for you. Base the install off [brigadehub/mini](https://github.com/brigadehub/mini), and you're good to go (the button below does that ⬇)
<p><a href="https://dashboard.heroku.com/new?template=https%3A%2F%2Fgithub.com%2Fbrigadehub%2Fmini%2Ftree%2Fmaster"><img src="https://www.herokucdn.com/deploy/button.svg" alt="Brigadehub Admin Gateway Heroku Install"></a></p>
</p></details><br/>
<details><summary><img src="https://pbs.twimg.com/profile_images/378800000124779041/fbbb494a7eef5f9278c6967b6072ca3e_normal.png" height="25" /> Docker (click to open)</summary><p>
***Pre-requisites***
<ul>
<li><a href="https://docs.docker.com/engine/installation/">Docker Engine</a></li>
<li>A running mongo instance, via docker or otherwise</li>
</ul>
<p><strong><em>Installation and Running</em></strong></p>
<pre><code class="language-bash">docker pull brigadehub/mini
docker run -d --expose=8080:desiredport -e MONGODB='mongodb://location.of.mongo:27017/brigadehub-mini' -e PORT=desiredport brigadehub/mini
</code></pre>
</p></details><br/>
<details><summary><img src="https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png" height="25" /> NPM CLI (click to open)</summary><p>
***Pre-requisites***
<ul>
<li><a href="https://nodejs.org/en/">Node 6+</a></li>
<li>A running mongo instance</li>
</ul>
<p><strong><em>Installation and Running</em></strong></p>
<pre><code class="language-bash">npm install -g brigadehub-mini
brigadehub-mini --port desiredport --mongodb mongodb://location.of.mongo:27017/brigadehub-mini
</code></pre>
</p></details><br/>
<details><summary><img src="http://lepbase.org/wp-content/themes/lepbase-dot-org/images/code-icon.png" height="25" /> Source (click to open)</summary><p>
***Pre-requisites***
<ul>
<li>Git</li>
<li><a href="https://nodejs.org/en/">Node 6+</a></li>
<li>A running mongo instance</li>
</ul>
<p><strong><em>Installation and Running</em></strong></p>
<pre><code class="language-bash">git clone https://github.com/brigadehub/mini
cd mini
make install
PORT=desiredport MONGODB_URI=mongodb://location.of.mongo:27017/brigadehub-mini make start
</code></pre>
</p></details>
<h6 id="development-install">Development Install</h6>
<details><summary><img src="http://lepbase.org/wp-content/themes/lepbase-dot-org/images/code-icon.png" height="25" /> Source (click to open)</summary><p>
To work on Brigadehub Mini as a developer, you need to clone and link internally both portions of the install. Fork both repos into your desired organization or account, and work from those, making sure to update from upstream periodically.
<p><strong><em>Pre-requisites</em></strong></p>
<ul>
<li>Git</li>
<li><a href="https://nodejs.org/en/">Node 6+</a></li>
<li>A running mongo instance</li>
</ul>
<p><strong><em>Installation and Running</em></strong></p>
<pre><code class="language-bash">git clone https://github.com/brigadehub/mini
git clone https://github.com/brigadehub/theme-admin-c4sf
</code></pre>
<p>In separate terminals, run the following:</p>
<pre><code class="language-bash">cd core
make install
make link
</code></pre>
<pre><code class="language-bash">cd mini
make install
make link
MONGODB_URI=mongodb://location.of.mongo:27017/brigadehub-mini make start/develop
</code></pre>
<p>Any changes made in core and theme-admin-c4sf will restart the server in mini, and allow you to preview the changes. When you're done with your changes, make sure the tests pass via <code>make test</code>, and create a pull request from the appropriate repo.</p>
</p></details>
<h4 id="usage"><a href="#usage">Usage</a></h4>
<h5 id="core-api"><a href="#core-api">Core API</a></h5>
<p><em>Core API Documentation is being worked on</em></p>
<h5 id="admin-theme"><a href="#admin-theme">Admin Theme</a></h5>
<p><em>Admin Theme Documentation is being worked on</em></p>
<h5 id="public-theme"><a href="#public-theme">Public Theme</a></h5>
<p><em>Public Theme Documentation is being worked on</em></p>
<h4 id="troubleshooting"><a href="#troubleshooting">Troubleshooting</a></h4>
<p><em>If you come upon issues while installing or using Brigadehub (any install), open an issue here in Github. If it occurs enough times, it'll make it here into Troubleshooting</em></p>
<h4 id="contributing"><a href="#contributing">Contributing</a></h4>
<p>Brigadehub works from a fork/PR methodology. If you would like to contribute, check the github issues and see if someone is working on the issue already. If not, comment in the issue that you are working on it (or create a new issue if it's not already there), then fork the repo and submit a PR when your work is complete. Claimed issues without update on the issue itself or via linked PR after 30 days will be unassigned and reopened for others to work on.</p>
<h4 id="changelog"><a href="#changelog">Changelog</a></h4>
<p>The changelog for Brigadehub (and each of its components) resides in the appropriate repos <strong><em>Releases</em></strong> tab.</p>
<h4 id="contributors"><a href="#contributors">Contributors</a></h4>
<p>Brigadehub is a Code for San Francisco Infrastructure project, and has been brought about by the generous work of the following individuals. If you make a contribution to Brigadehub (e.g. when opening a PR), feel free to add yourself to this list in addition to your changes. If you are contributing in a non-code fashion, open an issue to have your name added.</p>
<ul>
<li>Oz Haven - Project Lead - (<a href="https://github.com/therebelrobot">@therebelrobot</a>) &lt;<code>github``@``therebelrobot.com</code>&gt;</li>
<li>Todd Seller - Project Co-Lead - <a href="https://github.com/toddseller">@toddseller</a></li>
<li>Aaron Schachter <a href="https://github.com/aaronschachter">@aaronschachter</a></li>
<li>Andrew Bacon <a href="https://github.com/andrewmbacon">@andrewmbacon</a></li>
<li>David Carvel <a href="https://github.com/davidcarvel">@davidcarvel</a></li>
<li>David Hincapie <a href="https://github.com/davidhincapie">@davidhincapie</a></li>
<li>Deborah <a href="https://github.com/deborahahn">@deborahahn</a></li>
<li>Debbie Espino <a href="https://github.com/despino">@despino</a></li>
<li>Gisela <a href="https://github.com/GiselaKay">@GiselaKay</a></li>
<li>Leo Lau <a href="https://github.com/hawflau">@hawflau</a></li>
<li>Jason Durant <a href="https://github.com/jaydurant">@jaydurant</a></li>
<li>John Naulty Jr. <a href="https://github.com/jnaulty">@jnaulty</a></li>
<li>John Gluck <a href="https://github.com/johngluck65">@johngluck65</a></li>
<li>Jesse Szwedko [@jszwedko Owner](https://github.com/jszwedko Owner)</li>
<li>Jessica Parsons <a href="https://github.com/verythorough">@verythorough</a></li>
<li>Judy5000 [@Judy5000 Owner](https://github.com/Judy5000 Owner)</li>
<li>Justin <a href="https://github.com/Juxtaposeidon">@Juxtaposeidon</a></li>
<li>kanagha <a href="https://github.com/kanagha">@kanagha</a></li>
<li>Kevin Litchfield <a href="https://github.com/kevinlitchfield">@kevinlitchfield</a></li>
<li>Maja Bogeski <a href="https://github.com/majabogeski">@majabogeski</a></li>
<li>Neri J. Jakubowski Junior <a href="https://github.com/nerijunior">@nerijunior</a></li>
<li>Patrick Connolly <a href="https://github.com/patcon">@patcon</a></li>
<li>Phips Peter <a href="https://github.com/pspeter3">@pspeter3</a></li>
<li><a href="https://github.com/rogeliobonilla">@rogeliobonilla</a></li>
<li>Tracy <a href="https://github.com/spiffysparrow">@spiffysparrow</a></li>
<li><a href="https://github.com/Thithi32">@Thithi32</a></li>
<li><a href="https://github.com/whatdoublechen">@whatdoublechen</a></li>
<li><a href="https://github.com/wrendo">@wrendo</a></li>
</ul>
<h4 id="inspirations">Inspirations</h4>
<p>Similar projects have been conceived and implemented previously (<a href="https://github.com/CfABrigadePhiladelphia/laddr">Laddr</a>, <a href="https://github.com/codeforatlanta/connector">Connector</a>, <a href="https://github.com/chimecms/chime">Chime</a>, etc.), but for one reason or another didn't meet the needs of Code for San Francisco and many other brigades. Brigadehub hopes to bridge those infrastructure gaps.</p>
<h4 id="additional-resources"><a href="#resources">Additional Resources</a></h4>
<p>Have additional resources that could benefit those using Brigadehub? Open a Github Issue and let us know!</p>
<h4 id="license"><a href="#license">License</a></h4>
<p><a href="https://tldrlegal.com/license/mit-license">MIT</a></p>
<p>The MIT License (MIT)</p>
<p>Copyright (c) 2016-2017 Code for San Francisco</p>
<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the &quot;Software&quot;), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
<p>THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
