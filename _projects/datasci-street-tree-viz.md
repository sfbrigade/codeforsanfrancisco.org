---
  title: "datasci-street-tree-viz"
  blurb: "Visualization of SF Street Tree Data"
  skills_needed: []
  repos: 
    - "https://github.com/sfbrigade/datasci-street-tree-viz"
  app_link: "https://github.com/sfbrigade/datasci-street-tree-viz"
  license: "MIT"
  project_status: "proposed"
  project_lead: null
  project_members: null
  image_path: "http://i.imgur.com/2lHqtJ7.png"
  active: false
  tags: []
---
# Street Tree Visualization

Visualization of [SF Street Tree Data](https://dev.socrata.com/foundry/data.sfgov.org/2zah-tuvt)

This is an exploritory piece for future work with [Friends of the Urban Forest](http://www.fuf.net/).

Part of the Data Science Group

## Setup
- Python 2.7
- Setup [virtualenv](https://virtualenv.pypa.io/en/stable/)
- Run `pip install -r requirements.txt`

## Ideas
- Map locations
  - Show which ones FuF help with
  - Show density
  - Organize by type
- Planting dates

## Data Questions
- What is `SiteOrder`? Number if multiple trees present
- What is `DBH`? Depth, height
- How is the `PlotSize` designated? All sorts of units and input schemas
- What are `XCoord` and `YCoord` based on? Cal coordinate system
