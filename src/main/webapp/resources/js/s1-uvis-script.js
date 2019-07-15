// scrollTo
/**
 * Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
; (function (f) { "use strict"; "function" === typeof define && define.amd ? define(["jquery"], f) : "undefined" !== typeof module && module.exports ? module.exports = f(require("jquery")) : f(jQuery) })(function ($) { "use strict"; function n(a) { return !a.nodeName || -1 !== $.inArray(a.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) } function h(a) { return $.isFunction(a) || $.isPlainObject(a) ? a : { top: a, left: a } } var p = $.scrollTo = function (a, d, b) { return $(window).scrollTo(a, d, b) }; p.defaults = { axis: "xy", duration: 0, limit: !0 }; $.fn.scrollTo = function (a, d, b) { "object" === typeof d && (b = d, d = 0); "function" === typeof b && (b = { onAfter: b }); "max" === a && (a = 9E9); b = $.extend({}, p.defaults, b); d = d || b.duration; var u = b.queue && 1 < b.axis.length; u && (d /= 2); b.offset = h(b.offset); b.over = h(b.over); return this.each(function () { function k(a) { var k = $.extend({}, b, { queue: !0, duration: d, complete: a && function () { a.call(q, e, b) } }); r.animate(f, k) } if (null !== a) { var l = n(this), q = l ? this.contentWindow || window : this, r = $(q), e = a, f = {}, t; switch (typeof e) { case "number": case "string": if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) { e = h(e); break } e = l ? $(e) : $(e, q); case "object": if (e.length === 0) return; if (e.is || e.style) t = (e = $(e)).offset() }var v = $.isFunction(b.offset) && b.offset(q, e) || b.offset; $.each(b.axis.split(""), function (a, c) { var d = "x" === c ? "Left" : "Top", m = d.toLowerCase(), g = "scroll" + d, h = r[g](), n = p.max(q, c); t ? (f[g] = t[m] + (l ? 0 : h - r.offset()[m]), b.margin && (f[g] -= parseInt(e.css("margin" + d), 10) || 0, f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0), f[g] += v[m] || 0, b.over[m] && (f[g] += e["x" === c ? "width" : "height"]() * b.over[m])) : (d = e[m], f[g] = d.slice && "%" === d.slice(-1) ? parseFloat(d) / 100 * n : d); b.limit && /^\d+$/.test(f[g]) && (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n)); !a && 1 < b.axis.length && (h === f[g] ? f = {} : u && (k(b.onAfterFirst), f = {})) }); k(b.onAfter) } }) }; p.max = function (a, d) { var b = "x" === d ? "Width" : "Height", h = "scroll" + b; if (!n(a)) return a[h] - $(a)[b.toLowerCase()](); var b = "client" + b, k = a.ownerDocument || a.document, l = k.documentElement, k = k.body; return Math.max(l[h], k[h]) - Math.min(l[b], k[b]) }; $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = { get: function (a) { return $(a.elem)[a.prop]() }, set: function (a) { var d = this.get(a); if (a.options.interrupt && a._last && a._last !== d) return $(a.elem).stop(); var b = Math.round(a.now); d !== b && ($(a.elem)[a.prop](b), a._last = this.get(a)) } }; return p });
// iframe height
function resizeIframe(obj) {
  console.log(obj);
  obj.style.height = obj.contentWindow.$(document).height() + 'px';
}
// onload script
$(function () {
  // vertical scroll check
  $(window).on('scroll', function () {
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
  $('.input-file-form').each(function () {
    var target = $(this);
    target.find('input[type=file]').on('change', function () {
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
    target.parent().find('.icon-calendar').on('click', function () {
      target.focus();
    });
  });
  //input focue clear
  $(document).on('click', '.icon-clear', function (e) {
    $(e.target).parent().find('input').val('').change();
    $(e.target).parent().find('.icon-clear').removeClass('on').hide();
  });
  $(document).find('.input-wrap input.clearable').each(function (e) {
    var inputTarget = $(this);
    var clearVal = function () {
      inputTarget.val('');
    }
    inputTarget.on('focus', function () {
      console.log('focus');
      inputTarget.parent().find('.icon-clear').addClass('focus');
    }).on('blur', function () {
      inputTarget.parent().find('.icon-clear').removeClass('focus');
      inputTarget.parent().find('.icon-clear').removeClass('on').hide();
    });
    inputTarget.parent().on('mouseover focus', function () {
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
    }).on('mouseout', function () {
      if (inputTarget.parent().find('.icon-clear').hasClass('focus') == false) {
        inputTarget.parent().find('.icon-clear').removeClass('on').hide();
      }
    }).on('keyup', function () {
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
  $(window).resize(function () {
    contentWrapResize();
  });
  //data form table toggle
  $('.data-form-table .table-toggle-additional').on('click', '.btn-table-toggle', function () {
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
  //page tab sortable
  $('.page-tabs ul').sortable({
    axis: 'x'
  });
  // 지도 그룹 리스트
  $(document).find('.group-level-1 > ul > li > .group-title').on('click', '> .icon-toggle,> .btn-toggle', function () {
    var target = $(this);
    var targetList = $(this).parent().parent();
    var clickIndex = $(document).find('.group-level-1 > ul > li').index(targetList);
    $(document).find('.group-level-2 > ul > li').removeClass('active');
    $(document).find('.map-list .group-list .group-level-1 > ul > li').each(function () {
      var index = $(document).find('.map-list .group-list .group-level-1 > ul > li').index($(this));
      if (index == clickIndex) {
        $(this).toggleClass('active')
      } else {
        $(this).removeClass('active')
      }
    });
    var clickTitleIndex = $('.group-list .group-title').index($(this).parent());
    $('.group-list .group-title').each(function () {
      var titleIndex = $('.group-list .group-title').index($(this));
      console.log(clickTitleIndex, titleIndex);
      if (clickTitleIndex == titleIndex) {
        if ($(this).parent().hasClass('active') == true) {
          $(this).addClass('active');
        } else {
          $(this).toggleClass('active');
        }
      } else {
        $(this).removeClass('active');
      }
    });
    // $(this).parent().parent().toggleClass('active');
    setTimeout(function () {
      $('.group-list').scrollTo(targetList, 200)
    }, 300);
  });
  $(document).find('.group-level-2 > ul > li > .group-title').on('click', '> .icon-toggle,> .btn-toggle', function () {
    var targetList = $(this).parent().parent();
    var targetListGroup = $(this).parents('.group-level-2');
    var clickIndex = $(document).find('.group-level-2 > ul > li').index(targetList);
    $(document).find('.map-list .group-list .group-level-2 > ul > li').each(function () {
      var index = $(document).find('.map-list .group-list .group-level-2 > ul > li').index($(this));
      if (index == clickIndex) {
        $(this).toggleClass('active')
      } else {
        $(this).removeClass('active')
      }
    });
    var clickTitleIndex = $('.group-list .group-title').index($(this).parent());
    $('.group-list .group-title').removeClass('active');
    $('.group-list .group-title').each(function () {
      var titleIndex = $('.group-list .group-title').index($(this));
      console.log(clickTitleIndex, titleIndex);
      if (clickTitleIndex == titleIndex) {
        $(this).toggleClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
    $(this).parent().addClass('active');
    setTimeout(function () {
      $(targetListGroup).scrollTo(targetList, 200)
    }, 300);
    // $(this).parent().parent().toggleClass('active');
    // console.log(clickIndex)
  });
});