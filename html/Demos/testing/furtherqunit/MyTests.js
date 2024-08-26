module("initial state", {
	setup: function() {

		this.firstNameTextBox = document.getElementById("firstName");
		this.lastNameTextBox  = document.getElementById("lastName");
		this.peepsTable       = document.getElementById("peeps");
		this.mouseCoordsPanel = document.getElementById("mouseCoords");
		this.displayButton    = document.getElementById("displayButton");

		this.peepsTable.innerHTML = "";
	}
});

test("table is empty", function() {
	equal(this.peepsTable.childNodes.length, 0);
});

test("table is not visible", function() {
	equal(this.peepsTable.style["display"], "");
});

test("mouse panel is not visible", function() {
	equal(this.mouseCoordsPanel.style["display"], "");
});

module("display items", {
	setup: function() {
	
		this.firstNameTextBox = document.getElementById("firstName");
		this.lastNameTextBox  = document.getElementById("lastName");
		this.peepsTable       = document.getElementById("peeps");
		this.mouseCoordsPanel = document.getElementById("mouseCoords");
		this.displayButton    = document.getElementById("displayButton");

		this.peepsTable.innerHTML = "";
	}
});

test("when doDisplay button is clicked once, the table contains 1 item", function() {
	this.displayButton.click();
	equal(this.peepsTable.getElementsByTagName("tr").length, 1);
});

test("when doDisplay button is clicked twice, the table contains 2 items", function() {
	this.displayButton.click();
	this.displayButton.click();
	equal(this.peepsTable.getElementsByTagName("tr").length, 2);
});

test("when doDisplay button is clicked for an empty table, the new table row displays the user input", function() {
	this.firstNameTextBox.value = "Miguel";
	this.lastNameTextBox.value = "Michu";
	this.displayButton.click();
	equal(this.peepsTable.getElementsByTagName("tr").length, 1);
	equal(this.peepsTable.getElementsByTagName("tr")[0].getElementsByTagName("td")[0].innerHTML, "Miguel");
	equal(this.peepsTable.getElementsByTagName("tr")[0].getElementsByTagName("td")[1].innerHTML, "Michu");
});

test("when doDisplay button is clicked for a non-empty table, the table rows display correct values", function() {
	this.firstNameTextBox.value = "Miguel";
	this.lastNameTextBox.value = "Michu";
	this.displayButton.click();
	equal(this.peepsTable.getElementsByTagName("tr").length, 1);

	this.firstNameTextBox.value = "Chico";
	this.lastNameTextBox.value = "Flores";
	this.displayButton.click();
	equal(this.peepsTable.getElementsByTagName("tr").length, 2);
	equal(this.peepsTable.getElementsByTagName("tr")[0].getElementsByTagName("td")[0].innerHTML, "Miguel");
	equal(this.peepsTable.getElementsByTagName("tr")[0].getElementsByTagName("td")[1].innerHTML, "Michu");
	equal(this.peepsTable.getElementsByTagName("tr")[1].getElementsByTagName("td")[0].innerHTML, "Chico");
	equal(this.peepsTable.getElementsByTagName("tr")[1].getElementsByTagName("td")[1].innerHTML, "Flores");
});

module("mouse movement", {
	setup: function() {

		this.firstNameTextBox = document.getElementById("firstName");
		this.lastNameTextBox  = document.getElementById("lastName");
		this.peepsTable       = document.getElementById("peeps");
		this.mouseCoordsPanel = document.getElementById("mouseCoords");
		this.displayButton    = document.getElementById("displayButton");

		this.peepsTable.innerHTML = "";

		// Simulate user input, so the table is visible (and clickable).
		this.firstNameTextBox.value = "Wilfried";
		this.lastNameTextBox.value = "Bony";
		this.displayButton.click();
	}
});

test("when user moves mouse in table, the mouse panel displays the coordinates", function() {

	var event = new MouseEvent('mousemove', {
		clientX: 100,
		clientY: 200,
		'bubbles': true,
		'cancelable': true
	});	
	this.peepsTable.dispatchEvent(event);
	
	equal(this.mouseCoordsPanel.innerHTML, "[100, 200]");
});


