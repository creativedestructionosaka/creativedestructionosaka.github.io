/* ----------------------------------

Name: custom.js
Author: templatemilk
Website: https://www.templatemilk.com

------------------------------------- */







/*====================================================


	Table of Contents
	
	
		01. Loading Screen 

		02. Lightbox

	
	
====================================================*/



jQuery(document).ready(function($) {
	"use strict";

	
	
/*======================

	01. Loading Screen 

========================*/



	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 0);

	
	
	

	
/*======================

	02. Lightbox 

========================*/





	lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
	
	
	

	
});