import React from "react";
import De from "./De";
import "./Cssde.css";

class LancerDe extends De{
    
    lancer(){
        if (this.play.play<10) {
            this.setState({
                num:[(Math.floor(Math.random() * 6)+1),
                (Math.floor(Math.random() * 6)+1)]
               }
            );
            if (this.state.num[0]==this.state.num[1]) {
                this.score.score=this.score.score+this.state.num[0]+this.state.num[1];
            } else {
               if (this.score.score>0) {
                this.score.score=this.score.score-this.state.num[0]+this.state.num[1];
               } else {
                   this.score.score=0;
               }
            }
            this.play.play++;
        } else {
            this.play.play=0;
            this.score.score=0
        }
       
    }
    Reset(){
        window.location.reload(false);
    }
    

    render() {
        return (        
           <div class='a1' >
               <div class='a2'>
               <img src={require("./image"+this.state.num[0]+".png").default} width={200} height={200} ></img><img src={require("./image"+this.state.num[1]+".png").default} width={200} height={200} ></img>
               <br></br>
               </div>
               <button onClick={this.lancer}>Lancer les Dés</button>
               <h1>ruselte = {this.state.num[0]+this.state.num[1]}</h1>
               <h1 id='b1'>{
               this.state.num[0]==this.state.num[1] ? "win" : "try again"}</h1>
               <h1>jeu nbr : {this.play.play}    ||    score : {this.score.score}</h1>
               <button onClick={this.Reset}>Reset</button>
                
            </div>
        )
    }
}

export default LancerDe