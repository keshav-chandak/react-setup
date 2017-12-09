import React from 'react';

import FormComponent from './Form.component';
import DisplayComponent from './Display.component';
class AlbumComponent extends React.Component{
    render(){

        console.log(...this.props.myposts);
        console.log('hi');
        return (<div >
        {this.props.mycomments[0]}
            <FormComponent></FormComponent>
            <DisplayComponent {...this.props}></DisplayComponent>
        
            
        

        </div>)
    }
}

export default AlbumComponent;