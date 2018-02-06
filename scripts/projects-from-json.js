#! /usr/bin/env node

const request = require('request').defaults({ gzip: true, json: true })
const fs = require('fs')
const YAML = require('json2yaml')

request('http://ix.io/ECu.json', (err, res, body) => {
  if (err) { return console.log(err) }
  body.forEach((record) => {
    let frontMatter = {
      title: record.name,
      blurb: record.description || '',
      skills_needed: record.needs || null,
      repos: [record.repository] || null,
      app_link: record.homepage || null,
      license: record.license || null,
      project_status: record.status || null,
      project_lead: null,
      project_members: null,
      image_path: record.bannerUrl || null,
      active: (record.active === true || record.active === 'on'),
      tags: record.keywords || null
    }
    file = YAML.stringify(frontMatter)
    file += '---\n'
    file += record.content
    let title = record.id.toLowerCase()
    fs.writeFile(`../_projects/${title}.md`, file, function(err) {
      if(err) {
          return console.log(err);
      }
  
      console.log("The file was saved!");
  }); 
  })
})