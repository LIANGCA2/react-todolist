import React, {Component} from 'react';
import Todoli from "./list"


class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            liNumber: 0,
            allLi: [],
            showLi: [],
            ActiveLi: [],
            CompleteLi: [],
            selectTab: "ALL"
        }
    }

    updateList =(id,className)=> {


        if (className == "checked") {

            var list = [];
            for (let i = 0; i < this.state.ActiveLi.length; i++) {
                if (this.state.ActiveLi[i].props.id != id) {
                    list.push(this.state.ActiveLi[i]);
                }
            }
            this.setState({
                ActiveLi: list
            })

        } else {
            var list = [];
            for (let i = 0; i < this.state.CompleteLi.length; i++) {
                if (this.state.CompleteLi[i].props.id != id) {
                    list.push(this.state.CompleteLi[i]);
                }
            }
            this.setState({
                CompleteLi: list
            })
        }
        this.refresh(this.state.selectTab,list);
    }


    addTodoLi = (event) => {
        var content = event.target.previousSibling.value;
        var id = this.generateUUID();
        var newList = this.state.allLi;
        var newLi = <Todoli content={content} id={id} key={newList.size} updateLi={(e,className) => this.updateList(e,className)}/>;

        newList.push(newLi);
        this.setState({
            allLi: newList
        })
        var ActiveList = this.state.ActiveLi;

        ActiveList.push(newLi);


        this.setState({
            ActiveLi: ActiveList
        })

        event.target.previousSibling.value = "";

        this.refresh(this.state.selectTab);
    }

    refresh = (selectTab,list) => {
        console.log(selectTab);
        this.setState({
            selectTab: selectTab
        })
        if (selectTab == "ALL") {
            this.setState({
                showLi: this.state.allLi
            })
        } else if (selectTab == "Active") {
            console.log(this.state.ActiveLi)
            this.setState({showLi: this.state.ActiveLi})
        } else {
            console.log(this.state.CompleteLi)
            this.setState({showLi: this.state.CompleteLi})
        }
    }


    selectTab = (event) => {
var list = [];
        var value = event.target.innerHTML;
        if (value == "ALL") {
          list =   this.state.allLi;
        }else if(value == "Active"){
            list =   this.state.ActiveLi;
        }else{
            list = this.state.CompleteLi;
        }

     this.refresh(value);
    }


    render() {


        return (<div>
                <div>
                    <input className="input-text" type="text" name="ListItem"
                    />
                    <div id="button" onClick={(this.addTodoLi).bind(this)}>Add</div>
                    <ol>
                        {this.state.showLi}
                    </ol>
                    <div>
                        <ul id="filters">
                            <li>
                                <a href="#" data-filter="all"
                                   className={this.state.selectTab == "ALL" ? "selected" : ""}
                                   onClick={(this.selectTab).bind(this)}>ALL</a>
                            </li>
                            <li>
                                <a href="#" data-filter="active"
                                   className={this.state.selectTab == "Active" ? "selected" : ""}
                                   onClick={(this.selectTab).bind(this)}
                                >Active</a>
                            </li>
                            <li>
                                <a href="#" data-filter="complete"
                                   className={this.state.selectTab == "Complete" ? "selected" : ""}
                                   onClick={(this.selectTab).bind(this)}
                                >Complete</a>
                            </li>
                        </ul>

                    </div>


                </div>
            </div>
        )
    }


    generateUUID() {
        /*jshint bitwise:false */
        var i,
            random;
        var uuid = '';

        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12
                ? 4
                : (i === 16
                    ? (random & 3 | 8)
                    : random)).toString(16);
        }
        return uuid;
    }


}


export default TodoForm;