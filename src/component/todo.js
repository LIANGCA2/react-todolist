import React, {Component} from 'react';
import TodoList from "./list"


class TodoForm extends Component {

    render() {
        return (<div>
                <div>
                    <input className="input-text" type="text" name="ListItem"
                    />
                    <div id="button">Add</div>
<TodoList/>


                    <div>
                        <ul id="filters">
                            <li>
                                <a href="#" data-filter="all" className="selected">ALL</a>
                            </li>
                            <li>
                                <a href="#" data-filter="active"
                                   >Active</a>
                            </li>
                            <li>
                                <a href="#" data-filter="complete"
                                   >Complete</a>
                            </li>
                        </ul>

                    </div>


                </div>
            </div>
        )
    }
}


export default TodoForm;