/*
	Pure event binding Script.
*/

/*
	Tab button events
*/
document.getElementById('textOption').onclick = function (event) {
	"use strict";
	hideTab('fileInput');
	showTab('codeInput');
	setClassName('fileOption', 'undefined');
	setClassName('textOption', 'active');
};

document.getElementById('fileOption').onclick = function (event) {
	"use strict";
	hideTab('codeInput');
	showTab('fileInput');
	setClassName('textOption', 'undefined');
	setClassName('fileOption', 'active');
};

document.getElementById('changeLogOption').onclick = function (event) {
	"use strict";
	alert('Feature in development');
};

/*
	Textarea events
*/
document.getElementById('rawCode').onchange = function (event) {
	"use strict";
	setClassName('generateButton', 'btn btn.primary btn-large');
};

/*
	Button events
*/
document.getElementById('generateButton').onclick = function (event) {
	"use strict";
	showOutputDialog();
};

document.getElementById('clearButton').onclick = function (event) {
	"use strict";
	clearCodeArea();
};

document.getElementById('toggleButton').onclick = function (event) {
	"use strict";
	toggleView();
};

/*
	File input events
*/
document.getElementById('fileInput').onchange = function (event) {
	"use strict";
	readFile(event);
};

/*
	Documentation menu button events
*/
document.getElementById('headerButton').onclick = function (event) {
	"use strict";
	showHeaderDocForm();
};

document.getElementById('methodButton').onclick = function (event) {
	"use strict";
	showMethodDocForm();
};

document.getElementById('varButton').onclick = function (event) {
	"use strict";
	showVariableDocForm();
};

document.getElementById('footButton').onclick = function (event) {
	"use strict";
	showFootDocForm();
};