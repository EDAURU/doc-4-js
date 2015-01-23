var commandKeyCodeSum = 0;
var lastKeyPressed    = 0;

/**
 * Allows changing object classes, requires the ID of the object
 * @param {String} id     The ID of the object whose class will be modified
 * @param {String} nclass The name of the new class for the object
 */
function setClassName(id, nclass) {
	"use strict";
	var e = document.getElementById(id);
	e.className = nclass;
}

/**
 * Shows a tab, given its ID
 * @param {String} tab The ID of the tab element
 */
function showTab(tab) {
	"use strict";
	setClassName(tab, 'control-group tab-pane active');
}

/**
 * Hides a tab, given its ID
 * @param {String} tab The ID of the tab element
 */
function hideTab(tab) {
	"use strict";
	setClassName(tab, 'control-group tab-pane');
}

function showOutputDialog() {
	"use strict";
	document.getElementById('outputContent').showModal();
}

function highlightFormattedCode() {
	"use strict";
	var formattedCode = document.getElementById('formattedCode');
	hljs.highlightBlock(formattedCode);
}


/*
	File read and write methods
*/
function showFileText(ev) {
	"use strict";
	var r, fTextArea;
	
	/*
		Text area updating while writing...
	*/
	fTextArea = document.getElementById('rawCode');
	fTextArea.value = "Writing contents of file...";
	
	/*
		Text area file writing
	*/
	r = ev.target.result;
	fTextArea.value = r;
	highlightFormattedCode();
	
	hideTab('fileInput');
	showTab('codeInput');
	setClassName('fileOption', 'undefined');
	setClassName('textOption', 'active');
}

function readFile(ev) {
	"use strict";
	var f, fReader, tArea;
	
	/*
		Paragraph handling variables
	*/
	tArea = document.getElementById('rawCode');
	
	f = (ev.target.files)[0];
	fReader = new FileReader();
	fReader.onload = showFileText;
	
	fReader.readAsText(f);
}

function updateFormattedCode() {
	"use strict";
	var rawCode, formattedCode;
	rawCode = document.getElementById('rawCode');
	formattedCode = document.getElementById('formattedCode');
	formattedCode.innerHTML = rawCode.value;
}

function clearCodeArea() {
	"use strict";
	var rawCode;
	rawCode = document.getElementById('rawCode');
	rawCode.value = '';
}

/*
	Documentation Forms Methods
*/
function showForm(formID) {
    "use strict";
    setClassName(formID, 'documentation-form');
}

function hideForm(formID) {
    "use strict";
    setClassName(formID, 'hidden');
}

function showHeaderDocForm() {
    "use strict";
    showForm('headerDocForm');
    hideForm('methodDocForm');
    hideForm('variableDocForm');
    hideForm('footDocForm');
}

function showMethodDocForm() {
    "use strict";
    showForm('methodDocForm');
    hideForm('headerDocForm');
    hideForm('variableDocForm');
    hideForm('footDocForm');
}

function showVariableDocForm() {
    "use strict";
    showForm('variableDocForm');
    hideForm('methodDocForm');
    hideForm('headerDocForm');
    hideForm('footDocForm');
}

function showFootDocForm() {
    "use strict";
    showForm('footDocForm');
    hideForm('methodDocForm');
    hideForm('headerDocForm');
    hideForm('variableDocForm');
}

function toggleView() {
	"use strict";
	var rawCode, formattedCode, scrollValue;
	rawCode = document.getElementById('rawCode');
	formattedCode = document.getElementById('formattedCode');
			
	if (rawCode.className === 'hidden') {
		scrollValue = formattedCode.scrollTop;
		setClassName('formattedCodeWrapper', 'hidden');
		setClassName('rawCode', 'undefined');
		rawCode.scrollTop = scrollValue;
	} else {
		scrollValue = rawCode.scrollTop;
		setClassName('rawCode', 'hidden');
		setClassName('formattedCodeWrapper', 'scrollable');
		formattedCode.scrollTop = scrollValue;
		updateFormattedCode();
		highlightFormattedCode();
	}
}

/*
	Event Methods
*/
window.onkeydown = function (event) {
	"use strict";
	
	if (lastKeyPressed !== event.keyCode) {
		console.log('Key Pressed: ' + event.keyCode);
		commandKeyCodeSum += event.keyCode;
	}
	
	
	if (commandKeyCodeSum === 243) {
		toggleView();
	}
	lastKeyPressed = event.keyCode;
};

window.onkeyup = function (event) {
	"use strict";
	console.log('Key Lifted: ' + event.keyCode);
	lastKeyPressed = undefined;
	commandKeyCodeSum -= event.keyCode;
};