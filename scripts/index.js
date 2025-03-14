/* 메인 배너 스와이퍼 */
const mainSwiper = new Swiper('.main_swiper',{
    autoplay:{delay:3000,},
    loop:true,
    pagination: {
        el: ".main_swiper .swiper-pagination",
    },
});

/* 1열 자동차 스와이퍼 */
const allModelsSwiper = new Swiper('.all_models_swiper',{
    loop:true,
    spaceBetween:30,
    slidesPerView:1,
    centeredSlides:true,
    pagination: {
        el: ".models_wrap .swiper-pagination",
        clickable:true,
    },
    breakpoints:{
        1000:{slidesPerView:1.8,},
        700:{slidesPerView:1.4,},
        }
});

/* 1열 탭메뉴 active 클래스 이동 */
$('.models_wrap .tab_menu li').click(function(e){
    e.preventDefault();
    $('.models_wrap .tab_menu li').removeClass("active");
    $(this).addClass("active");
});

/* =============1열 컬러칩별 자동차 이미지 변경하기 */
document.addEventListener("DOMContentLoaded", function () {
    // 모든 스와이퍼 슬라이드를 가져옴
    const slides = document.querySelectorAll(".all_models_swiper .swiper-slide");

    slides.forEach(slide => {
        // 각 슬라이드 내부의 컬러칩 버튼들 가져오기
        const colorButtons = slide.querySelectorAll(".color_chip button");
        const carImages = slide.querySelectorAll(".car_img li");

        colorButtons.forEach(button => {
            button.addEventListener("click", function () {
                const selectedColor = this.dataset.color; // 클릭한 버튼의 data-color 값 가져오기
                
                // 모든 차량 이미지에서 active 클래스 제거
                carImages.forEach(img => {
                    img.classList.remove("active");
                });

                // 모든 컬러칩 버튼에서 active 클래스 제거 후, 클릭한 버튼만 active 추가
                colorButtons.forEach(btn => btn.classList.remove("active"));
                this.classList.add("active");

                // 선택한 색상의 이미지를 찾아 활성화
                const targetImage = slide.querySelector(`.car_img li img[data-color="${selectedColor}"]`);
                if (targetImage) {
                    targetImage.parentElement.classList.add("active"); /* 부모 li가 없을 것을 대비한 방어코드 */
                }
            });
        });
    });
});

/* 5열 이미지메뉴 active 클래스 이동 */
$('.id4_wrap .thumb li').click(function(e){
    e.preventDefault();
    $('.id4_wrap .thumb li').removeClass("active");
    $(this).addClass("active");
});

/* 5열 이미지 메뉴 클릭시 섬네일 변경 반응 */
const thumbnail = document.querySelectorAll('.id4_wrap .thumb li a img');
const bigImage = document.querySelector('.id4_wrap .img_box');

function bigSrc(num) {
    bigImage.style.backgroundImage = `url("./images/ID4_b${num}.jpg")`;  // 이미지 변경
}

// 모든 썸네일에 이벤트 리스너 추가 (반복문 사용)
thumbnail.forEach((img, index) => {
    img.addEventListener("click", () => {
        bigSrc(index + 1);
    });
});

/* 6열 탭메뉴 active 클래스 이동 */
$('.car_option_wrap .tab_menu li').click(function(e){
    e.preventDefault();
    $('.car_option_wrap .tab_menu li').removeClass("active");
    $(this).addClass("active");
});

/* 6열 탭메뉴 관련 스와이퍼 작업 */
const keyFeatures = new Swiper('.key_features',{
    loop:true,
    spaceBetween:25,
    slidesPerView:2,
    navigation:{
        nextEl:'.option_swiper_box .menu1 .next', //다음 버튼(CSS선택자 작성방식으로)
        prevEl:'.option_swiper_box .menu1 .prev', //이전 버튼
    },
    breakpoints:{
        1400:{slidesPerView:3,spaceBetween:40,},
        }
});
const driveAssist = new Swiper('.drive_assist',{
    loop:true,
    spaceBetween:25,
    slidesPerView:2,
    navigation:{
        nextEl:'.option_swiper_box .menu2 .next', //다음 버튼(CSS선택자 작성방식으로)
        prevEl:'.option_swiper_box .menu2 .prev', //이전 버튼
    },
    breakpoints:{
        1400:{slidesPerView:3,spaceBetween:40,},
        }
});
const careSystem = new Swiper('.care_system',{
    loop:true,
    spaceBetween:25,
    slidesPerView:2,
    navigation:{
        nextEl:'.option_swiper_box .menu3 .next', //다음 버튼(CSS선택자 작성방식으로)
        prevEl:'.option_swiper_box .menu3 .prev', //이전 버튼
    },
    breakpoints:{
        1400:{slidesPerView:3,spaceBetween:40,},
        }
});

/* 6열 탭메뉴 클릭시 해당 스와이퍼 보이기 */
const menuTap=document.querySelectorAll('.car_option_wrap .tab_menu li')
const menuList=document.querySelectorAll('.car_option_wrap .option_swiper_box div[class^=menu]')

function hidelist() {
    menuList.forEach(view => {
        view.style.display = 'none';
    });
}

menuTap.forEach((menu, index) => {
    menu.addEventListener('click', function (){
        hidelist()
        menuList[index].style.display = 'block';
    });
});

/* 전체 a태그 새로고침 안되게 하기-추후 common.js 파일로 이동 예정 */
const aTag=document.querySelectorAll('body a')
console.log(aTag[1]);

aTag.forEach(item => {
    item.addEventListener('click',function(e){
        e.preventDefault();
    })
});