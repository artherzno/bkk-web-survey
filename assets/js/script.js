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
          $('.right-side').removeClass('active');
          $('.map-control').animate({width: $('.col-right').width()},100);
          // $('#pills-zero-tab').trigger('click');
        },1
      );
    } else {
      $('#'+idTabContent).show();
    }

    checkHeight();
    checkHeightResultLeftside();
  });


  // Search Button /////////////////////////////
  $('#search-form').on('shown.bs.collapse', function () {
    checkHeightResultLeftside();
  }).on('hide.bs.collapse', function() {
    checkHeightResultLeftsideFull();
  });

  function checkHeightResultLeftside () {
    var leftSideH = window.innerHeight - 50,
        searchHeaderH = $('.left-side .search-header').height(),
        searchFormH = $('.left-side .search-form').height(),
        searchResultH = leftSideH - (searchHeaderH + searchFormH + 190);
        // console.log(leftSideH+' , '+searchHeaderH+' , '+searchFormH+' , '+searchResultH);

    $('.left-side .result-table-body').animate({height: searchResultH}, 50);
  }

  function checkHeightResultLeftsideFull () {
    var leftSideH = window.innerHeight - 50,
        searchHeaderH = $('.left-side .search-header').height(),
        searchResultH = leftSideH - (searchHeaderH + 150);
        // console.log('left full');

    $('.left-side .result-table-body').animate({ height: searchResultH}, 50);
  }

  function checkHeightResultRightsideFull () {
    var leftSideH = window.innerHeight - 50,
        headerH = $('.right-side .result-header').height(),
        detailH = $('.right-side .result-detail').height(),
        resultH = leftSideH - (headerH + detailH + 190);
        // console.log(leftSideH+' , '+headerH+' , '+detailH+' , '+resultH);
        // console.log('right full')

    $('.right-side .result-table-body').animate({height: resultH}, 50);
  }


  // Right Side ////////////////////////////////
  $('.left-side .result-table tr').on('click', function() {
    $('.right-side').addClass('active');

    var colRightH = $('.col-right').width();
    $('.map-control').animate({width: colRightH - 290 },100);

    checkHeightResultRightsideFull();
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
    $('#map, .full-height').css({
      height: winH - 50
    });
  };

  checkHeight();


  // Check checkMapWidth ///////////////////////
  function checkColRightWidth () {
    var winW = window.innerWidth;
    var colLeftW = $('.col-left').width();

    $('.col-right').css({
      width: winW - colLeftW
    });
  }

  checkColRightWidth();


  // Window Resize /////////////////////////////
  $( window ).resize(function() {
    checkHeight();

    var searchForm = $('#search-form');
    (searchForm.hasClass('show')) ? checkHeightResultLeftside() : checkHeightResultLeftsideFull();

    checkHeightResultRightsideFull();
  });


  // Portal Button /////////////////////////////
  $('#portal-search-button').on('click', function(){
    sessionStorage.setItem("tab", "first");
  });

  $('#portal-check-button').on('click', function(){
    sessionStorage.setItem("tab", "second");
  });

  $('#portal-report-button').on('click', function(){
    sessionStorage.setItem("tab", "third");
  });

  setTimeout(function(){
    // console.log(sessionStorage.getItem("tab"));
    var ss = sessionStorage.getItem("tab");
    $('#pills-'+ss+'-tab').addClass('active');
    $('#pills-'+ss).tab('show');
  },100);


});
