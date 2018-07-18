import React, {Component} from 'react';


class Todoli extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:this.props.id,
            className:"",
            content:this.props.content,
        }
    }

    updateItem = ()=>{
        var className = this.state.className;

        if(className =="") {
            this.setState({
                className:"checked"
            })
            className = "checked";

        }else{
            this.setState({
                className:""
            })
            className = ""
        }

    this.props.updateLi(this.state.id,className);





    }

    render() {

        return (
            <li id={this.state.id} className={this.state.className}>
                <input name="done-todo" type="checkbox" className="done-todo" onChange={(this.updateItem).bind(this)}/>{this.state.content}</li>

        )
    }




}


export default Todoli;