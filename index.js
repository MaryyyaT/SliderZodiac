let slide=document.querySelectorAll('.slide');
let btn_left=document.querySelector('.slider__btn--left')
let btn_right=document.querySelector('.slider__btn--right');
let counter=0
slide.forEach((element, i)=>{
    
    element.style.transform=`translate(${(i-counter)*100}%)`

})

btn_right.addEventListener('click',()=>{
    if(counter==slide.length-1){
        counter=0
    }else{
        counter++
    }
    slide.forEach((element, i)=>{
    
        element.style.transform=`translate(${(i-counter)*100}%)`
        console.log(element)
    })
})

btn_left.addEventListener('click',()=>{
if(counter==0){
    counter=slide.length-1
}else{
    counter--
}
    slide.forEach((element, i)=>{
        console.log(element)
        element.style.transform=`translate(${(i-counter)*100}%)`
    
    })
})