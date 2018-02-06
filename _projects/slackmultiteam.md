---
  title: "SlackMultiTeam"
  blurb: "Allows Slack communication across different teams, effectively creating 'shared channels'"
  skills_needed: []
  repos: 
    - "https://github.com/sfbrigade/SlackMultiTeam"
  app_link: "https://github.com/sfbrigade/SlackMultiTeam"
  license: "MIT"
  project_status: "prototype"
  project_lead: null
  project_members: null
  image_path: "http://i.imgur.com/2lHqtJ7.png"
  active: false
  tags: 
    - "infrastructure"
    - "slack"
---
# SlackMultiTeam
Allows Slack communication across different teams, effectively creating 'shared channels'

Grab an API key from each 'Slack Team', and the channels you want to 'clone' (get ids here -> https://api.slack.com/methods/channels.list/test). Throw these into config.py.

Make sure you have the requests module and then run run.py
