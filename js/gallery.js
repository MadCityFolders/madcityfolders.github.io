galleryContentsElement = document.getElementById('data-gallery-contents');
galleryContents = JSON.parse(galleryContentsElement.textContent);
console.log(galleryContents);

galleryContainer = document.getElementById('thumbnail-gallery');
for (var i = 0; i < galleryContents.length; i++) {
  var image = galleryContents[i];

  var imageDiv = document.createElement("div");
  var imgElement = document.createElement("img");
  imgElement.src = image;
  imageDiv.appendChild(imgElement);
  galleryContainer.appendChild(imageDiv);
}

var pckry = new Packery(galleryContainer, {
  itemSelection: 'div',
  gutter: 10
});
