import { HiPlus } from 'react-icons/hi';
import "./style.scss";

const Form = (props) => {

    const { inputText, getInputValueOnChange, addTaskToStateOnSubmit } = props;

    return (

        <form
            className="todo-form"
            onSubmit={(event) => {
                event.preventDefault();
                addTaskToStateOnSubmit();
            }}
        >
            <input
                type="text"
                placeholder="Ajouter une tâche..."
                className="todo-input"
                value={inputText}
                onChange={(event) => {
                    getInputValueOnChange(event.target.value);
                }}
            />

            <button type="submit" className="submit-button"><HiPlus /></button>

        </form>

    );

};

export default Form;