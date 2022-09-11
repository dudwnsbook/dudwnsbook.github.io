const changeWrap = document.querySelector(".changeImg-wrap")
const randomImg = changeWrap.querySelector("img")
const imgArray = ['change_1.jpg','change_2.jpg','change_3.jpg','change_4.jpg']

function changeImg(){
    const randomNum = Math.floor(Math.random()*imgArray.length)
    randomImg.src=`img/${imgArray[randomNum]}`
}



setInterval(changeImg,1000)