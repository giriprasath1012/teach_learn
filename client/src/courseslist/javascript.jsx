import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import NavBar from '../Navbar'
function javascript()
{
    const [intro,setintro]=useState(false);
    function introset()
    {
        setintro(true);
    }
    const [array,setarray]=useState(false);
    function funarray()
    {
        setarray(true);
    }
    const [json,setjson]=useState(false);
    function funjson()
    {
        setjson(true);
    }
   
    const [events,setevents]=useState(false);
    function funevents()
    {
        setevents(true);
    }

    const [html,sethtml]=useState(false);
    function funhtml()
    {
        sethtml(true);
    }

    const navigate=useNavigate();
    const navtoquiz=()=>
    {
        navigate('/courses/javascript/quiz')
    };
   
    return (
        <>
        <NavBar />
        
        <div className="disp">
            <div className="disphead">
                JAVASCRIPT
            </div>
            <div className="disptopics">
                <h2 onClick={introset}>Introduction</h2>
                { intro ?
                (
                <div className="disptxt">
                JavaScript is an object-based scripting language which is lightweight and cross-platform.
                JavaScript is not a compiled language, but it is a translated language. The JavaScript Translator (embedded in the browser) is responsible for translating the JavaScript code for the web browser.
                JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document. 
                It was introduced in the year 1995 for adding programs to the webpages in the Netscape Navigator browser. Since then, it has been adopted by all other graphical web browsers. With JavaScript, users can build modern web applications to interact directly without reloading the page every time. 
                The traditional website uses js to provide several forms of interactivity and simplicity.
                </div>
                ):
                (
                    <div></div>
                )}
                <h2 onClick={funarray}>Array and Functions</h2>
                { array ?
                (
                <div className="disptxt">
                    <br></br>
                    <h1 className="text-2xl  text-blue-700">Array</h1>
                    <br></br>
                    In JavaScript, an array is a data structure that allows you to store and manipulate a collection of values. Arrays can hold elements of any data type, including numbers, strings, objects, and even other arrays. Here are some key concepts related to arrays in JavaScript:
                    <br></br>
                    Creating and accessing Arrays:
                    <li>You can create an array in JavaScript using square brackets [] and adding elements separated by commas.</li>
                    <li>Example : let fruits = ["apple", "banana", "orange"];</li>
                    <li>You can access elements of an array using their index, where the first element has an index of 0.</li>
                    <li>Example : let firstFruit = fruits[0]; </li>
                    <br></br>
                    Array Methods:
                    <li>JavaScript provides a wide range of built-in methods to manipulate arrays, such as push(), pop(), shift(), unshift(), concat(), join(), slice(), splice(), and more.</li>
                    <li>You can determine the number of elements in an array using the length property.</li>
                    <li>Example : let numFruits = fruits.length; </li>
                    <br></br>
                    <h1 className="text-2xl  text-blue-700">Functions</h1>
                    <br></br>
                    Functions are a fundamental concept in JavaScript, allowing you to encapsulate and reuse blocks of code. Functions are blocks of code that can be defined and executed whenever needed. Here are key concepts related to functions in JavaScript:
                    <br></br>
                    <br></br>
                    Function Declaration:
                    <li>You can declare a function in JavaScript using the function keyword, followed by the function name, a list of parameters enclosed in parentheses, and the function body enclosed in curly braces.</li>
                    <li>Functions can also be defined as expressions and assigned to variables or passed as arguments to other functions. These are known as anonymous functions. </li>
                   
                    <br></br>
                    Arrow Functions :
                    <li>Arrow functions provide a concise way to define functions, especially for short, one-liner functions. They have a more concise syntax and lexical this binding.</li>
                    <li>You can call (invoke) a function by using its name followed by parentheses, passing any required arguments.</li>
                    <br></br>
                    Function Parameters:
                    <li>Functions can accept parameters, which are values that can be used within the function's body.</li>
                    <li>Parameters are declared within the parentheses when defining the function.</li>
                    <li>You can specify default values for function parameters, which will be used if no value is provided when calling the function.</li>
                    
                    
                
                </div>
        
                ):
                (
                    <div></div>
                )}
                <h2 onClick={funjson}>JSON</h2>
                { json ?
                (
                <div className="disptxt">            
                    JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is often used to exchange data between a server and a web application, as well as for configuration files and data storage. In JavaScript, JSON is a native data format, and you can work with JSON data using JavaScript objects. Here are the key concepts related to JSON in JavaScript:
                    <br></br>
                    <br></br>
                    JSON Syntax:
                    <li>JSON data is represented as a collection of key-value pairs enclosed in curly braces {}.</li>
                    <li>Keys must be strings enclosed in double quotes, followed by a colon, and values can be strings, numbers, objects, arrays, booleans, or null.</li>
                    <li>Example : 
                        {"{"}
                        "name": "John", "age": 30, "courses": ["Math", "History"], "address": {"{"}
                        "street": "123 Main St", "city": "Coimbatore"
                        {"}"}
                    </li>

                    <br></br>
                    JSON and JavaScript Objects:
                    <li>JSON data is often parsed into JavaScript objects using the JSON.parse() method, and JavaScript objects can be converted into JSON strings using the JSON.stringify() method.</li>
                    <li>Example : 
                        {"{"}
                        const jsonString = '{"{"}"name": "Alice", "age": 25{"}"}'; const jsonObject =
                        JSON.parse(jsonString); const jsonStringAgain = JSON.stringify(jsonObject);
                        {"}"}
                    </li>
                    
                    
                    <br></br>
                    JSON with XMLHttpRequest and Fetch:
                    <li>JSON is commonly used with XMLHttpRequest or the Fetch API to retrieve data from a server in JSON format.</li>
                    <li>Example : 
                        {"{"}
                        fetch('https://example.com/api/data') .then(response =&gt; response.json())
                        .then(data =&gt; console.log(data)) .catch(error =&gt; console.error(error));
                        {"}"}
                    </li>

                    

                </div>
        
                ):
                (
                    <div></div>
                )}
                
                <h2 onClick={funevents}>Javascript Events</h2>
                { events ?
                (
                <div className="disptxt">
                    In JavaScript, events are actions or occurrences that happen in the browser, such as a user clicking a button, moving the mouse, pressing a key, or a web page finishing loading. Events allow you to respond to user interactions and create dynamic, interactive web applications. Here are key concepts related to events in JavaScript:
                    <br></br>
                    Event Handlers:
                    <li>An event handler is a function or code snippet that responds to a specific event when it occurs.</li>
                    <li>Event handlers are attached to HTML elements to define what should happen when an event occurs.</li>
                    <li>Example : 
                        {"{"}
                        buttonElement.addEventListener("click", function() {"{"}
                        alert("Button clicked!");
                        {"}"});
                        {"}"}
                    </li>

                    <br></br>
                    Event Types:
                    <li>Mouse events (e.g., click, mousedown, mouseup, mousemove).</li>
                    <li>Keyboard events (e.g., keydown, keyup).</li>
                    <li>Form events (e.g., submit, input, change).</li>
                    <li>Focus events (e.g., focus, blur).</li>
                    <li>Document events (e.g., DOMContentLoaded, load, unload).</li>
                    <li>Custom events (events created by developers).</li>
                    <br></br>
                    Event Listening:
                    <li>To respond to an event, you can use the addEventListener() method to attach an event listener to an HTML element.</li>
                    <li>Event listeners take the event type and a function as arguments.</li>
                    <br></br>
                    Removing Event Listeners:
                    <li>You can remove event listeners using the removeEventListener() method.</li>
                    <li>The event type and the function reference must match the one used during attachment.</li>
                    <li>Example : 
                        {"{"}
                        element.removeEventListener("click", eventHandler);
                        {"}"}
                    </li>
                    <br></br>
                    
                    
                    

                </div>
        
                ):
                (
                    <div></div>
                )}

                <h2 onClick={funhtml}>Javascript with HTML</h2>
                { html ?
                (
                <div className="disptxt">
                    JavaScript is commonly used in conjunction with HTML (Hypertext Markup Language) to create dynamic and interactive web pages. This combination allows you to manipulate and update the content and behavior of a web page in response to user interactions. Here are some key concepts when using JavaScript with HTML:
                    <br></br>
                    HTML Elements:
                    <li>
                        HTML provides the structure and content of a web page using elements such as
                        headings (&lt;h1&gt;), paragraphs (&lt;p&gt;), images (&lt;img /&gt;), forms (&lt;/p&gt;&lt;form&gt;), buttons (&lt;button&gt;), and more.
                    </li>


                    <li>
                        {"{"}
                        To include JavaScript code in an HTML document, you can use the(&lt;script &gt;)tag. You can place it in the &lt;head&gt; or &lt;body&gt; section of your HTML.
                    </li>


                    
                    <br></br>
                    
                    Inline and External JavaScript:
                    <li>You can include JavaScript directly within HTML elements using event attributes like onclick, onmouseover, and onload.</li>
                    <li>
                        
                        It's common to link to external JavaScript files using the src attribute in the(&lt;script &gt;)tag. This separates your JavaScript code from your HTML for better organization.
                    </li>
                    
                    

                </div>
        
                ):
                (
                    <div></div>
                )}
            </div>
            <div className="dispbtn">
                <button className="btn" onClick={navtoquiz}>Take a Test</button>
            </div>
        </div>
        </>

    );
}

export default javascript;