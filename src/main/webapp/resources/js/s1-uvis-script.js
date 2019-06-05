// iframe height
function resizeIframe(obj) {
  console.log(obj);
  obj.style.height = obj.contentWindow.$(document).height() + 'px';
}
// onload script
$(function() {
  // vertical scroll check
  $(window).on('scroll', function() {
    // console.log('scrolled'); 
    if ($(window).scrollTop() > 0) {
      $('body').addClass('scrolled');
    } else {
      $('body').removeClass('scrolled');
    }
  });
  //selectmenu
  // $('.input-wrap.select').each(function() {
  //   var target = $(this);
  //   target.find('select').selectmenu({
  //     // appendTo: target,
  //     // width: "100%",
  //     style: 'dropdown',
  //     position: {
  //       my: "left top",
  //       at: "left bottom",
  //       of: target,
  //       collision: "flip"
  //     }
  //   });
  // });
  //input file form
  $('.input-file-form').each(function() {
    var target = $(this);
    target.find('input[type=file]').on('change', function() {
      var fileName = $(this).val();
      target.find('input[type=text]').val(fileName);
    });
  });
  //datepicker
  $('.datepicker').each(function () {
    $.fn.datepicker.dates['ko'] = {
      days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
      daysShort: ["일", "월", "화", "수", "목", "금", "토"],
      daysMin: ["일", "월", "화", "수", "목", "금", "토"],
      months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      monthsShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      today: "이번 달 보기",
      clear: "지우기",
      format: "yyyy-mm-dd",
      titleFormat: "yyyy MM",
      /* Leverages same syntax as 'format' */
      weekStart: 0
    };
    var target = $(this);
    if (target.hasClass('monthly') == true) {
      console.log('month');
      target.datepicker({
        language: 'ko',
        format: "yyyy-mm",
        startView: "months",
        viewMode: "months",
        minViewMode: "months",
        maxViewMode: 2,
        clearBtn: true
      });
    } else {
      target.datepicker({
        language: 'ko',
        todayBtn: true,
        todayHighlight: true,
        clearBtn: true
      });
    }
    target.parent().find('.icon-calendar').on('click', function() {
      target.focus();
    });
  });
  //input focue clear
  $(document).on('click', '.icon-clear', function(e) {
    $(e.target).parent().find('input').val('').change();
    $(e.target).parent().find('.icon-clear').removeClass('on').hide();
  });
  $(document).find('.input-wrap input.clearable').each(function(e) {
    var inputTarget = $(this);
    var clearVal = function() {
      inputTarget.val('');
    }
    inputTarget.on('focus', function() {
      console.log('focus');
      inputTarget.parent().find('.icon-clear').addClass('focus');
    }).on('blur', function() {
      inputTarget.parent().find('.icon-clear').removeClass('focus');
      inputTarget.parent().find('.icon-clear').removeClass('on').hide();
    });
    inputTarget.parent().on('mouseover focus', function() {
      var clearIcon = $('<i class="icon-clear"></i>');
      if (inputTarget.parent().find('.icon-clear').length <= 0) {
        clearIcon.insertAfter(inputTarget);
      }
      var inputValue = inputTarget.val();
      if (inputTarget.attr('value') == "undefined" || inputValue == '') {
        inputTarget.parent().find('.icon-clear').removeClass('on').hide();
      } else {
        inputTarget.parent().find('.icon-clear').addClass('on').show();
      }
    }).on('mouseout', function() {
      if (inputTarget.parent().find('.icon-clear').hasClass('focus') == false) {
        inputTarget.parent().find('.icon-clear').removeClass('on').hide();
      }
    }).on('keyup', function() {
      var inputValue = inputTarget.val();
      if (inputTarget.attr('value') == "undefined" || inputValue == '') {
        inputTarget.parent().find('.icon-clear').removeClass('on').hide();
      } else {
        inputTarget.parent().find('.icon-clear').addClass('on').show();
      }
    });
  });
  // <i class="icon-clear"></i>
  //content wrap height
  function contentWrapResize() {
    var headerHeight = 0;
    var bigTabsHeight = 0;
    var pageTabsHeight = 0;
    var footerHeight = 0;
    if ($('.header-wrap').length > 0) {
      headerHeight = $('.header-wrap').outerHeight(true);
    }
    if ($('.big-tabs').length > 0) {
      bigTabsHeight = $('.big-tabs').outerHeight(true);
    }
    if ($('.page-tabs').length > 0) {
      headerHeight = $('.page-tabs').outerHeight(true);
    }
    if ($('.footer-wrap').length > 0) {
      headerHeight = $('.footer-wrap').outerHeight(true);
    }
    $('.content-wrap').css({
      'min-height': $(window).height() - (headerHeight + bigTabsHeight + pageTabsHeight + footerHeight)
    })
  }
  contentWrapResize();
  $(window).resize(function() {
    contentWrapResize();
  });
  //data form table toggle
  $('.data-form-table .table-toggle-additional').on('click', '.btn-table-toggle', function() {
    console.log('expended');
    $(this).parents('.data-form-table').find('table').toggleClass('expanded');
    if ($(this).parents('.data-form-table').find('table').hasClass('expanded') == true) {
      console.log($(this).attr('data-text-open'))
      $(this).find('span').text($(this).attr('data-text-close'));
    } else {
      console.log($(this).attr('data-text-close'))
      $(this).find('span').text($(this).attr('data-text-open'));
    }
    $(this).toggleClass('active');
  });
});