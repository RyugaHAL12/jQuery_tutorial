//  classセレクタ
$(function(){
    $("button").click(function(){
        $(".toggleElm").toggle();

        //  $要素とクラスの同時指定
        $("div.toggleDiv").toggle();
    });
});