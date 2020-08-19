$(function () {


  // box1
  // --------------------------------------

  $('.js-toggleButton').click(function () {
    $('.box1').fadeToggle(100);
  });

  $('.js-toggleButton2').click(function () {
    $('.box2').fadeToggle(100);
  });


  // header
  // --------------------------------------

  $('#header').each(function () {
    var $window = $(window),
      $stickyHeader = $(this).find('.sticky-header'),//スティッキーヘッダー
      stickyHeaderHeight = $stickyHeader.outerHeight(),//スティッキーヘッダーの高さ
      headerHeight = $(this).outerHeight();//ヘッダー全体の高さ

    //画面外へ
    $stickyHeader.css({ top: '-' + stickyHeaderHeight + 'px' });

    //ページの一番上からヘッダーの高さ分下方向にスクロールしたらtopを0に、それ以外は画面外へ
    $window.on('scroll', function () {
      if ($window.scrollTop() > headerHeight) {
        $stickyHeader.css({ top: 0 });
      } else {
        $stickyHeader.css({ top: '-' + stickyHeaderHeight + 'px' });
      }
    });

    //任意のタイミングでイベントを発生させる
    $window.trigger('scroll');
  });



});
