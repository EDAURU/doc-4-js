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