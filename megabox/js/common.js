// header 2depth background
// :not(:nth-of-type(5))
// 스토어 메뉴는 '하위메뉴가 없으므로 제외'
$('.main > li:not(:nth-of-type(5)').mouseenter(()=>{
    $('#header').addClass('active');
    // $(this)는 마우스가 들어간 메인메뉴 li
    $(this).find('#gnb .sub').addClass('active');
});
$('.main > li').mouseleave(()=>{
    $('#header').removeClass('active');
});
$('#header .subbar').mouseenter(()=>{
    $('#header').removeClass('active');
});
$('#header .subbar').mouseleave(()=>{
    $('#header').removeClass('active');
});

// footer - looking for theater
$(".btn_looking_theater").on("click", () => {
    $(".theater").addClass("active");
});
$(".closed").on("click", () => {
    $(".theater").removeClass("active");
});