import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import NavBar from '../Navbar'
function python()
{
    const [intro,setintro]=useState(false);
    function introset()
    {
        setintro(true);
    }
    const [listtuple,setlist]=useState(false);
    function list()
    {
        setlist(true);
    }
    const [dict,setdict]=useState(false);
    function dictionary()
    {
        setdict(true);
    }
    const [fun,setfun]=useState(false);
    function pyfun()
    {
        setfun(true);
    }
    const [file,setfile]=useState(false);
    function files()
    {
        setfile(true);
    }

    const navigate=useNavigate();
    const navtoquiz=()=>
    {
        navigate('/courses/python/quiz')
    };
   
    return (
        <>
        <NavBar />
        
        <div className="disp">
            <div className="disphead">
                Python
            </div>
            <div className="disptopics">
                <h2 onClick={introset}>Introduction</h2>
                { intro ?
                (
                <div className="disptxt">
                Python tutorial provides basic and advanced concepts of Python. Our Python tutorial is designed for beginners and professionals.
                Python is a simple, general purpose, high level, and object-oriented programming language.
                Python is an interpreted scripting language also. Guido Van Rossum is known as the founder of Python programming.
                Python is a general-purpose, dynamic, high-level, and interpreted programming language. It supports Object Oriented programming approach to develop applications. It is simple and easy to learn and provides lots of high-level data structures.
                Python is an easy-to-learn yet powerful and versatile scripting language, which makes it attractive for Application Development.
                </div>
        
                ):
                (
                    <div></div>
                )}
                <h2 onClick={list}>List And Tuples</h2>
                { listtuple ?
                (
                <div className="disptxt">
                    In Python, lists and tuples are both used to store collections of items, but they have some key differences in terms of mutability and functionality. Here's an overview of lists and tuples in Python:
                    <h1 className="text-2xl  text-blue-700">List</h1>
                    Mutability: Lists are mutable, which means you can add, remove, or modify elements after creating a list.
                    <br></br>
                    Syntax: Lists are created using square brackets [], with elements separated by commas.
                    <br></br>
                    my_list = [1, 2, 3, 4, 5]
                    <br></br>
                    Operations:
                        <li>You can add elements to a list using the append() method or the extend() method to add multiple elements.</li>
                        <li>You can remove elements by index using the pop() method or by value using the remove() method.</li>
                        <li>You can change the value of an element by assigning a new value to a specific index.</li>
                        <li>Lists have various methods like insert(), sort(), and reverse() for manipulation.</li>
                    
                    Use Cases: Lists are typically used when you need a collection of items that may change during the program's execution. For example, storing a list of user names or to-do items.
                    <br></br>

                    <h1 className="text-2xl  text-blue-700">Tuples</h1>
                    
                    Immutability: Tuples are immutable, which means once you create a tuple, you cannot modify its elements. You can create a new tuple with updated elements.
                    <br></br>
                    Syntax: Tuples are created using parentheses (), with elements separated by commas.
                    <br></br>
                    my_tuple = (1, 2, 3, 4, 5)
                    <br></br>
                    Operations:
                    <li>You cannot add or remove elements from a tuple once it's created.</li>
                    <li>You can access elements by index, just like in lists.</li>
                    <li>Tuples support operations like slicing and concatenation.</li>
                    Use Cases: Tuples are often used when you want to create a collection of items that should not change during program execution, such as coordinates (x, y), configuration settings, or as keys in dictionaries (since they are immutable).
                    <br></br>
                    <h1 className="text-2xl  text-blue-700">Key Differences</h1>
                    <li>Mutability: Lists are mutable, while tuples are immutable.</li>
                    <li>Performance: Tuples are generally slightly faster than lists due to their immutability.</li>
                    <li>Syntax: Lists are created using square brackets [], while tuples use parentheses ().</li>
                    <li>Use Cases: Lists are suitable for collections of items that may change, while tuples are used for items that should remain constant.</li>
                
                </div>
        
                ):
                (
                    <div></div>
                )}
                <h2 onClick={dictionary}>Dictionary</h2>
                { dict ?
                (
                <div className="disptxt">
                   In Python, a dictionary is a built-in data structure used to store and manage collections of data in a key-value format. It is also known as an associative array or a hash map in other programming languages. Dictionaries are unordered, iterable, and mutable, and they are often used to store data as pairs of keys and their corresponding values. Here are the key concepts related to dictionaries in Python:
                    <br></br>
                    <br></br>
                    Dictionary Creation:
                    <li>Dictionaries are created using curly braces {} or the dict() constructor.</li>
                    <li>Key-value pairs are separated by colons : and individual pairs are separated by commas.</li>
                    
                    
                    <br></br>
                    Keys and Values:
                    <li>Keys are unique within a dictionary and must be immutable (e.g., strings, numbers, or tuples).</li>
                    <li>Values can be of any data type and can be duplicated.</li>
                    
                    
                    <br></br>
                    Accessing Elements:
                    <li>You can access values in a dictionary using square brackets [] and the key.</li>
                    <li>If a key is not found, it raises a KeyError. To avoid this, you can use the get() method or provide a default value.</li>
                   <br></br>
                   Modifying a Dictionary:

                    <li>You can add, modify, or delete key-value pairs in a dictionary.</li>
                    <li>To add a new key-value pair, simply assign a value to a new key.</li>
                    <li>To modify an existing key's value, assign a new value to that key.</li>
                    <li>To delete a key-value pair, use the del statement or the pop() method.</li>
                   <br></br>

                   Dictionary Methods:
                   <li>Dictionaries have several methods for working with key-value pairs, including keys(), values(), and items().</li>
                   <li>keys() returns a list of all keys.</li>
                   <li>values() returns a list of all values.</li>
                   <li>items() returns a list of key-value pairs as tuples.</li>

                </div>
        
                ):
                (
                    <div></div>
                )}
                <h2 onClick={pyfun}>Functions</h2>
                { fun ?
                (
                <div className="disptxt">
                    In Python, a function is a reusable block of code that performs a specific task or a set of tasks. Functions are essential for code organization, abstraction, and reusability. They help break down complex problems into smaller, manageable parts. Here are the key concepts related to functions in Python:
                    <br></br>
                    Function Definition:
                    <li>Functions are defined using the def keyword, followed by the function name, parentheses (), and a colon : to indicate the beginning of the function body.</li>
                    <li>The function body is indented and contains the code to be executed when the function is called.</li>
                    <br></br>
                    Function Call:
                    <li>To execute a function, you call it by its name followed by parentheses, passing any required arguments inside the parentheses.</li>
                    <br></br>
                    Parameters and Arguments:
                    <li>Parameters are placeholders in the function definition that specify what data the function expects as input.</li>
                    <li>Arguments are the actual values passed to the function when it is called.</li>
                    <br></br>
                    Return Statement:
                    <li>Functions can return values using the return statement. If no return statement is provided, the function returns None by default.</li>
                    <br></br>
                    Lambda Functions (Anonymous Functions):
                    <li>Lambda functions are small, anonymous functions defined using the lambda keyword. They are often used for simple operations.</li>

                </div>
        
                ):
                (
                    <div></div>
                )}
                <h2 onClick={files}>Files</h2>
                { file ?
                (
                <div className="disptxt">
                    Working with files in Python is a fundamental skill for various applications, such as reading and writing data, processing files, and handling text or binary data. Python provides built-in functions and libraries for file operations. Here are the key concepts related to working with files in Python:
                    <br></br>
                    File I/O:
                    <li>File I/O stands for Input/Output operations on files.</li>
                    <li>You can open files for reading ('r'), writing ('w'), appending ('a'), or in binary mode ('b' for binary data).</li>
                    <br></br>
                    Opening and Closing Files:
                    <li>To open a file, you use the open() function, specifying the file's name and the mode.</li>
                    <li>Always close files after you're done with them using the close() method or by using a with statement, which automatically closes the file when you're done.</li>
                    <br></br>
                    Reading from Files:
                    <li>read(): Reads the entire file content into a string.</li>
                    <li>readline(): Reads one line at a time.</li>
                    <li>readlines(): Reads all lines into a list.</li>
                    <br></br>
                    Writing to Files:
                    <li>write(): Writes a string to the file.</li>
                    <li>writelines(): Writes a list of strings to the file.</li>
                    <br></br>
                    Appending to Files:
                    <li>To append data to an existing file, open it in append mode 'a'.</li>

                    


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

export default python;