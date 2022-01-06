import React from "react";
import "./Cssde.css"
//import LancerDe from "./LancerDe";

class De extends React.Component{
    
    constructor (props){
        super(props);
        this.state={num:[1,1]};
        this.lancer =this.lancer.bind(this);
        this.score = {score:0};
        this.play = {play:0}
        this.Reset = this.Reset.bind(this);
        //this.img = {img:["./image1.png","./image2.png","./image3.png","./image4.png","./image5.png","./image6.png"]}
    }
  
}
export default De