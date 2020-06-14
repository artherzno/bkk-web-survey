$(function() {

  // Login Page - Toggle password ////////////
  $('#login-page ion-icon').on('click', function(event) {
    var password = $('#password');
    var passwordType = password.attr('type');

    if (passwordType === "password") {
      password.attr('type', 'text');
    } else {
      password.attr('type', 'password');
    }
  });


  // Switch checked always ////////////////////
  $('.switch-checked').change(function(){
      $(this).prop('checked', true);
  });


  // Switch non-checked always ////////////////
  $('.switch-non-checked').change(function(){
      $(this).prop('checked', false);
  });


  // Side Control Button ///////////////////////
  $('.search-control').on('click', function(){
    $('.left-side').toggleClass('active');
  });


  // Tab Button ////////////////////////////////
  $('.nav-pills .nav-link').on('click', function(event){
    var idTab = $(this).attr('id');
    var idTabContent = idTab.replace('-tab','');

    $('.tab-pane').removeAttr('style');

    if($(this).hasClass('active')) {
      setTimeout(
        function(){
          $('#'+idTab).removeClass('active').attr('aria-selected', 'false');
          $('#'+idTabContent).fadeOut('100').removeClass('show');
          // $('#pills-zero-tab').trigger('click');
        },1
      );
    } else {
      $('#'+idTabContent).show();
    }

    checkHeight();
    checkHeightSearchResult();
  });


  // Search Button /////////////////////////////
  $('#search-form').on('shown.bs.collapse', function () {
    checkHeightSearchResultFull();
  }).on('hide.bs.collapse', function() {
    checkHeightSearchResult();
  });

  function checkHeightSearchResultFull () {
    var leftSideH = window.innerHeight - 50,
        searchHeaderH = $('.search-header').height(),
        searchFormH = $('.search-form').height(),
        searchResultH = leftSideH - (searchHeaderH + searchFormH + 140);
        console.log(leftSideH+' , '+searchHeaderH+' , '+searchFormH+' , '+searchResultH);

    $('.search-result-table').animate({height: searchResultH}, 50);
  }

  function checkHeightSearchResult () {
    var leftSideH = window.innerHeight - 50,
        searchHeaderH = $('.search-header').height(),
        searchResultH = leftSideH - (searchHeaderH + 100);

    $('.search-result-table').animate({ height: searchResultH}, 50);
  }


  // Right Side ////////////////////////////////
  $('.search-result-table tr').on('click', function() {
    $('.right-side').addClass('active');

    var colRightH = $('.col-right').width();
    $('.map-control').animate({width: colRightH - 290 },100);
  });

  $('.right-side .close').on('click', function() {
    $('.right-side').removeClass('active');
    var colRightH = $('.col-right').width();
    $('.map-control').animate({width: colRightH},100);
  });


  // layers Control Button /////////////////////
  var buttonFirst = false;
  var idSecond = 'nodata';
  $('.layers-control-button[data-button="first"]').on('click', function(){
    $('._second').removeClass('active show');
    idSecond = 'nodata';

    if(!buttonFirst) {
      $('._first').addClass('active show');
      buttonFirst = true;
    } else {
      $('._first').removeClass('active show');
      buttonFirst = false;
    }
  });

  $('.layers-control-button[data-button="second"]').on('click', function(){
    var clickID = $(this).attr('data-name');

    if(idSecond == clickID) {
      $('._second').removeClass('active show');
      idSecond = 'nodata';
    } else {
      $('._second').removeClass('active show');
      $('#'+clickID).addClass('active show');
      idSecond = clickID;
    }
  });


  // Check checkMapHeight //////////////////////
  function checkHeight () {
    var winH = window.innerHeight;
    $('#mapid, .full-height').css({
      height: winH - 50
    });
  };

  checkHeight();


  // Window Resize /////////////////////////////
  $( window ).resize(function() {
    checkHeight();
    checkHeightSearchResult();
    checkHeightSearchResultFull();
  });

});
