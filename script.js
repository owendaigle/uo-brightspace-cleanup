// ==UserScript==
// @name        Brightspace Cleanup
// @namespace   Violentmonkey Scripts
// @match       https://uottawa.brightspace.com/d2l/home*
// @grant       none
// @version     1.0
// @author      owen daigle
// @description Gets rid of annoying stuff on uottawa brightspace homescreen.
// ==/UserScript==


(function cleanUpBrightspace() {
  'use strict';

  // sets main column to actually be wide and use the screen
  const element = document.querySelector('.homepage-col-8');
  if (element) {
    element.style.width = '100%';
  }

  function hideElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.style.display = 'none';
    }
  }

  //elements we want to hide on bs
  const elementsToHide = [
    '.homepage-col-4',
    ' .d2l-widget-padding-full.d2l-tile.d2l-widget',
    '.homepage-col-12',
    '.dvOuter',
    '.d2l-custom-widget.d2l-widget'
  ];


  //actually hides the elements
  for (const selector of elementsToHide) {
    hideElement(selector);
  }

  //hides course evaluation popup
  setTimeout(() => {document.getElementById('dvOuter').style.display = 'none';}, 750);
  setTimeout(() => {document.getElementById('dvOuter').style.display = 'none';}, 1500); //failsafe in case takes long to load
  setTimeout(() => {document.getElementById('dvOuter').style.display = 'none';}, 2250); //second failsave in case takes really long

})();
