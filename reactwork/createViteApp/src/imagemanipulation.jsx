import React, { useState } from 'react';

function Imagemanipulation() {
    const [ht, setHeight] = useState(100);
    const [wt, setWidth] = useState(100);
    const [r, setR] = useState(0);
    const [b, setB] = useState(0);
    const [g, setG] = useState(0);
    const [rotate, setRotate]=useState(0);



    

    const buttonstyle={ display:"block", width: "200px" , backgroundColor:"black",color:"white"};

    function incrementHeight() {
        setHeight(ht+1);
      };
    function incrementWidth()
    {
        setWidth(wt+1);
    }
    function dorotatec()
    {
        setRotate((rotate+20)%360);
    }
    function dorotatea()
    {
        setRotate((rotate-20)%360);
    }
    function changecolor()
    {
        setB((Math.random())*255);
        setR((Math.random())*255);
        setG((Math.random())*255);
    }

  return (
    <div style={{height:'400px' , width:'400px', border:"2px solid black", margin:"100px 100px"}}>
        <div style={{display:"flex", alignItems:'center', justifyContent:"center", height:"400px", flexDirection:"column", backgroundColor:`RGB(${r},${g},${b})`}}>

        <img src="https://picsum.photos/200/100"  height={ht} width={wt} style={{transform:`rotate(${rotate}deg)`}}/>

        <button style={buttonstyle} onClick={changecolor}>Background Color</button>
        <button style={buttonstyle} onClick={incrementHeight}>increase Height</button>
        <button style={buttonstyle} onClick={incrementWidth}>Enhance Width</button>
        <button style={buttonstyle} onClick={dorotatec}>Rotate clockwise</button>
        <button style={buttonstyle} onClick={dorotatea}>Rotate anticlockwise</button>
        </div>

    </div>
  )
}

export default Imagemanipulation