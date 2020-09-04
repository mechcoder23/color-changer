import React from 'react'
import Box from '../Box/Box.js'
import './style.css'

class Background extends React.Component{

    constructor(props){
        super(props);
        this.state={
            selectedColor:'white'
        };
    }
    
    changeBg= (event) =>{
        this.setState({
            selectedColor:event.target.value
        });
    };

    render = () =>{
        return(
            <div className="bg-cont" style={{backgroundColor:this.state.selectedColor}}>
                <Box onChange={this.changeBg} currentColor={this.state.selectedColor}/>
            </div>
        )
    };
};

export default Background;
