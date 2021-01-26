import { BsStar, BsStarFill, BsTrashFill } from 'react-icons/bs';

import "./style.scss";

const Tasks = (props) => {

    const { list, checkTaskOnChange, deleteTaskOnClick, changeFavStatusOnClick } = props;

    return (

        <ul className="task-list">

            {
                list.map(task => {
                    return (

                        <li key={task.id} className={task.done ? "task task--done" : "task"}>
                            <input type="checkbox" checked={task.done} onChange={() => checkTaskOnChange(task.id)} />
                            <span>{task.label}</span>
                            <div className="actions">
                                <span className="task-favorite" onClick={() => { changeFavStatusOnClick(task.id) }}> {task.favorite ? <BsStarFill /> : <BsStar />}</span>
                                <span className="task-delete" onClick={() => { deleteTaskOnClick(task.id) }}> <BsTrashFill /></span>
                            </div>
                        </li>

                    );
                })
            }


        </ul>

    );

};

export default Tasks;