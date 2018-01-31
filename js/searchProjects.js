$(document).ready(function () {
  'use strict';

  // Set up search
  var idx

  $.getJSON('/projects/index.json', function (response) {
    idx = lunr(function () {
      this.field('title')
      this.field('blurb')
      this.field('tags')
      this.field('skills_needed')
    
      response.forEach(function(doc) {
        this.add(doc)
      }, this)
    })

    $('input#search').on('keyup', function () {

      // Get query
      var query = $(this).val();

      // Search for it
      query = query.length > 0 ? query + '~1' : query
      var result = idx.search(query)

      // Output it
      var resultdiv = $('ul.searchresults');
      if (result.length === 0) {
        // Hide results
        //resultdiv.hide();
        console.log('none')
      } else {
        // Show results
        // resultdiv.empty();

        for (var item in result) {
          console.log(result[item])
          /*
          var ref = result[item].ref;

          var searchitem = '<li><a href="' + ref + '">' + store[ref].title + '</a></li>';

          resultdiv.append(searchitem);
          */
        }

        resultdiv.show();

      }

    });

  });

});