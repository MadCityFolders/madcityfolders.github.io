$(document).ready(function() {
  galleryContentsElement = document.getElementById('data-gallery-contents');
  galleryContents = JSON.parse(galleryContentsElement.textContent);
  console.log(galleryContents);

  gallery = document.getElementById('gallery');
  for (var i = 0; i < galleryContents.length; i++) {
    var image = galleryContents[i];

    var imageDiv = document.createElement('div');
    var imageLink = document.createElement('a');
    var imageElement = document.createElement('img');
    imageElement.setAttribute('src', image);
    imageLink.setAttribute('href', image);
    imageLink.setAttribute('data-lightbox', 'gallery-image-' + i);

    imageLink.appendChild(imageElement);
    imageDiv.appendChild(imageLink);
    gallery.appendChild(imageDiv);
  }
});
