import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // return ( 
    //     <div className="home">
    //         { error && <div> { error } </div> }
    //         { isPending && <div> Loading...</div> }
    //         { blogs && <BlogList blogs = {blogs} title = "All Blogs" /> } 
    //     </div>
    //  );

    const [ name, setName ] = useState('okedo');
    const [ age, setAge ] = useState(25);
    const [ count, setCount ] = useState(0);
    const [ text, setText ] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [chars, setChars] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    const handleClick = () => {
        setName('marvel');
        setAge(30);
    }

    const increment = () => {
        setCount(count + 1);  
    }

    const inputText = (e) => {
        setText(e.target.value);
    }

    const handleToggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    const handleCharCounter = (e) => {
        setChars(e.target.value);
    }

    const handleInputValue = (e) => {
        setInputValue(e.target.value);  
    }

    const handleSubmit = () => {
        if(inputValue.trim()) {
            setTodos([...todos, inputValue.trim()]);
            setInputValue('');
        }
    }

    const handleDelete = (index) => {
        const updatedTodos = todos.filter(([], todo) => {
            return todo !== index;
        })
        setTodos(updatedTodos);
    }

    return (
        <div className="contaimer">
                <div className="naming">
                <p>My name is { name } and I am { age } years old</p>
                <button onClick={ handleClick }>Click me</button>
            </div>
            <br />

            <div className="counting">
            <p>{ count }</p>
            <button onClick={ increment }>Count</button>
            </div>
            <br />

            <div className="inputField">
                <input type="text"  value={text} onChange={inputText}/>
                <p>input text: { text }</p>
            </div>
            <br />

            <div className="vissibility">
                <button onClick={handleToggleVisibility}>Show/Hide me</button>
                {isVisible && <p>Toggle me!</p>}
            </div>
            <br />

            <div className="counter">
                <textarea onChange={handleCharCounter}></textarea>
                <p>TODO: {chars.length}</p>
            </div>
            <br />

            <div className="todos">
                <input type="text" value={inputValue} onChange={handleInputValue}/>
                <button onClick={handleSubmit}>Add Todo</button>
                <ul>
                    {(() => {
                        const elements = [];
                        todos.forEach((todo, index) => {
                            elements.push(
                                <li>
                                    {todo}
                                    <button onClick={(() => handleDelete(index))}>delete todo</button>
                                </li>
                            );
                        });
                        return elements;
                    })()}
                </ul>
            </div>
        </div>
    );
}
 
export default Home;