$(document).ready(function() {
  galleryContentsElement = $('#data-gallery-contents');
  galleryContents = JSON.parse(galleryContentsElement.text());
  console.log(galleryContents);

  gallery = $('#gallery');
  for (var i = 0; i < galleryContents.length; i++) {
    var image = galleryContents[i];

    var imageDiv = $('<div>');
    var imageLink = $('<a>');
    var imageElement = $('<img>');
    imageElement.attr('src', image);
    imageLink.attr('href', image);
    imageLink.attr('data-lightbox', 'gallery-image-' + i);
    imageLink.append(imageElement);
    imageDiv.append(imageLink);
    gallery.append(imageDiv);
  }
});
