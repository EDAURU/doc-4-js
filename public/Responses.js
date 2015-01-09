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
	document.getElementById('outputcontent').showModal();
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
	fTextArea.innerHTML = "Writing contents of file...";
	
	/*
		Text area file writing
	*/
	r = ev.target.result;
	fTextArea.innerHTML = r;
	hljs.highlightBlock(fTextArea);
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
	var rawCode = document.getElementById('rawCode');
	var formattedCode = document.getElementById('formattedCode');
	
	formattedCode.innerHTML = rawCode.value;
}


window.onkeydown = function (event) {
	switch (event.keyCode) {
		case 17:
			var rawCode = document.getElementById('rawCode');
			if (rawCode.className === 'hidden') {
				setClassName('formattedCodeWrapper', 'hidden');
				setClassName('rawCode', 'undefined');
			} else {
				setClassName('rawCode', 'hidden');
				setClassName('formattedCodeWrapper', 'scrollable');
			}
		break;
		default:
		break;
	}
};