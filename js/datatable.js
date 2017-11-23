$(document).ready(function() {
  // initialize datatables
  var table = $('.datatable').dataTable( {
    "aaSorting": [ [0,'desc'] ],
    "aoColumns": [
      { "sType": "datetime" },
      null,
      null,
      null
    ],
    "bInfo": false,
    "bPaginate": false,

    /* allow linking to searches */
    "search": {
      "search": $.address.parameter('search'),
    },
  });

  // when someone types a search value, it updates the URL
  $('.dataTables_filter input[type=search]').keyup(function(e){
    $.address.parameter('search', $(this).val());
  });
});
