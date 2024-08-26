function doDisplay() {

	var firstNameValue = document.getElementById("firstName").value;
	var lastNameValue = document.getElementById("lastName").value;
	
    var table = document.getElementById("peeps");
	table.style.display = "block";

	var tr = document.createElement("tr");
	table.appendChild(tr);
	
	var td1 = document.createElement("td");
	td1.innerHTML = firstNameValue;
	tr.appendChild(td1);
	
	var td2 = document.createElement("td");
	td2.innerHTML = lastNameValue;
	tr.appendChild(td2);
}

function doMouseMove(e) {
    var div = document.getElementById("mouseCoords");
	div.style.display = "block";
	div.innerHTML = "[" + e.clientX + ", " + e.clientY + "]";
}

document.getElementById("displayButton").addEventListener("click", doDisplay);
document.getElementById("peeps").addEventListener("mousemove", doMouseMove);
