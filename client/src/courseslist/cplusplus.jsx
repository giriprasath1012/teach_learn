import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import NavBar from '../Navbar'
function cplusplus()
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
  const [str,setstr]=useState(false);
  function funstr()
  {
      setstr(true);
  }
 
  const [vectors,setvectors]=useState(false);
  function funvectors()
  {
      setvectors(true);
  }

  const navigate=useNavigate();
  const navtoquiz=()=>
  {
      navigate('/courses/cplusplus/quiz')
  };
 
    return (
        <>
        <NavBar />
        
        <div className="disp">
            <div className="disphead">
                C++ Programming
            </div>
            <div className="disptopics">
                <h2 onClick={introset}>Introduction</h2>
                { intro ?
                (
                <div className="disptxt">
                Certainly! C++ is a popular programming language known for its versatility and power. It builds upon the C programming language and adds features like object-oriented programming (OOP), which allows you to create and work with classes and objects, making it suitable for a wide range of applications.
                </div>
                ):
                (
                    <div></div>
                )}
                <h2 onClick={funarray}>Arrays</h2>
                { array ?
                (
                <div className="disptxt">
                    Arrays in C++ are collections of elements of the same data type stored in contiguous memory locations. They provide a way to store and manipulate a fixed number of items of the same type. Here are some important concepts and operations related to arrays in C++:
                    <br></br>
                    Declaration:
                    <li>You declare an array in C++ by specifying its data type and size:</li>
                    <li>For example, to declare an integer array that can hold 5 elements: int myArray[5]; </li>
                    <br></br>
                    Accessing Elements:
                    <li>Array elements are accessed using the array name followed by square brackets [] and the index (position) of the element.</li>
                    <li>C uses zero-based indexing, meaning the first element is at index 0, the second at index 1, and so on.</li>
                    <li>Example : int element = myArray[2]; </li>
                    
                    <br></br>
                    Array Size:
                        <li>You can find the size of an array using the sizeof() operator. It returns the size in bytes.</li>
                        <li>Example: int size = sizeof(myArray) / sizeof(myArray[0]); </li>
                    <br></br>
                   
                    Multidimensional Arrays:
                    <li>C++ supports multidimensional arrays, such as 2D arrays (matrices) and 3D arrays.</li>
                    <li>Elements in a 2D array are accessed using two indices (row and column).</li>
                
                </div>
        
                ):
                (
                    <div></div>
                )}
                <h2 onClick={funstr}>Strings</h2>
                { str ?
                (
                <div className="disptxt">            
                    In C++, strings are sequences of characters, and they are represented using the std::string class from the Standard Library (STL). The std::string class provides a more flexible and convenient way to work with strings compared to character arrays (C-style strings). Here are some essential aspects of using strings in C++:
                    <br></br>
                    <br></br>
                    Declaring and Initializing Strings:
                    <li>You can declare and initialize strings in several ways:</li>
                    <li>std::string myString = "Hello, World!";</li>
                    <li>std::string emptyString;</li>
                    <br></br>
                    Basic String Operations:
                    <li>Concatenation: You can concatenate strings using the + operator:
                      <p>#  std::string firstName = "John";
                            std::string lastName = "Doe";
                            std::string fullName = firstName + " " + lastName;</p>
                    </li>
                   
                    <li>Accessing Characters: You can access individual characters of a string using the [] operator:
                      <p>#  char firstChar = myString[0];</p>
                    </li>
                    <li>String Length: You can obtain the length of a string using the length() or size() member functions:
                      <p>#  int len = myString.length();</p>
                    </li>
                    <li>String Manipulation:
                      <p>#  append(): Concatenate one string to another.</p>
                      <p>#  insert(): Insert a substring into a string at a specified position.</p>
                      <p>#  erase(): Remove a portion of a string.</p>
                      <p>#  replace(): Replace a portion of a string with another string.</p>
                    </li>
                    
                    
                    <br></br>
                    Substring:
                    <li>You can extract substrings using the substr() member function:</li>
                    <li>Example : std::string sub = myString.substr(6, 5);</li>
                   <br></br>
                   

                </div>
        
                ):
                (
                    <div></div>
                )}
                
                <h2 onClick={funvectors}>Vectors</h2>
                { vectors ?
                (
                <div className="disptxt">
                    In C++, a vector is a dynamic array that provides a more flexible and convenient way to work with collections of data compared to fixed-size arrays. Vectors are part of the Standard Template Library (STL) and are implemented using the std::vector class. Here's how to use vectors in C++:
                    <br></br>
                    Declaring and Initializing Vectors:
                    <li>You can declare and initialize vectors in several ways:</li>
                    <li>Create an empty vector:
                        <p>#  std::vector&ltint&gt myVector;</p>
                    </li>
                    <li>Create a vector with a specific size and default-initialized elements:
                      <p>#  std::vector$ltint&rt myVector(5);</p>
                    </li>
                    <li>Create a vector and initialize it with specific values:
                      <p>#  std::vector&ltint&rt myVector = {"{"} 1, 2, 3, 4, 5{"}"}</p>
                    </li>
                    <br></br>
                    Adding Elements:
                    <li>You can add elements to the vector using the push_back() function:</li>
                    <li>Example : myVector.push_back(6);</li>
                    <br></br>
                    Accessing Elements:
                    <li>You can access vector elements using the [] operator or the at() member function:</li>
                    <li>Example :int firstElement = myVector[0];</li>
                    <li>Example : int secondElement = myVector.at(1);</li>
                    <br></br>
                    Vector Size:
                    <li>You can obtain the size (number of elements) of a vector using the size() member function:</li>
                    <li>Example : int size = myVector.size();</li>
                    <br></br>
                    Removing Elements:
                    <li>You can remove elements from the end of the vector using the pop_back() function:</li>
                    <li>You can also remove elements at a specific position using the erase() function.</li>
                    <li>Example : char buffer[100]; myVector.pop_back(); </li>
                    <br></br>
                    
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

export default cplusplus;