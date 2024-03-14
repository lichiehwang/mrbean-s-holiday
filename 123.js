function fadeAnime(){
$('.zoomOutTrigger').each(function(){ //zoomOutTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('zoomOut');// 画面内に入ったらzoomOutというクラス名を追記
    }else{
    $(this).removeClass('zoomOut');// 画面外に出たらzoomOutというクラス名を外す
    }
    }); 
}
    $(window).scroll(function (){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
      });// ここまで画面をスクロールをしたら動かしたい場合の記述
    
    // 画面が読み込まれたらすぐに動かしたい場合の記述
      $(window).on('load', function(){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
      });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
    
      $(document).ready(function() {
        // 点击菜单项后的处理
        $('.menu-content ul li a').on('click', function() {
            // 关闭菜单
            $('#menu-btn-check').prop('checked', false);
        });
    });
    