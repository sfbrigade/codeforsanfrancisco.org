---
authors:
- allen_meyer
date: '2018-06-14'
published: true
image: "civic-innovation-group.jpg"
image_alt: Screenshot of Civic Innovation Group mapping tool
title: Data Mapping Tools for Brigades
description: Many organizations and institutions offer access to free, internet-enabled computers, but there is no way for someone to find these locations without being online already. In short, you need the internet to find the internet. LocalFreeWeb makes it so all you need is a cell phone.
---

Code for SF has incubated a variety of groups and projects over the five years it's been hacking. [The Civic Innovation
Group](https://civic.geosphere.io/) is one of those organizations. They are working on innovative solutions to
government challenges. They are a bit of hybrid organization, partnering with volunteers, government agencies and tech
companies. They are launching a suite of mapping tools for Brigade members to use that address some of the challenges
Brigade members have had. These tools are designed to remove blocks and save time when working with filtering and
mapping data, especially for people who don't have map coding skills.

## EAS Search Tool

[Enterprise Address System](https://civic.geosphere.io/tools/eas-search/) is a gazetteer, an address index for SF.
Select an area of SF and you can download all the address within that area with supplemented information like
coordinates, block and centerline node network numbers. This is useful if you need to select addresses for a particular
neighborhood from city wide data, such as from [DataSF Open Data portal](https://datasf.org/opendata/) which does not
let you select data by specific area.

## Geocoder

[Geocoder](https://civic.geosphere.io/tools/sf-geocoder/) adds geographic data to an address. It is essential for
mapping data without any GIS skills. Unlike other geocoders, this tools adds SF specific information such as centerline
node network numbers and block IDs.

## 3G: Geographic Geometry Generator

This is a brand new tool. [The Geographic Geometry Generator (3G) ](https://civic.geosphere.io/tools/geo/) Draw a line,
point or shape on a map and it gives you geometry and coordinates. It is incredibly useful for people without GIS skills
to create, name, and save custom geometry. Want to gerrymander your voting district? This is the tool for you.

These tools are built using [Leaflet Draw,](http://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html) an open
source GIS toolbar plugin and [JS library](http://leafletjs.com/) for interactive maps.

Currently there are two projects using these tools namely [SF Crime Data](https://sfcrimedata.org/) and [SFMTA Board
Meetings Resolution Database.](https://civic.geosphere.io/maps/sfmta-resolutions/) We hope that more Brigade members
will find those tools useful.
