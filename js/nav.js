$(function() {
  Toc.init({
		$nav: $('#toc'),
		$scope: $('main'),
	});

  // toc added elements, refresh scroll spy
  $('[data-spy="scroll"]').each(function () {
    $(this).scrollspy('refresh')
  })
});
