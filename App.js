import React, { Component } from 'react';
// import style from  './css/style.css';

class App extends React.Component{
    render(){
        return(
            <div>
                <Calculator/>
            </div>
        );
    }
}

function CalFunctionality(props){
    if(props.value == "="){
        // return({eval({props.value})});
    }else{
        return(
            <Calculator  onClick={()=>props.onClick()}>
            {eval(props.value)}
            </Calculator>
        ); 
    }
}

class Calculator extends React.Component{

constructor(props){
super(props);
this.state = {
    numberArray:Array(8).fill(null),
    oprationsArray:Array(7).fill(null),
    number:"",
};
this.renderNumber()
}

renderNumber(i){
   
    this.handleClick(i);
return(
    <CalFunctionality value = {this.state.i} onClick={()=> this.handleClick(i)}/>
    

);
}


handleClick(i){
    const number = this.state.number;
    
    if(i == "="){
        if(eval(number) == "Infinity" || eval(number) == "-Infinity"){
            this.setState({
                number:"∞"
            });
        }else{
            try{
                this.setState({
                    number:eval(number)
                });
            }catch(e){
                console.log('error', e);        

                this.setState({
                    number:e
                });
            }
            
        }
        
       
    }else if(i == "clear"){
        this.setState({
            number:""
        });
    // }else if(number.charAt(number.length-1) == "-" && i == "-"){
    //     this.setState({
    //         number:number
    //     });
    }else{
        this.setState({
            number:number+i
        });
    }
  
}
render(){
return(
<div>
    <div className="ans-block" >{this.state.number}</div>
<div className="row-length">
<button style={{width:'50%',height:'100%', backgroundColor:' #009999'}} name={0} onClick={(e) => this.renderNumber("clear", e)}>CE</button>
<button style={{width:'50%' ,height:'100%'}} name="/" onClick={(e) => this.renderNumber("/", e)}>/</button>
</div>
<div className="row-length">
<button style={{width:'25%' ,height:'100%'}} name="7" onClick={(e) => this.renderNumber("7", e)}>7</button>
<button style={{width:'25%',height:'100%'}} name={8} onClick={(e) => this.renderNumber("8", e)}>8</button>
<button style={{width:'25%',height:'100%'}} name={9} onClick={(e) => this.renderNumber("9", e)}>9</button>
<button style={{width:'25%',height:'100%'}} name="x"onClick={(e) => this.renderNumber("*", e)}>X</button>
</div>
<div className="row-length">
<button style={{width:'25%',height:'100%'}} name={4} onClick={(e) => this.renderNumber("4", e)}>4</button>
<button style={{width:'25%',height:'100%'}} name={5} onClick={(e) => this.renderNumber("5", e)}>5</button>
<button style={{width:'25%',height:'100%'}} name={6} onClick={(e) => this.renderNumber("6", e)}>6</button>
<button style={{width:'25%',height:'100%',  backgroundColor:'#e6004c', fontweight: 'bold'}} name="-"onClick={(e) => this.renderNumber("-", e)}>-</button>
</div>
<div className="row-length">
<button style={{width:'25%',height:'100%'}} name={1} onClick={(e) => this.renderNumber("1", e)}>1</button>
<button style={{width:'25%',height:'100%'}} name={2} onClick={(e) => this.renderNumber("2", e)}>2</button>
<button style={{width:'25%',height:'100%'}} name={3} onClick={(e) => this.renderNumber("3", e)}>3</button>
<button style={{width:'25%',height:'100%'}} name="+" onClick={(e) => this.renderNumber("+", e)}>+</button>
</div>
<div className="row-length">
<button style={{width:'50%',height:'100%'}} value={0} onClick={(e) => this.renderNumber("0", e)}>0</button>
<button style={{width:'50%',height:'100%'}} value="=" onClick={(e) => this.renderNumber("=", e)}>=</button>
</div>
    
</div>

);
}
}


export default App;