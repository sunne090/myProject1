
// 햄버거 메뉴 버튼 이벤트
$("#h-btn-d").click(function() { 
    $(".hamburger-menu-wrap,.page_cover").addClass("open"); 
}); 
$("#cancel").click(function() { 
    $(".hamburger-menu-wrap,.page_cover").removeClass("open"); 
});



// scroll-top이벤트
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
        document.getElementById("scrollTopPc").style.display = "block";    
    } else {
        document.getElementById("scrollTopPc").style.display = "none";
    }
}
function topFunction() {
    $('html,body').animate( {scrollTop:0 }, 500);
};

// section2 좌우스크롤 이벤트
function mouseScrollRight() {
    document.querySelector('.list').scrollBy(1200, 0);
};
function mouseScrollLeft() {
    document.querySelector('.list').scrollBy(-1200, 0);
};
// section3 좌우스크롤 이벤트
function mouseScrollRight2() {
    document.querySelector('.recommend').scrollBy(800, 0);
};
function mouseScrollLeft2() {
    document.querySelector('.recommend').scrollBy(-1800, 0);
};
