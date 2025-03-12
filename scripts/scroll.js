gsap.registerPlugin(ScrollTrigger);


/* ★★★★★ 2열 폭스바겐 공식서비스 ★★★★★ */
const service=document.querySelectorAll('.service_wrap .service_box li')

for(let i of service) i.style.opacity = '0'/* 기본설정 */
gsap.to(service, {
    scrollTrigger:{
        trigger:'.service_wrap .service_box li',
        start: "top 80%",
        end: "top 0%",
        scrub:true,
        markers:false,
        onEnter:() => {
            gsap.to(service,{
                opacity:1,
                y:100,
                duration:1,
                stagger:0.2, // ★ 순차적으로 등장 ★
            });
        },
    }
})


/* ★★★★★ 3열 The Golf 8 홍보섹션 ★★★★★ */
const movingCar=document.querySelector('.golf8_wrap .car')

movingCar.style.opacity = '0';/* 기본설정 */
gsap.to(movingCar, {
    scrollTrigger:{
        trigger:'.golf8_wrap',
        start: "top 40%",
        end: "top 0%",
        scrub:true,
        markers:false,
        onEnter:() => {
            gsap.to(movingCar,{
                opacity:1,
                y:-500,
                duration:1,
            });
        },
    },
})

const carPoint = document.querySelectorAll('.golf8_wrap .black_point li')

for(let i of carPoint) i.style.opacity = '0'/* 기본설정 */
gsap.to(carPoint, {
    scrollTrigger:{
        trigger:'.golf8_wrap .black_point li',
        start: "top 80%",
        end: "top 0%",
        markers:false,
        onEnter:() => {
            gsap.to(carPoint,{
                delay:1,
                opacity:1,
                y:50,
                duration:0.5,
                stagger:0.2, // ★ 순차적으로 등장 ★
            });
        },
    }
})