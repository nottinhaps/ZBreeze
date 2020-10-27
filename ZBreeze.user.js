// ==UserScript==
// @name         ZBreeze.user.js
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Hotkeys for The Leftist Assembly for Z-Day, based on NSBreeze++
// @author       Nottinhaps
// @match        https://www.nationstates.net/*
// @updateURL    https://github.com/nottinhaps/ZBreeze/blob/main/ZBreeze.user.js
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @grant        none
// ==/UserScript==

/* Keybinds:
[N] Reload the page
[<] Go back
[I] Go to "Most Infected" census page for The Leftist Assembly
[Z] Go to "Most Zombified" census page for The Leftist Assembly
*/

/* global $ */
$.fn.random = function() {
  return this.eq(Math.floor(Math.random() * this.length));
}

const region = "The Leftist Assembly" // Change this if you are in a different region



function keyBind() {
	// This is the main keymapping function of the script
	$(document).keyup(function(e) {
	// ZBreeze will not activate while you are using the Shift, Ctrl, ot Alt keys
        if (e.shiftKey || e.ctrlKey || e.altKey) {
            return;
        }

		if ($("input,textarea").is(":focus")){
		// ZBreeze will not activate if you are typing in a text field
			return;
		}
		// Go Back (<)
		else if (e.keyCode == 188) {
			window.history.back();
		}
		// Refresh (N)
		else if (e.keyCode == 78) {
			window.location.reload();
		}
		// Go to "Most Infected" census page (I)
		else if (e.keyCode == 73) {
			window.location.href = `https://www.nationstates.net/page=list_nations/mode=g/region=${region}/censusid=82`;
		}
		// Go to "Most Infected" census page (Z)
		else if (e.keyCode == 90) {
			window.location.href = `https://www.nationstates.net/page=list_nations/mode=g/region=${region}/censusid=84`;
		} //End of Else keylist
	}); // End of Keyup Function(e)
}; //End of Main function

document.addEventListener('keydown', keyBind, false);
