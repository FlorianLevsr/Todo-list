import { FaSort, FaBan } from 'react-icons/fa';
import "./style.scss";

const Options = (props) => {

    const { sortTasksOnClick, deleteCompletedTasksOnClick } = props;

    return (

        <div className="options">
            <button type="button" className="options-button delete" onClick={() => deleteCompletedTasksOnClick()}><FaBan /><span className="options-button-text">Effacer tâches effectuées</span></button>
            <button type="button" className="options-button sort" onClick={() => sortTasksOnClick()}><FaSort /><span className="options-button-text">Trier les tâches</span></button>
        </div>

    );

};

export default Options;