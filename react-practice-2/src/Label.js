import React from 'react';

export default class Label extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            isChecked : true
        }
    }

    render(){
        return(
            <ul className="list">
                <li>{this.props.name}</li>
            </ul>
        )
    }
}