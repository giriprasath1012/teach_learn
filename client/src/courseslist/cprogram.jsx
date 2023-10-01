import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import NavBar from '../Navbar'
function cprogram()
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
    const [pointers,setpointers]=useState(false);
    function funpointers()
    {
        setpointers(true);
    }
   
    const [file,setfile]=useState(false);
    function funfile()
    {
        setfile(true);
    }

    const navigate=useNavigate();
    const navtoquiz=()=>
    {
        navigate('/courses/cprogram/quiz')
    };
   
    return (
        <>
        <NavBar />
        
        <div className="disp">
            <div className="disphead">
                C PROGRAMMING
            </div>
            <div className="disptopics">
                <h2 onClick={introset}>Introduction</h2>
                { intro ?
                (
                <div className="disptxt">
                C language Tutorial with programming approach for beginners and professionals, helps you to understand the C language tutorial easily. Our C tutorial explains each topic with programs.
                The C Language is developed by Dennis Ritchie for creating system applications that directly interact with the hardware devices such as drivers, kernels, etc.
                C programming is considered as the base for other programming languages, that is why it is known as mother language.
                A system programming language is used to create system software. C language is a system programming language because it can be used to do low-level programming (for example driver and kernel). It is generally used to create hardware devices, OS, drivers, kernels, etc. For example, Linux kernel is written in C.
                A procedure is known as a function, method, routine, subroutine, etc. A procedural language specifies a series of steps for the program to solve the problem.
                </div>
                ):
                (
                    <div></div>
                )}
                <h2 onClick={funarray}>Arrays</h2>
                { array ?
                (
                <div className="disptxt">
                    Arrays are fundamental data structures in the C programming language. They allow you to store multiple values of the same data type under a single variable name. Here are some key concepts related to arrays in C:
                    <br></br>
                    Declaration:
                    <li>An array is declared by specifying the data type of its elements, followed by the array name and the number of elements it can hold (the size of the array).</li>
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
                    Arrays are Contiguous:
                    <li>Array elements are stored in contiguous memory locations. This means that the memory occupied by each element is adjacent to the previous one.</li>
                    <br></br>
                    Multidimensional Arrays:
                    <li>C supports multidimensional arrays, such as 2D arrays (matrices) and 3D arrays.</li>
                    <li>Elements in a 2D array are accessed using two indices (row and column).</li>
                
                </div>
        
                ):
                (
                    <div></div>
                )}
                <h2 onClick={funpointers}>Pointers</h2>
                { pointers ?
                (
                <div className="disptxt">            
                    Pointers are a fundamental and powerful feature in the C programming language. They provide a way to work directly with memory addresses, which allows for efficient memory management and advanced programming techniques. Here are some key concepts related to pointers in C:
                    <br></br>
                    <br></br>
                    What is a Pointer:
                    <li>A pointer is a variable that stores the memory address of another variable.</li>
                    <li>Pointers are used to indirectly access the data stored in the memory location they point to.</li>
                    
                    <br></br>
                    Declaration of Pointers:
                    <li>Pointers are declared using the asterisk * symbol followed by the data type of the variable they will point to.</li>
                    <li>For example, to declare a pointer to an integer: int *ptr;</li>
                    
                    
                    <br></br>
                    Initialization of Pointers:
                    <li>Pointers can be initialized with the memory address of a variable of the same data type.</li>
                    <li>To initialize a pointer, use the address-of operator & to get the address of a variable.</li>
                    <li>Example : int x = 10; int *ptr = &x ;</li>
                   <br></br>
                   Dereferencing:

                    <li>To access the value stored at the memory address pointed to by a pointer, use the dereference operator *.</li>
                    <li>Dereferencing a pointer retrieves the value stored in the memory location.</li>
                    <li>Example : int y = *ptr;</li>
                    
                   <br></br>

                   Dynamic Memory Allocation:
                   <li>The malloc() and free() functions are used to allocate and deallocate memory dynamically.</li>
                   <li>Dynamic memory allocation allows you to create data structures of varying sizes during program execution.</li>
                   

                </div>
        
                ):
                (
                    <div></div>
                )}
                
                <h2 onClick={funfile}>Files</h2>
                { file ?
                (
                <div className="disptxt">
                    Working with files in C involves reading from and writing to external files. C provides a set of functions and libraries for file I/O (Input/Output). Here are some key concepts related to file handling in C:
                    <br></br>
                    File Streams:
                    <li>In C, file I/O operations are performed through file streams.</li>
                    <li>The standard library provides three standard file streams:
                        <p>#  stdin (standard input): Used for reading data from the keyboard.</p>
                        <p>#  stdout (standard output): Used for writing data to the console.</p>
                        <p>#  stderr (standard error): Used for writing error messages to the console.</p>
                    </li>
                    <li>To work with external files, you must create a file stream using the FILE data type.</li>
                    <br></br>
                    File Pointers:
                    <li>A file pointer is a variable of type FILE* used to keep track of the current position within a file.</li>
                    <li>File pointers are necessary for reading, writing, and positioning within a file.</li>
                    <br></br>
                    Opening a File:
                    <li>To open an existing file or create a new one, use the fopen() function.</li>
                    <li>You specify the filename, mode (e.g., "r" for reading, "w" for writing, "a" for appending), and the file stream to create or open.</li>
                    <li>Example : FILE *file_ptr = fopen("example.txt", "r");</li>
                    <br></br>
                    Closing a File:
                    <li>Always close a file using the fclose() function when you're done with it.</li>
                    <li>Closing a file flushes any buffered data to the file.</li>
                    <li>Example : fclose(file_ptr);</li>
                    <br></br>
                    Reading from a File:
                    <li>You can read data from a file using functions like fscanf(), fgets(), or fread().</li>
                    <li>Data read from a file is typically stored in variables or arrays.</li>
                    <li>Example : char buffer[100]; fscanf(file_ptr, "%s", buffer); </li>
                    <br></br>
                    Writing to a File:
                    <li>To write data to a file, you can use functions like fprintf(), fputs(), or fwrite().</li>
                    <li>Data is written to the file based on the specified format or as raw bytes.</li>
                    <li>Example : fprintf(file_ptr, "Hello, World!\n"); </li>
                    <br></br>
                    File Positioning:
                    <li>You can set the file position using functions like fseek() and retrieve the current position using ftell().</li>
                    <li>This is useful for random access within a file.</li>
                    <li>Example : fseek(file_ptr, 0, SEEK_SET); long position = ftell(file_ptr); </li>

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

export default cprogram;