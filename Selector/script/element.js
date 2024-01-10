//  車輪の再発明みたいなこと。
// let hideFlg = 0;
// $(function(){
//     $("button").click(function(){
//         if(hideFlg){
//             $("p").show();
//             hideFlg = 0;
//         }else{
//             $("p").hide();
//             hideFlg = 1;
//         }
//     });
// });

//  elementセレクタの例
$(function(){    
    $("button").click(function(){
        $("p").toggle();
    });
});