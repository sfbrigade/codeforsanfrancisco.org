---
  title: "ballot_initiatives"
  blurb: "A new project."
  skills_needed: []
  repos: 
    - "https://github.com/sfbrigade/ballot_initiatives"
  app_link: "https://github.com/sfbrigade/ballot_initiatives"
  license: "MIT"
  project_status: "proposed"
  project_lead: null
  project_members: null
  image_path: "http://i.imgur.com/2lHqtJ7.png"
  active: false
  tags: []
---

## This is an app for tracking ballot initiatives in San Francisco

#### Install
1) Install Rails and Bundler if you don't already have them
```
gem install rails
gem install bundler
```

2) Clone this repo
```
git clone https://github.com/sfbrigade/ballot_initiatives.git
```

4) Install required gems
```
cd ballot_initiative
bundle install
```

5) Migrate your database
```
rake db:migrate
````

6) Start your rails server
```
rails s
```

7) View your app at http://localhost:3000


#### Data Sources
- 2012 Election, San Francisco County, CA Propositions: http://www.smartvoter.org/2012/11/06/ca/sf/prop/
- SF Ethics Commission | 2012 Election, Ballot Measures: http://www.sfethics.org/ethics/2012/09/ballot-measures-dashboard-november-6-2012-election.html
- SF Ethics Commission | Campaign Consultants - Research and Filings: http://www.sfethics.org/ethics/2009/05/campaign-consultants.html
- City & County of SF | Nov. 2013 Local Ballot Measure Status: http://www.sfgov2.org/index.aspx?page=2969
- SF Public Library | Historical San Francisco Ballot Propositions Database: http://sfpl.org/index.php?pg=2000027201&PropTitle=&Description=&PropLetter=&Month=&Year=&submit=Search
- SF Data | Nov 2012 Ballot Measures - Independent Expenditures: https://data.sfgov.org/Ethics/Ballot-Measures-Independent-Expenditures-November-/4zbw-xuig
- SF Data | List of Historical Ballot Measures: https://data.sfgov.org/Other/List-of-Historical-Ballot-Measures/xzie-ixjw
