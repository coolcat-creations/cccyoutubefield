;(function($)
{
	$(function() {
		var cccyoutubefield = $('.cccyoutubefield');

		cccyoutubefield.each(function () {
			var field = this;

			var source = "https://img.youtube.com/vi/" + field.dataset.embed + "/sddefault.jpg";

			var image = new Image();

			$(image).on('load', function () {
				$(field).append(image);
			});

			$(image).attr('src', source);

			$(field).on('click', function () {
				var frame = $('<iframe frameborder="0" allowfullscreen>');
				frame.attr('src', 'https://www.youtube.com/embed/' + field.dataset.embed + '?rel=0&showinfo=0&autoplay=1');

				$(field).html('').append(frame);
			});

		});
	});
})(jQuery);
