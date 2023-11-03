const sliderPhotoArr = [
    'https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-1-524x617.png',
    'https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-2-524x617.png'
]

const body = document.querySelector('body')
const sliderImg = document.getElementById('sliderImg')

const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
let ind = 0;




body.addEventListener('mousemove',(event)=>{
    let x = Math.floor(event.clientX/100);
    let y =  Math.floor(event.clientY/100);
    sliderImg.style.transform = `translate(${-x}px,${-y}px)`
})







prevBtn.addEventListener('click',()=>{
    ind++
    ind = ind % sliderPhotoArr.length
    
    sliderImg.src = sliderPhotoArr[ind];

})

nextBtn.addEventListener('click',()=>{
    ind--
    ind<0?ind = sliderPhotoArr.length-1:null
    sliderImg.src = sliderPhotoArr[ind]
})

// setInterval(() => {
//     prevBtn.click()
// }, 4000);
