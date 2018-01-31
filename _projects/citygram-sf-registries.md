---
  title: "citygram-sf-registries"
  blurb: "All of the ETL scripts for Citygram SF"
  skills_needed: []
  repos: 
    - "https://github.com/sfbrigade/citygram-sf-registries"
  app_link: "https://citygram-sf-registries.herokuapp.com/"
  license: "MIT"
  project_status: "proposed"
  project_lead: null
  project_members: null
  image_path: "http://i.imgur.com/2lHqtJ7.png"
  active: false
  tags: []
---
citygram-sf-registries
======================

All of the ETL scripts for Citygram SF

## Implemented Endpoints

All active endpoints can be seen at the [root (/)](https://citygram-sf-registries.herokuapp.com/) endpoint of the API.

* [/tree-planting](https://citygram-sf-registries.herokuapp.com/tree-planting)\* - from [sfdata.gov](https://data.sfgov.org/City-Infrastructure/Street-Tree-List/tkzw-k3nq)
* [/tow-away-zones](https://citygram-sf-registries.herokuapp.com/tow-away-zones)\* - from [sfdata.gov](https://data.sfgov.org/Transportation/SFMTA-Enforced-Temporary-Tow-Zones/cqn5-muyy)
* [/street-use-permits](https://citygram-sf-registries.herokuapp.com/street-use-permits) - from [sfdata.gov](http://data.sfgov.org/resource/b6tj-gt35)
* [/food-truck-permits](https://citygram-sf-registries.herokuapp.com/food-truck-permits) - from [sfdata.gov](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat)
* [/new-business-locations](https://citygram-sf-registries.herokuapp.com/new-business-locations) - from [sfdata.gov](https://data.sfgov.org/Economy-and-Community/Open-Business-Locations-San-Francisco/g8m3-pdis)
* [/crime-incidents](https://citygram-sf-registries.herokuapp.com/crime-incidents) - from [sfdata.gov](http://data.sfgov.org/resource/tmnf-yvry)
* [/eviction-notices](https://citygram-sf-registries.herokuapp.com/eviction-notices) - from [data.sfgov.org](https://data.sfgov.org/Housing-and-Buildings/Eviction-Notices/5cei-gny5)

**Technical note:** The endpoints with the \* above are written in the style discussed in the [getting started guide](http://bit.ly/citygramsf). The others have been designed to be their own class (there is still work to do here).  Either method works fine.


## TODO

### General

 * Write up how the class-based style works.
 * Add more endpoints...

### Tow-away

 * data does not include lat/lon, but instead has start/stop street
 numbers and a corresponding street.  We need to geocode this.

### Tree-planting

 * title could be nicer (some trees include species).
