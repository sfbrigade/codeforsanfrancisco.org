---
  title: "Civic Radar"
  blurb: "Asynchronous alerting solution for journalists and civic activists"
  skills_needed: 
    - "REST APIs"
    - "python"
    - "nosql"
  repos: 
    - ""
  app_link: "http://jsk.stanford.edu/journalism-challenges/2016/how-can-we-keep-city-newsrooms-in-the-loop/"
  license: null
  project_status: "prototype"
  project_lead: null
  project_members: null
  image_path: null
  active: false
  tags: 
    - "asynchronous alerts"
    - "Splunk"
    - "REST API"
    - "data integration"
    - "nosql"
    - "python"
    - "json"
    - "csv"
    - "big data"
    - "socrata"
    - "SODA"
---
I'm Subbu Vincent. My interests are in helping people track their city without watching it. Research I did at the John S Knight fellowship at Stanford led to my conceiving of Civic Radar as an asynchronous alerting solution for journalists and civic activists, using open data and open documents. 
http://jsk.stanford.edu/journalism-challenges/2016/how-can-we-keep-city-newsrooms-in-the-loop/

For my data monitoring-and-alerting prototype, I am deliberately taking an off-the-shelf tool approach (with cloud options) to make it easier for non-technical people in newsrooms and non-profits to drop the barrier to adoption. Currently this is with Splunk.  My use-case newsroom partner for this is the [San Francisco Public Press.](http://sfpublicpress.org/) 

For polling the targeted data sets every night, some customisation in Splunk is needed, and little python code, but that is common for the whole city's datasets. From a technical configuration standpoint, once this is done the alerting solution can run on a cloud (hypothetical now, unfunded) with end-users across the city. Currently I am working with Splunk Enterprise installed on my laptop and on the Macs at SFPP's office.  

### Needs

I have setup Splunk's REST API input to poll the json API endpoints of several SFGov datasets. I currently need to write perhaps 10-20 lines of python code to implement a cursor - my polling loop each night has to pickup where it left off the previous poll. That way I will index only the updated records. I've been in touch with SFGov and Socrata folks to make sure I am calling the REST URL with the right system fields. 