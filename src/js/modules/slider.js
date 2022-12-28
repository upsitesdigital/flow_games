/**
 * Slider
 */
export default function() {
  const $fullslider = $('.slide-full');
  $fullslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });
  const $pagFeaturedslider = $('.slide-pag-featured');
  $pagFeaturedslider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
    centerMode: true,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0,
    asNavFor: '.slide-image-featured,.slide-text-featured',
  });
  const $textFeaturedslider = $('.slide-text-featured');
  $textFeaturedslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
    centerMode: false,
    focusOnSelect: false,
    adaptiveHeight: true,
    centerPadding: 0,
    asNavFor: '.slide-pag-featured,.slide-image-featured',
  });
  const $imageFeaturedslider = $('.slide-image-featured');
  $imageFeaturedslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
    centerMode: false,
    focusOnSelect: false,
    adaptiveHeight: true,
    centerPadding: 0,
    fade: true,
    asNavFor: '.slide-pag-featured,.slide-text-featured',
  });


  const $webstoriesslide = $('.slide-webstories');
  $webstoriesslide.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.webstories .dots'),
    arrows: true,
    nextArrow: '.webstories .next',
    prevArrow: '.webstories .prev',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
  const $teamslide = $('.slide-team');
  $teamslide.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.team .dots'),
    arrows: true,
    nextArrow: '.team .next',
    prevArrow: '.team .prev',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  const $galleryslide = $('.block-gallery .galley');
  $galleryslide.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    // appendDots: $('.webstories .dots'),
    arrows: true,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0,
    asNavFor: '.block-gallery .pag-galley',
  });
  const $gallerypagslide = $('.block-gallery .pag-galley');
  $gallerypagslide.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    // appendDots: $('.webstories .dots'),
    arrows: true,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0,
    asNavFor: '.block-gallery .galley',
  });
}