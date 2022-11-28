$(function(){
    $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
        $(this).stop().addClass("is-show");
    }
    });
});

$(function(){
    $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
    });
});

function check_contactform() {
    var name = $('input[name="name"]').val();
    var kana = $('input[name="kana"]').val();
    var dateofbirthY = $('input[name="dateofbirthY"]').val();
    var dateofbirthM = $('input[name="dateofbirthM"]').val();
    var dateofbirthD = $('input[name="dateofbirthD"]').val();
    var postcode = $('input[name="postcode"]').val();
    var address = $('input[name="address"]').val();
    var email = $('input[name="email"]').val();
    var tel = $('input[name="tel"]').val();

    var errmsg = "";
        
    if(name == "") {
        errmsg = "お名前を入力して下さい\n";
    }
        
    if(kana == "") {
        errmsg = errmsg + "フリガナを入力して下さい\n";
    }
        
    if(dateofbirthY == ""){
        errmsg = "生年月日を入力してください\n";
    }
    if(dateofbirthM == ""){
        errmsg = "生年月日を入力してください\n";
    }
    if(dateofbirthD == ""){
        errmsg = "生年月日を入力してください\n";
    }
    if(postcode == ""){
        errmsg = "郵便番号を入力してください\n";
    }
    if(address == ""){
        errmsg = "住所を入力してください\n";
    }
    if(email == "") {
        errmsg = errmsg + "メールアドレスを入力して下さい\n";
    }
        
    if(!email.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
        errmsg = errmsg + "メールアドレスをご確認下さい\n";
    }
        
    if(tel == "") {
        errmsg = errmsg + "電話番号を入力して下さい\n";
    }
        
    if(errmsg != "") {
        alert(errmsg);
        return false;
    }
        
    $('form[name="form"]').submit();
}
