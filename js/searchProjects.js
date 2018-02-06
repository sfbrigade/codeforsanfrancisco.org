$(document).ready(function () {
  'use strict';

  // Set up search
  var idx
  var store = {}
  var resultdiv = $('div.project-search-results')
  var allProjectsDiv = $('div.all-projects')

  $.getJSON('/projects/index.json', function (response) {
    idx = lunr(function () {
      this.field('title')
      this.field('blurb')
      this.field('tags')
      this.field('skills_needed')
      this.field('civic_topics')
    
      response.forEach(function(doc) {
        this.add(doc)
        store[doc.id] = doc
      }, this)
    })

    $('.clear').on('click', function () {
      $('input#search').val('')
      resultdiv.hide()
      allProjectsDiv.show()
    })

    $('input#search').on('keyup', function () {

      // Get query
      var query = $(this).val();

      // Search for it
      query = query.length > 0 ? query + '~1' : query
      var result = idx.search(query)

      // Output it
      
      if (result.length === 0 && query.length === 0) {
        // Hide results
        resultdiv.hide()
        allProjectsDiv.show()
        console.log('none')
      } else if (result.length === 0) {
        // do nothing
      } else {
        // Show results
        resultdiv.empty()
        allProjectsDiv.hide()
        for (var item in result) {
          var data = store[result[item].ref]
          var template = $('#search-results-template').html()
          Mustache.parse(template)
          var rendered = Mustache.render(template, data)
          resultdiv.append(rendered)
        }
        resultdiv.show()
      }

    });

  });

});