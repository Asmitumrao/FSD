
function getInput()
{
    const part= document.getElementsByClassName('part');
    tag=part[0]
    // document.createElement('for')
    tag.innerHTML="<input  type='number' name='val' id='number'>   <input type='submit' id='submit' value='submit' name='val'> "
    const submit = document.getElementById('submit')
    submit.addEventListener("click",()=>{
    const bulb=document.getElementById('number');
    const num=(bulb.value)
    console.log(num)
    console.log(tag)
    createNumber(num,tag)
})
    // console.log(tag)

}


function createBulb()
{
    const img=document.createElement('img');
    img.src='https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png'
    img.style.height='200px'
    img.style.width='100px'

    return img;
}


 function createNumber(num,tag)
 {
    tag.innerHTML='';
    for(let i=0; i<num; i++)
    {
        const bulb=createBulb();
        tag.appendChild(bulb);
    }


 }