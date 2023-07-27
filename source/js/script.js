'use strict';

(function () {
  var favBtns = document.querySelectorAll('.favorite');

  if (favBtns.length) {
    favBtns.forEach(function (favBtn) {
      favBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        evt.target.classList.toggle('favorite--active');
      });
    });
  }

  var tabBtnTile = document.querySelector('.tabs__sorting-tile');
  
   
  tabBtnTile.addEventListener('click', function (evt) {
    evt.preventDefault();
    var section = evt.target.closest('.wares');
    
    if (section.classList.contains('wares--sorting-simple')) {
      section.classList.remove('wares--sorting-simple');
      section.classList.add('wares--sorting-tile')
    }
  });


  var tabBtnSimple = document.querySelector('.tabs__sorting-simple');
   
  tabBtnSimple.addEventListener('click', function (evt) {
    evt.preventDefault();
    var section = evt.target.closest('.wares');    
   
    
    if (section.classList.contains('wares--sorting-tile')) {
      section.classList.remove('wares--sorting-tile');
      section.classList.add('wares--sorting-simple')
    }
  });
  

})();
