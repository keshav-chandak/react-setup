import React from 'react';

export default class  DisplayComponent extends React.Component{
    constructor(props){
        super(props);
        console.log('inside constr')
        console.log(this.props);
    }
     increment(index){
         console.log(this.props.increment(index));     
           
            console.log(index)
        }
    render(){
        console.log(this.props);
        return (<div> lay here
        disp{this.props.myposts[1].code}
        <input type="button" onClick={this.increment.bind(this,1)}/>
            </div>);
        
    }
}

