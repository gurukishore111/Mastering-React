import React, { Component } from 'react';
/* Counter.jsx is components  */
class Counter extends Component {
    state = { 
        value:this.props.counter.value,
      /*  imageUrl:'https://picsum.photos/200'*/
       /*  dynamically render the list*/
       tags:[],
     };

     handleIncreament = () =>{
         //normal fnction cannot call the value in state
         //setstate is used to update the state value
         console.log("Clicked Increament!")
         this.setState({ value:this.state.value + 1})
     }

     renderContain(){
         if (this.state.tags.length === 0)
             return<h4>There is no Tag!</h4>
         
         else{
             return <ul>
             {this.state.tags.map(tag =><li key={tag}>{tag}</li>)} 
          </ul>
         }
     }



    render() { 
       //console.log("props",this.props)
        return ( 
            <div>
                {/* <h1>Counter</h1> */}
               {/* setting attribute from state by changing "" to {} */}
              { /* <img src={this.state.imageUrl} alt="" />*/}
              {/* this.state.count is emedding expression */}
              {/* two method to apply the style in jsx One:defined it statically like state,Two: written in between{{}}   */}
                {this.props.children}
             <span  className={this.getbadgeColor()} style={{fontSize:15}} /*style={{fontSize:50,fontWeight:"bolder"}}*/>{this.formatTime()}</span>
            <button onClick={this.handleIncreament} className="btn btn-secondary btn-sm">Increment</button>
              {/*  dynamically render the list*/}

              {/* {this.state.tags.length === 0 && <h4>Please create the tag!</h4>}
                {this.renderContain()} */}
                <button onClick={ () => this.props.OnDelete(this.props.counter.id)}  className="btn btn-danger btn-sm m-2">Delete</button>
            </div> 
        );
    }
    getbadgeColor() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatTime(){
        const {value}  = this.state;
        return value === 0 ? "Zero":value
    }

}
 
export default Counter;