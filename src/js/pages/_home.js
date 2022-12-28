/**
 * Home
 */
export default function() {
  $(document).on('click', '.anchor', function() {
    var $target = $(this).attr('href');
    var $offset = $($target).position().top;
    $('body,html').animate({ scrollTop: $offset }, 1000);
    return false;
  });

  $(document).on('click', '.seach-box a', function() {
    $(this).closest('.seach-box').toggleClass('act');
    return false;
  });

  $(document).on('click', '#tabs-btn a', function() {
    const $this = $(this);
    const $target = $this.data('tab');
    const $root = $this.closest('.more-featured');

    $('#tabs-btn a').removeClass('act');
    $this.addClass('act');
    $root.find('#tabs').find('.content.act').removeClass('act');
    $root.find('#tabs').find('#' + $target).addClass('act');
    return false;
  });

  $('.form .field').on('focus', function() {
    if ($(this).val() == '') {
      $(this).closest('label').addClass('act');
    }
  });
  $('.form .field').on('blur', function() {
    if ($(this).val() == '') {
      $(this).closest('label').removeClass('act');
    }
  });

  $('[fancybox]').fancybox();

  jQuery('article .content iframe').each(function() {
    if (jQuery(this).attr('src').includes('youtube')) {
      jQuery(this).wrap('<div class="wp-video"></div>');
    }
  });

}