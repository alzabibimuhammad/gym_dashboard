import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../../public/logoo.json";
  function Lottel(){

    return(
<div style={{width:'250px', height:'250px' }}>
<Lottie animationData={groovyWalkAnimation} loop={true} />
</div>
    )
 }
 export default Lottel