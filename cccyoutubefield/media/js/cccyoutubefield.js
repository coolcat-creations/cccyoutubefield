(function() {

	document.addEventListener('DOMContentLoaded', function() {

		var cccyoutubefield = document.querySelectorAll('.cccyoutubefield');

		for (var i = 0; i < cccyoutubefield.length; i++) {

			var field  = cccyoutubefield[i],
			    embed  = field.getAttribute('data-embed'),
			    source = 'https://img.youtube.com/vi/' + embed + '/sddefault.jpg',
			    width, height;

			// Create new image and set the source
			var image = new Image();
			image.src = source;

			image.addEventListener('load', function() {
				field.appendChild(image);

				// Get the image dimensions
				width  = image.width;
				height = image.height;
			}(i));

			field.addEventListener('click', function(event) {

				// Create the div container
				var div = document.createElement('div');
				div.classList.add('cccyoutubefield');

				// Create the iframe
				var iframe = document.createElement('iframe');

				// Put the iframe inside the div container
				div.appendChild(iframe);

				// Setup the initiale iframe
				iframe.setAttribute('src', '//www.youtube.com/embed/' + embed + '?rel=0&showinfo=0&autoplay=1');
				iframe.setAttribute('frameborder', '0');

				// Set the iframe dimensions to be the same as the image
				iframe.setAttribute('width', width);
				iframe.setAttribute('height', height);

				// Replace the image with the iframe
				this.parentNode.replaceChild(div, this);

			});

		}
	});

})();
