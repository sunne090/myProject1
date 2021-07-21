
// 햄버거 메뉴 버튼 이벤트
$("#h-btn-d").click(function() { 
    $(".hamburger-menu-wrap,.page_cover").addClass("open"); 
}); 
$("#h-btn-d2").click(function() { 
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
    document.querySelector('.recommend').scrollBy(-800, 0);
};
// section6 좌우스크롤 이벤트
function mouseScrollRight3() {
    document.querySelector('.solution').scrollBy(500, 0);
};
function mouseScrollLeft3() {
    document.querySelector('.solution').scrollBy(-500, 0);
};


// 추천제품 마우스오버 이벤트
//item1
document.querySelector("#item1").addEventListener("mouseover",function(){
    document.querySelector(".cart1").style.display="block";
    document.getElementById("item1-img").src="https://www.ikea.com/kr/ko/images/products/nikkeby-chest-of-4-drawers-grey-green__0729238_pe738502_s5.jpg?f=xl"
});
document.querySelector("#item1").addEventListener("mouseout",function(){
    document.querySelector(".cart1").style.display="none";
    document.querySelector("#item1-img").src="https://www.ikea.com/kr/ko/images/products/nikkeby-chest-of-4-drawers-grey-green__0729044_pe738503_s5.jpg?f=s"
});

//item2
document.querySelector("#item2").addEventListener("mouseover",function(){
    document.querySelector(".cart2").style.display="block";
    document.getElementById("item2-img").src="https://www.ikea.com/kr/ko/images/products/nikkeby-chest-of-4-drawers-red__0729239_pe738507_s5.jpg?f=m"
});
document.querySelector("#item2").addEventListener("mouseout",function(){
    document.querySelector(".cart2").style.display="none";
    document.querySelector("#item2-img").src="https://www.ikea.com/kr/ko/images/products/nikkeby-chest-of-4-drawers-red__0729045_pe738504_s5.jpg?f=s"
});

//item3
document.querySelector("#item3").addEventListener("mouseover",function(){
    document.querySelector(".cart3").style.display="block";
    document.getElementById("item3-img").src="https://www.ikea.com/kr/ko/images/products/nikkeby-chest-of-2-drawers-grey-green__0729228_pe738500_s5.jpg?f=m"
});
document.querySelector("#item3").addEventListener("mouseout",function(){
    document.querySelector(".cart3").style.display="none";
    document.querySelector("#item3-img").src="https://www.ikea.com/kr/ko/images/products/nikkeby-chest-of-2-drawers-grey-green__0729042_pe738505_s5.jpg?f=s"
});

//item4
document.querySelector("#item4").addEventListener("mouseover",function(){
    document.querySelector(".cart4").style.display="block";
    document.getElementById("item4-img").src="https://www.ikea.com/kr/ko/images/products/ikea-ps-cabinet-white__0848070_pe564155_s5.jpg?f=s"
});
document.querySelector("#item4").addEventListener("mouseout",function(){
    document.querySelector(".cart4").style.display="none";
    document.querySelector("#item4-img").src="https://www.ikea.com/kr/ko/images/products/ikea-ps-cabinet-white__0644741_pe702929_s5.jpg?f=s"
});

//item5
document.querySelector("#item5").addEventListener("mouseover",function(){
    document.querySelector(".cart5").style.display="block";
    document.getElementById("item5-img").src="https://www.ikea.com/kr/ko/images/products/baggebo-tv-bench-metal-white__0981572_pe815404_s5.jpg?f=s"
});
document.querySelector("#item5").addEventListener("mouseout",function(){
    document.querySelector(".cart5").style.display="none";
    document.querySelector("#item5-img").src="https://www.ikea.com/kr/ko/images/products/baggebo-tv-bench-metal-white__1023961_pe833372_s5.jpg?f=s"
});

//item6
document.querySelector("#item6").addEventListener("mouseover",function(){
    document.querySelector(".cart6").style.display="block";
    document.getElementById("item6-img").src="https://www.ikea.com/kr/ko/images/products/lixhult-cabinet-metal-grey__0914779_pe784295_s5.jpg?f=s"
});
document.querySelector("#item6").addEventListener("mouseout",function(){
    document.querySelector(".cart6").style.display="none";
    document.querySelector("#item6-img").src="https://www.ikea.com/kr/ko/images/products/lixhult-cabinet-metal-grey__0644746_pe702934_s5.jpg?f=s"
});

//item7
document.querySelector("#item7").addEventListener("mouseover",function(){
    document.querySelector(".cart7").style.display="block";
    document.getElementById("item7-img").src="https://www.ikea.com/kr/ko/images/products/nikkeby-clothes-rack-grey-green__0756093_pe748727_s5.jpg?f=m"
});
document.querySelector("#item7").addEventListener("mouseout",function(){
    document.querySelector(".cart7").style.display="none";
    document.querySelector("#item7-img").src="https://www.ikea.com/kr/ko/images/products/nikkeby-clothes-rack-grey-green__0727606_pe735759_s5.jpg?f=s"
});

//item8
document.querySelector("#item8").addEventListener("mouseover",function(){
    document.querySelector(".cart8").style.display="block";
    document.getElementById("item8-img").src="https://www.ikea.com/kr/ko/images/products/kolbjoern-cabinet-in-outdoor-green__0762729_pe752180_s5.jpg?f=s"
});
document.querySelector("#item8").addEventListener("mouseout",function(){
    document.querySelector(".cart8").style.display="none";
    document.querySelector("#item8-img").src="https://www.ikea.com/kr/ko/images/products/kolbjoern-cabinet-in-outdoor-green__0762731_pe752182_s5.jpg?f=s"
});


//item9
document.querySelector("#item9").addEventListener("mouseover",function(){
    document.querySelector(".cart9").style.display="block";
    document.getElementById("item9-img").src="https://www.ikea.com/kr/ko/images/products/nikkeby-clothes-rack-grey-green__0756089_pe748723_s5.jpg?f=m"
});
document.querySelector("#item9").addEventListener("mouseout",function(){
    document.querySelector(".cart9").style.display="none";
    document.querySelector("#item9-img").src="https://www.ikea.com/kr/ko/images/products/nikkeby-clothes-rack-grey-green__0727608_pe735761_s5.jpg?f=s"
});

//item10
document.querySelector("#item10").addEventListener("mouseover",function(){
    document.querySelector(".cart10").style.display="block";
    document.getElementById("item10-img").src="https://www.ikea.com/kr/ko/images/products/fjaellbo-tv-bench-black__0850235_pe616397_s5.jpg?f=s"
});
document.querySelector("#item10").addEventListener("mouseout",function(){
    document.querySelector(".cart10").style.display="none";
    document.querySelector("#item10-img").src="https://www.ikea.com/kr/ko/images/products/fjaellbo-tv-bench-black__0473390_pe614545_s5.jpg?f=s"
});

//item11
document.querySelector("#item11").addEventListener("mouseover",function(){
    document.querySelector(".cart11").style.display="block";
    document.getElementById("item11-img").src="https://www.ikea.com/kr/ko/images/products/lennart-drawer-unit-white__0396978_pe607813_s5.jpg?f=s"
});
document.querySelector("#item11").addEventListener("mouseout",function(){
    document.querySelector(".cart11").style.display="none";
    document.querySelector("#item11-img").src="https://www.ikea.com/kr/ko/images/products/lennart-drawer-unit-white__0395412_pe564513_s5.jpg?f=s"
});


//item12
document.querySelector("#item12").addEventListener("mouseover",function(){
    document.querySelector(".cart12").style.display="block";
    document.getElementById("item12-img").src="https://www.ikea.com/kr/ko/images/products/fjaellbo-shelving-unit-black__0849481_pe616392_s5.jpg?f=s"
});
document.querySelector("#item12").addEventListener("mouseout",function(){
    document.querySelector(".cart12").style.display="none";
    document.querySelector("#item12-img").src="https://www.ikea.com/kr/ko/images/products/fjaellbo-shelving-unit-black__0473389_pe614540_s5.jpg?f=s"
});

// 이미지 마우스오버 시 태그 나타내기
//section4
document.getElementById("new-tag1").addEventListener("mouseover",function(){
    document.getElementById("new-tag1-s").style.display = "block";
    this.style.backgroundColor = "#ccc";   
});
document.getElementById("new-tag1").addEventListener("mouseout",function(){
    document.getElementById("new-tag1-s").style.display = "none";
    this.style.backgroundColor = "#fff"; 
});
document.getElementById("new-tag2").addEventListener("mouseover",function(){
    document.getElementById("new-tag2-s").style.display = "block";
    this.style.backgroundColor = "#ccc";   
});
document.getElementById("new-tag2").addEventListener("mouseout",function(){
    document.getElementById("new-tag2-s").style.display = "none";
    this.style.backgroundColor = "#fff"; 
});

//section5
document.getElementById("kid-tag1").addEventListener("mouseover",function(){
    document.getElementById("kid-tag1-s").style.display = "block";
    this.style.backgroundColor = "#ccc";   
});
document.getElementById("kid-tag1").addEventListener("mouseout",function(){
    document.getElementById("kid-tag1-s").style.display = "none";
    this.style.backgroundColor = "#fff"; 
});
document.getElementById("kid-tag2").addEventListener("mouseover",function(){
    document.getElementById("kid-tag2-s").style.display = "block";
    this.style.backgroundColor = "#ccc";   
});
document.getElementById("kid-tag2").addEventListener("mouseout",function(){
    document.getElementById("kid-tag2-s").style.display = "none";
    this.style.backgroundColor = "#fff"; 
});
document.getElementById("kid-tag3").addEventListener("mouseover",function(){
    document.getElementById("kid-tag3-s").style.display = "block";
    this.style.backgroundColor = "#ccc";   
});
document.getElementById("kid-tag3").addEventListener("mouseout",function(){
    document.getElementById("kid-tag3-s").style.display = "none";
    this.style.backgroundColor = "#fff"; 
});
document.getElementById("kid-tag4").addEventListener("mouseover",function(){
    document.getElementById("kid-tag4-s").style.display = "block";
    this.style.backgroundColor = "#ccc";   
});
document.getElementById("kid-tag4").addEventListener("mouseout",function(){
    document.getElementById("kid-tag4-s").style.display = "none";
    this.style.backgroundColor = "#fff"; 
});
document.getElementById("kid-tag5").addEventListener("mouseover",function(){
    document.getElementById("kid-tag5-s").style.display = "block";
    this.style.backgroundColor = "#ccc";   
});
document.getElementById("kid-tag5").addEventListener("mouseout",function(){
    document.getElementById("kid-tag5-s").style.display = "none";
    this.style.backgroundColor = "#fff"; 
});
document.getElementById("kid-tag6").addEventListener("mouseover",function(){
    document.getElementById("kid-tag6-s").style.display = "block";
    this.style.backgroundColor = "#ccc";   
});
document.getElementById("kid-tag6").addEventListener("mouseout",function(){
    document.getElementById("kid-tag6-s").style.display = "none";
    this.style.backgroundColor = "#fff"; 
});