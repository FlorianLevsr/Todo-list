import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Form from '../Form';
import Counter from '../Counter';
import Tasks from '../Tasks';
import Options from '../Options';

import './style.scss';

import data from '../../data/todos_list';

class App extends React.Component {

    state = {
        tasks: data,
        newTask: ''
    };

    countTasks = () => {

        const notDoneTasks = this.state.tasks.filter(task => !task.done);

        return notDoneTasks.length;
    };

    getInputValue = (inputValue) => {

        this.setState({ newTask: inputValue });

    };

    addTaskToState = () => {

        const { newTask, tasks } = this.state;

        const currentTask = {
            id: uuidv4(),
            label: newTask,
            done: false,
            favorite: false
        };

        const newTasks = [currentTask, ...tasks];

        this.setState({ tasks: newTasks, newTask: '' });

    };

    checkTask = (taskId) => {

        const newTasks = this.state.tasks.map((task) => {
            if (task.id === taskId)
                return {
                    ...task,
                    done: !task.done
                };
            return task;
        });

        this.setState({ tasks: newTasks });

    };

    deleteTask = (taskId) => {

        const newTasks = this.state.tasks.filter((task) => task.id !== taskId);

        this.setState({ tasks: newTasks });

    };

    changeFavStatus = (taskId) => {

        const newTasks = this.state.tasks.map((task) => {

            if (task.id === taskId) {
                return {
                    ...task,
                    favorite: !task.favorite
                }
            };

            return task;

        })

        this.setState({ tasks: newTasks });

    };

    sortTasks = () => {

        const { tasks } = this.state;

        const notDoneFav = tasks.filter(task => !task.done && task.favorite);
        const notDoneNotFav = tasks.filter(task => !task.done && !task.favorite);
        const doneFav = tasks.filter(task => task.done && task.favorite);
        const doneNotFav = tasks.filter(task => task.done && !task.favorite);

        const sortedTasks = [...notDoneFav, ...notDoneNotFav, ...doneFav, ...doneNotFav];

        this.setState({ tasks: sortedTasks });

    };

    deleteCompletedTasks = () => {

        const newTasks = this.state.tasks.filter((task) => !task.done);

        this.setState({ tasks: newTasks });

    };

    render() {

        const { tasks, newTask } = this.state;

        return (

            <div className="app">

                <Form
                    inputText={newTask}
                    getInputValueOnChange={this.getInputValue}
                    addTaskToStateOnSubmit={this.addTaskToState} />

                <Counter number={this.countTasks()} />

                <Tasks
                    list={tasks}
                    checkTaskOnChange={this.checkTask}
                    deleteTaskOnClick={this.deleteTask}
                    changeFavStatusOnClick={this.changeFavStatus} />

                <Options
                    sortTasksOnClick={this.sortTasks}
                    deleteCompletedTasksOnClick={this.deleteCompletedTasks} />

            </div>

        );

    };

};

export default App;