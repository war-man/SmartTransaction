﻿/*!@license
* Infragistics.Web.ClientUI Dialog localization resources 16.2.20162.2141
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define( [
			"jquery"
		], factory );
	} else {
		factory(jQuery);
	}
}
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Dialog) {
	    $.ig.Dialog = {
		    locale: {
			    closeButtonTitle: "Schließen",
			    minimizeButtonTitle: "Minimieren",
			    maximizeButtonTitle: "Maximieren",
			    pinButtonTitle: "Anheften",
			    unpinButtonTitle: "Lösen",
			    restoreButtonTitle: "Wiederherstellen",
				setOptionError: 'Laufzeit-Änderungen sind für die folgende Option nicht zugelassen: '
		    }
	    };
    }
}));// REMOVE_FROM_COMBINED_FILES
