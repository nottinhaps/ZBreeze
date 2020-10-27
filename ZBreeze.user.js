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

const facID = "21"; // update when N-Day starts!

(function() {
	var shifted = false;
	var controlled = false;
	var alternated = false;
	$(document).keydown(function(f) {
		shifted = f.shiftKey;
        controlled = f.ctrlKey;
		alternated = f.altKey;
		// Stops the spacebar from scrolling
		if (f.keyCode == 32 && f.target == document.body) {
			f.preventDefault();
			f.stopPropagation();
		}
	});
	// This is the main keymapping function of the script
	$(document).keyup(function(e) {
		// ZBreeze will not activate while you are using the Shift, Ctrl, ot Alt keys
        if (shifted || controlled || alternated){
			return;
        }
		else {
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
				window.location.href = "https://www.nationstates.net/page=list_nations/mode=g/region=the_leftist_assembly/censusid=82";
			}
			// Go to "Most Infected" census page (Z)
			else if (e.keyCode == 90) {
				window.location.href = "https://www.nationstates.net/page=list_nations/mode=g/region=the_leftist_assembly/censusid=84";
			}
      
		} //End of Else keylist
	}); // End of Keyup Function(e)
})(); //End of Main function
