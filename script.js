var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

//Name of function explained

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	//Add delete button next to that list
	var btnD = document.createElement("button");
	btnD.innerHTML = "Delete";
	li.appendChild(btnD);
	//
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Click at list and toggle class "done"
function toggleDone(thatlist) {
	if(thatlist.target.tagName === "LI") {
		thatlist.target.classList.toggle("done");
	}
}

// Click Delete button to delete element.
function btnDel(thatEle) {
	var whatBtn = thatEle.target;
	if(whatBtn.tagName === "BUTTON") {
		whatBtn.parentElement.remove();
	}
}


ul.addEventListener("click",btnDel);

ul.addEventListener("click",toggleDone);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);