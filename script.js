const Slider = document.querySelector('.slider')
const Slide = document.querySelectorAll('.slide')
const btnLeft = document.querySelector('.slider__btn--left')
const btnright = document.querySelector('.slider__btn--right')
const dotContainer = document.querySelector('.dots')

let curSlide = 0;
let maxSlide = Slide.length;
//.style.transform = 'scale(0.5)'
//Slider.style.overflow = 'visible '

const createDots = function(){
    Slide.forEach(function(_,i){
        dotContainer.insertAdjacentHTML('beforeend',`<button class="dots__dot" data-slide="${i}"></button>`)
    })
}
createDots()

dotContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('dots__dot')){
        const {slide} = e.target.dataset;
        goToSlide(slide)
        activateDot(slide)
    }
})

const activateDot = function(slide){
    document.querySelectorAll('.dots__dot').forEach((dot)=>{
        dot.classList.remove('dots__dot--active')
    })

    document.querySelector(`.dots__dot[data-slide='${slide}']`).classList.add('dots__dot--active')
}

const goToSlide = function(slide){
    Slide.forEach((s,i)=> (s.style.transform = `translateX(${100 * (i - slide)}%)`))
}
const nextSlide = function(){
    if(curSlide === maxSlide - 1){
        curSlide = 0
    }else{
        
        curSlide++;
    }
    
    goToSlide(curSlide)
    activateDot(curSlide)
}
const prevSlide = function(){
    if(curSlide === 0 ){
        curSlide = maxSlide - 1
    }else{
        curSlide--;
    }
    
    goToSlide(curSlide)
    activateDot(curSlide)
}
goToSlide(0)

btnright.addEventListener('click',nextSlide)
btnLeft.addEventListener('click',prevSlide)
document.addEventListener('keydown', function(e){
    if(e.key === 'Arrowleft') prevSlide();
    if(e.key === 'ArrowRight') nextSlide();
})

