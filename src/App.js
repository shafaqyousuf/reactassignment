import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// react is javasript library for building user interfaces

function App() {
    // let a = 10;
    // let mobiles = [
    //     {
    //         name: "a30",
    //         ram: "4gb",
    //         rom: "64gb",
    //         camera: "50px",
    //         price: 2000,
    //         brand: "samsung"
    //     },
    //     {
    //         name: "note10",
    //         ram: "6gb",
    //         rom: "128gb",
    //         camera: "50px",
    //         price: 4000,
    //         brand: "samsung"
    //     },
    //     {
    //         name: "s10",
    //         ram: "3gb",
    //         rom: "128gb",
    //         camera: "10px",
    //         price: 5000,
    //         brand: "samsung"
    //     },
    //     {
    //         name: "iphone4",
    //         ram: "4gb",
    //         rom: "64gb",
    //         camera: "50px",
    //         price: 10000,
    //         brand: "iphone"
    //     },
    //     {
    //         name: "iphone4s",
    //         ram: "4gb",
    //         rom: "64gb",
    //         camera: "50px",
    //         price: 20000,
    //         brand: "iphone"
    //     },
    //     {
    //         name: "iphone5",
    //         ram: "4gb",
    //         rom: "64gb",
    //         camera: "50px",
    //         price: 30000,
    //         brand: "iphone"
    //     },
    //     {
    //         name: "iphone6",
    //         ram: "4gb",
    //         rom: "64gb",
    //         camera: "50px",
    //         price: 30000,
    //         brand: "iphone"
    //     },
    //     {
    //         name: "redminote10",
    //         ram: "4gb",
    //         rom: "64gb",
    //         camera: "50px",
    //         price: 10000,
    //         brand: "xiaomi"
    //     },
    //     {
    //         name: "redminote11",
    //         ram: "4gb",
    //         rom: "64gb",
    //         camera: "50px",
    //         price: 10000,
    //         brand: "xiaomi"
    //     },
    //     {
    //         name: "redmi10",
    //         ram: "4gb",
    //         rom: "64gb",
    //         camera: "50px",
    //         price: 10000,
    //         brand: "xiaomi"
    //     },
    //     {
    //         name: "redmi10pro",
    //         ram: "4gb",
    //         rom: "64gb",
    //         camera: "50px",
    //         price: 10000,
    //         brand: "xiaomi"
    //     },
    //     {
    //         name: "a3s",
    //         ram: "4gb",
    //         rom: "64gb",
    //         camera: "50px",
    //         price: 10000,
    //         brand: "oppo"
    //     },
    // ];

    // const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);
    let getEdit;

    let add = () => {
        // setCount(count + 1);
        // const allTodoData = {id: new Date().getTime().toString(), name:text}
        todo.push(text);
        console.log(todo);
        setTodo([...todo]);
        // setText("")
    }

    let del = (ind) => {
        let delTodo = todo.filter((x, i) => {
            return ind = i;
        })
        setTodo(delTodo);
    }

    let deleteAll = () => {
        setTodo([]);
        setText("");
    }

    let edit = (i) => {
        getEdit = todo.map((elem, ind) => {
            if (ind == i) {
                return todo[ind] === prompt("enter new todo")
            }
            console.log(getEdit)
        })
        setTodo([...todo])
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>hello react</h1>
                {/* <p>{count}</p> */}
                <input className='inp' value={text} type="text" onChange={(e) => {
                    setText(e.target.value)
                }} placeholder='Enter text' />
                <button className='btn' onClick={add}>add</button>
                <button className='btn' onClick={deleteAll}>delAll</button>

                {todo.map((x, i) => {
                    return (
                        <div key={i}>
                            <span>{x}</span>
                            <button onClick={() => edit(i)}>edit</button>
                            <button onClick={del}>del</button>
                        </div>)
                })}

            </header>
        </div>
    );
}

export default App;
