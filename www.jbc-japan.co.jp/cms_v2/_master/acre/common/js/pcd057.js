//mod-navi-headerのリンク領域に行数に応じて適切なpaddingを付与するコード
$(document).ready(function(){
  var max = $('.mod-set-navi-header .mod-navi-inner ul').height();

  //ナビゲーションの配列でループ
  $('.mod-set-navi-header span.mod-gnav-item a').each(function(){
    var padding = (max - $(this).height())/2;
    $(this).css('padding-top', padding);
    $(this).css('padding-bottom', padding);
  });

  //暫定対応（旧方式部品削除後、以下削除する
  if($('.mod-gnav')[0]) {
    var gnav_max = $('.mod-gnav .mod-gnav-inner ul').height();
    //ナビゲーションの配列でループ
    $('.mod-gnav span.mod-gnav-item a').each(function(){
      var padding = (gnav_max - $(this).height())/2;
      $(this).css('padding-top', padding);
      $(this).css('padding-bottom', padding);
    });
  }
  if($('.mod-gnav2')[0]) {
    var gnav_max = $('.mod-gnav2 .mod-gnav-inner ul').height();
    //ナビゲーションの配列でループ
    $('.mod-gnav2 span.mod-gnav-item a').each(function(){
      var padding = (gnav_max - $(this).height())/2;
      $(this).css('padding-top', padding);
      $(this).css('padding-bottom', padding);
    });
  }
  // 暫定対応ここまで

  //トップページのみパンくず部品削除
  var url_arr = location.href.split('/');
  //公開ページ用
  if(url_arr[3] === '' || url_arr[3] === 'index.html') {
    if($('.mod-part-topicpath')[0]) $('.mod-part-topicpath').remove();
  }
  //CMS プレビュー用
  if((url_arr[2] === 'www.next-cms-dev.com' ||
      url_arr[2] === 'stg.next.blogdehp.jp' ||
      url_arr[2] === 'www.wms-sample.com' ||
      url_arr[2] === 'www.akibare-hp.com') && url_arr[3] === 'cms_v2') {
    if($('.mod-part-topicpath')[0]) removePartTopicpathForCMS();
  }

  // IEのobjectFit対応
  try {
    objectFitImages();
  } catch( e ) {
    console.log( e.message );
  }
});

function removePartTopicpathForCMS(suffix) {
  suffix = suffix || '';
  var remove_flg = true
  var part_elm = $('.mod-part-topicpath' + suffix);
  part_elm.each(function() {
    i = $(this).find('[itemscope]').length;
    if(i > 1) remove_flg = false
  });
  if(remove_flg) part_elm.remove();
}

// 部品固定表示用
(function() {
  // 負荷軽減
  function loadTimer(process) {
    let timer = null;
    clearTimeout(timer);
    timer = setTimeout(function() {
      process;
    }, 300);
  }

  // 上部固定
  function fixTop() {
    function triggerFixTop() {
      $(window).on('load unload scroll resize', function() {
        gnavFixTop();
      });
      $(window).trigger('load unload scroll resize');
    }

    function gnavFixTop() {
      if ($(window).scrollTop() < gnavOuterTop) {
        // 通常表示
        gnav.removeClass('fixed');
        gnav.css('left', '');
      } else {
        // 固定表示
        gnav.addClass('fixed');
        gnav.css('left', 0 - window.scrollX);
      }
    }

    // 固定表示か判定
    const gnav = $('[class^="t0-b-headerMenu"][class$="--fixDisplay"]');
    if (!gnav[0]) return;
    const gnavOuter = gnav.parent();
    const gnavOuterTop = gnavOuter.offset().top;
    // 浮いても高さを維持するため、高さを固定にする
    gnavOuter.css('height', gnavOuter.height());
    gnavOuter.css('box-sizing', 'content-box');
    // 負荷対策をかませて処理を実行
    loadTimer(triggerFixTop());
  }

  // 下部固定
  function fixBottom() {
    function triggerFixBottom() {
      let startPosition = 0;
      let currentScrollTop = 0;
      $(window).on('load unload scroll resize', function() {
        // ウィンドウの下位置を取得
        const headerBottom = $('.area-header').height() - $('.area-header').offset().top;
        currentScrollTop = $(window).scrollTop();
        gotopFix.parent().parent().css('margin-top', '');
        // パフォーマンス対策
        gotopFix.css('will-change', 'display, opacity, margin-bottom');
        // 下スクロール時の動き
        if (startPosition <= currentScrollTop) {
          // ヘッダーより下に行った時
          if (headerBottom <= $(window).scrollTop()) {
            gotopFixDown.fadeIn(200);
            gotopFixStopfooter.fadeIn(200);
          }
        // 上スクロール時の動き
        } else {
          // ヘッダーまで戻った時
          if (headerBottom > $(window).scrollTop()) {
            gotopFix.fadeOut(200);
          }
          if (headerBottom < $(window).scrollTop()) {
            gotopFix.fadeIn(200);
          }
        }
        scrollDownStopFooter();
        startPosition = currentScrollTop;
      })
      $(window).trigger('load unload scroll resize');
    }

    function scrollDownStopFooter() {
      const windowBottom = $(window).scrollTop() + $(window).height();
      const footerTop = $('.area-footer').offset().top;
      // フッターの位置まで来たら追従させる
      if (footerTop < windowBottom) {
        // フッターとログインリンクの高さぶん上にずらす
        const footerViewHeight = $('.area-footer').outerHeight() + $('.mod-login').outerHeight() + windowBottom - $(document).height();
        gotopFixStopfooter.css('margin-bottom', footerViewHeight + parseInt($(gotopFixStopfooter).css('margin'), 10));
      // フッターから離れたら戻す
      } else {
        gotopFixStopfooter.css('margin-bottom', '');
      }
    }

    const gotopFix = $('[class^="t0-b-goToTop"][class*="--fixDisplay"]');
    // gototop固定か判定
    if (!gotopFix[0]) return;
    const gotopFixDown = $('[class^="t0-b-goToTop"][class$="--fixDisplay-scrollDown"]');
    const gotopFixStopfooter = $('[class^="t0-b-goToTop"][class$="--fixDisplay-scrollDownStopFooter"]');
    // 負荷対策をかませて処理を実行
    loadTimer(triggerFixBottom());
  }

  fixTop();
  fixBottom();
})();

//アンカーリンクをクリックしたときのスクロールアニメーション
$('.area_all').eq(0).attr('id', 'js_top'), $('a[href^=#]').click(function() {
  const gnavFixed = $('.fixed');
  // gnavが固定の時はgnavの下位置まで移動させるため
  const gnavBottom = gnavFixed.outerHeight();
  const href= $(this).attr('href');
  const target = $(href == '' ? '' : href);
  const positionAnker = target.offset().top - gnavBottom;
  $('body, html').animate({ scrollTop: positionAnker }, 300, 'easeInOutQuad');
  return false;
});

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
*/
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend( jQuery.easing,
{
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
  }
});
