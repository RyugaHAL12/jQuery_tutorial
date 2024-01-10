//  jQueryセレクタのその他の例
$(function(){
    //  すべての要素を表示・非表示
    $(".allElmBtn").click(function(){
        $("*").toggle();
        window.alert('再度表示するにはページをリロードしてください');
    });

    //  現在のHTML要素を表示・非表示
    $(".thisElm").click(function () { 
        $('.thisElm').toggle();
        $('.afterElm').toggle();
    });

    //  thisだけではうまく動かなかったので無理やり切り替わるようにした
    $(".afterElm").click(function(){
        $('.afterElm').toggle();
        $('.thisElm').toggle();
    });

    //  最初のpタグを切り替える
    $(".first-p").click(function () { 
        $("p:first").toggle();
    });

    //  class=introを切り替える
    $(".intro-p").click(function (e) { 
        $(".intro").toggle();
    });

    //  後はhttps://memopad.bitter.jp/w3c/jquery/jquery_selectors.htmlで確認
});