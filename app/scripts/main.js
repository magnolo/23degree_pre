jQuery(document).ready(function($) {
  var scrolling = false;
  var contentSections = $('.cd-section'),
    verticalNavigation = $('.cd-vertical-nav'),
    navigationItems = verticalNavigation.find('a'),
    navTrigger = $('.cd-nav-trigger'),
    scrollArrow = $('.cd-scroll-down');

  $(window).on('scroll', checkScroll);

  //smooth scroll to the selected section
  verticalNavigation.on('click', 'a', function(event) {
    event.preventDefault();
    smoothScroll($(this.hash));
    verticalNavigation.removeClass('open');
  });

  //smooth scroll to the second section
  scrollArrow.on('click', function(event) {
    event.preventDefault();
    smoothScroll($(this.hash));
  });

  // open navigation if user clicks the .cd-nav-trigger - small devices only
  navTrigger.on('click', function(event) {
    event.preventDefault();
    verticalNavigation.toggleClass('open');
  });

  function checkScroll() {
    if (!scrolling) {
      scrolling = true;
      (!window.requestAnimationFrame) ? setTimeout(updateSections, 300): window.requestAnimationFrame(updateSections);
    }
  }

  function updateSections() {
    var halfWindowHeight = $(window).height() / 2,
      scrollTop = $(window).scrollTop();
    contentSections.each(function() {
      var section = $(this),
        sectionId = section.attr('id'),
        navigationItem = navigationItems.filter('[href^="#' + sectionId + '"]');
      ((section.offset().top - halfWindowHeight < scrollTop) && (section.offset().top + section.height() - halfWindowHeight > scrollTop)) ? navigationItem.addClass('active'): navigationItem.removeClass('active');
    });
    scrolling = false;
  }

  function smoothScroll(target) {
    $('body,html').animate({
        'scrollTop': target.offset().top
      },
      300
    );
  }
});
jQuery(document).ready(function() {
  //$('#fullpage').fullpage();
  //$('#fullpage').snapscroll();
  $("#slider1").revolution({
    sliderType: "standard",
    sliderLayout: "fullscreen",
    responsiveLevels: [1240, 1024, 778, 480],
    visibilityLevels: [1240, 1024, 778, 480],
    gridwidth: [1000, 800, 700, 480],
    gridheight: [800, 700, 600, 500],
    delay: 9000,
    navigation: {
      arrows: {
        enable: false
      },
      touch: {
        touchenabled: "on",
        swipe_treshold: 75,
        swipe_min_touches: 1,
        drag_block_vertical: false,
        swipe_direction: "horizontal"
      },
      bullets: {
        style: "slide-bullets",
        enable: true,
        hide_onmobile: false,
        hide_onleave: true,
        hide_delay: 200,
        hide_delay_mobile: 1200,
        hide_under: 0,
        hide_over: 9999,
        tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',
        direction: "horizontal",
        space: 0,
        h_align: "center",
        v_align: "bottom",
        h_offset: 0,
        v_offset: 50
      }
    }
  });
  $('#menu-button').click(function() {
    $('.st-container').toggleClass('st-menu-open');
  });
});
var tpj = jQuery;

var revapi289;
tpj(document).ready(function() {
  if (tpj("#rev_slider_289_1").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_289_1");
  } else {
    revapi289 = tpj("#rev_slider_289_1").show().revolution({
      sliderType: "carousel",
      //jsFileLocation: "../../revolution/js/",
      sliderLayout: "auto",
      dottedOverlay: "none",
      delay: 9000,
      navigation: {
        onHoverStop: "off",
      },
      carousel: {
        horizontal_align: "center",
        vertical_align: "center",
        fadeout: "on",
        vary_fade: "off",
        maxVisibleItems: 3,
        infinity: "on",
        space: 0,
        stretch: "off"
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1000, 800, 700, 480],
      gridheight: [800, 700, 600, 500],
      lazyType: "none",
      shadow: 0,
      spinner: "off",
      stopLoop: "on",
      stopAfterLoops: 0,
      stopAtSlide: 1,
      shuffle: "off",
      autoHeight: "off",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false,
      }
    });
  }
}); /*ready*/