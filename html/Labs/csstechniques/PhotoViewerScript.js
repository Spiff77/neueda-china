// Global variables.
var thumbnailsPanel;
var dimensions;

// Initialization function, called on page load.
function init() {

	var imageNames = [ 
					   '001.jpg', 
					   '002.jpg', 
					   '003.jpg', 
					   '004.jpg', 
					   '005.jpg', 
					   '006.jpg', 
					   '007.jpg', 
					   '008.jpg', 
					   '009.jpg',
					   '010.jpg', 
					   '011.jpg',
					   '012.jpg',
					   '013.jpg',
					   '014.jpg',
					   '015.jpg',
					   '016.jpg',
					   '017.jpg',
					   '018.jpg',
					   '019.jpg',
					   '020.jpg'
	];

	// Initialize global variables.
	thumbnailsPanel = document.querySelector('#thumbnailsPanel');

	dimensions = {
		thumbnailsPanelWidth: 52 * imageNames.length, 
		containerPanelWidth: thumbnailsPanel.parentNode.offsetWidth
	};

	// Create all the thumbnail images, and add to the thumbnailsPanel list.
	for (var i = 0; i < imageNames.length; i++) {
		var url = 'photos/' + imageNames[i];
		var imgStr = '<li><img src="' + url + '" class="thumbnailImage"></img></li>';                
		$('#thumbnailsPanel').append(imgStr);

		// Display the first thumbnail as the large image.
		if (i == 0) {
			displayLargeImage(url);
		}
	}

	// When the mouse enters the main containerPanel <div>, show the thumbnailsPanel.
	$('#containerPanel').mouseenter(function () {
		// TODO 6a: Slide the thumbnailsPanel into view gradually, rather than showing it immediately.
		$('#thumbnailsPanel').show();
	});

	// When the mouse leaves the main containerPanel <div>, hide the thumbnailsPanel.
	$('#containerPanel').mouseleave(function () {
		// TODO 6b: Slide the thumbnailsPanel out of view gradually, rather than hiding it immediately.
		$('#thumbnailsPanel').hide();
	});


	// For each thumbnail image...
	$(".thumbnailImage")
		.on("mouseup", function (e) {     // When the user clicks a thumbnail image, display a new large image.
			displayLargeImage(e.target.src);
		})
		.on("mouseenter", function (e) {  // When the user hovers over a thumbnail image, make it bigger.
		   $(this).animate({
			   width:  125,
			   height: 125,
			   marginTop: -70
		   }, 500);
		})
		.on("mouseleave", function (e) {  // When the user stops hovering over a thumbnail image, make it normal size.
			$(this).animate({
				width:  50,
				height: 50,
				marginTop: 0
			}, 500);
		});
}

// Display a large image.
function displayLargeImage(url) {

	// Create a new Image with the specified url.
	var image = new Image();
	image.className = "largeImage";
	image.src = url;

	// Fade-out any previous large image, and then fade-in the new large image.
	if (document.querySelector('.largeImage')) {
		$('.largeImage').fadeOut(300, 'swing', function () {
			fadeInLargeImage(image)
		});
	}
	else {
		fadeInLargeImage(image);
	}
}

// Fade-in a large image.
function fadeInLargeImage(image) {
	$('#viewerPanel').empty();
	$('#viewerPanel').append(image);
	$('.largeImage').fadeIn(100, 'swing');
}

// Move thumbnails panel smoothly to the first thumbnail.
function moveThumbnailsPanelFirst() {
	moveThumbnailsPanel(0);
}

// Move thumbnails panel smoothly to the right, by one thumbnail-image amount.
function moveThumbnailsPanelRight() {
	var amount = '+=' + Math.min(52, -thumbnailsPanel.offsetLeft);
	moveThumbnailsPanel(amount);
}

// Move thumbnails panel smoothly to the left, by one thumbnail-image amount.
function moveThumbnailsPanelLeft() {
	var amount = '-=' + Math.min(52, dimensions.thumbnailsPanelWidth + thumbnailsPanel.offsetLeft - dimensions.containerPanelWidth);
	moveThumbnailsPanel(amount);
}

// Move thumbnails panel smoothly to the last thumbnail.
function moveThumbnailsPanelLast() {
	var amount = dimensions.containerPanelWidth - dimensions.thumbnailsPanelWidth;
	moveThumbnailsPanel(amount);
}

// Do the thumbnails panel movement.
function moveThumbnailsPanel(amount) {
	$('#thumbnailsPanel').animate({ left: amount }, { duration: 750, easing: 'swing' });
}

// Show the help panel.
function showHelpPanel() {
	// TODO 6c: Show the helpPanel gradually, rather than showing it immediately.
	$('#helpPanel').show();
}

// Hide the help panel.
function hideHelpPanel() {
	// TODO 6d: Hide the helpPanel gradually, rather than hiding it immediately.
	$('#helpPanel').hide();
}
