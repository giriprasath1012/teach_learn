import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import NavBar from '../Navbar'
function java()
{
    const [intro,setintro]=useState(false);
    function introset()
    {
        setintro(true);
    }
    const [clsobj,setclsobj]=useState(false);
    function funclass()
    {
        setclsobj(true);
    }
    const [except,setexcept]=useState(false);
    function funexcept()
    {
        setexcept(true);
    }
   
    const [thread,setthread]=useState(false);
    function funthread()
    {
        setthread(true);
    }

    const [applet,setapplet]=useState(false);
    function funapplet()
    {
        setapplet(true);
    }

    const navigate=useNavigate();
    const navtoquiz=()=>
    {
        navigate('/courses/java/quiz')
    };
   
    return (
        <>
        <NavBar />
        
        <div className="disp">
            <div className="disphead">
                JAVA
            </div>
            <div className="disptopics">
                <h2 onClick={introset}>Introduction</h2>
                { intro ?
                (
                <div className="disptxt">
                Java is an object-oriented, class-based, concurrent, secured and general-purpose computer-programming language. It is a widely used robust technology.
                Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language.
                Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995. James Gosling is known as the father of Java. Before Java, its name was Oak. Since Oak was already a registered company, so James Gosling and his team changed the name from Oak to Java.
                Any hardware or software environment in which a program runs, is known as a platform. Since Java has a runtime environment (JRE) and API, it is called a platform.
                </div>
                ):
                (
                    <div></div>
                )}
                <h2 onClick={funclass}>Class and Object</h2>
                { clsobj ?
                (
                <div className="disptxt">
                    In Java, a class is a blueprint or template for creating objects, and an object is an instance of a class. The class defines the structure and behavior of the objects it can create. Here are the key concepts related to classes and objects in Java:
                    <br></br>
                    Class:
                    <li>A class is a user-defined data type that represents a blueprint for objects.</li>
                    <li>It defines the attributes (fields or properties) and methods (functions or behaviors) that the objects of the class will have.</li>
                    <li>Classes in Java are declared using the class keyword.</li>
                    <br></br>
                    Object:
                    <li>An object is an instance of a class. It represents a real-world entity based on the class's blueprint.</li>
                    <li>You create objects by using the new keyword and a constructor of the class.</li>
                    <li>Example : MyClass obj1 = new MyClass(42);  int value = obj1.getMyField(); </li>
                    
                    <br></br>
                    Constructor:
                        <li>A constructor is a special method within a class used to initialize objects of that class.</li>
                        <li>It is called when you create a new object of the class using the new keyword. </li>
                        <li>Constructors have the same name as the class and may take parameters.</li>
                    <br></br>
                    Access Modifiers:
                    <li>Access modifiers like public, private, and protected are used to control the visibility of class members (fields and methods).</li>
                    <li>public members are accessible from anywhere.</li>
                    <li>private members are only accessible within the class.</li>
                    <li>protected members are accessible within the class and its subclasses.</li>
                    <br></br>
                    Method Overloading:
                    <li>In Java, you can have multiple methods in a class with the same name but different parameter lists.This is known as method overloading.</li>
                    
                
                </div>
        
                ):
                (
                    <div></div>
                )}
                <h2 onClick={funexcept}>Exception Handling</h2>
                { except ?
                (
                <div className="disptxt">            
                    Exception handling is a fundamental concept in Java that allows you to gracefully handle and recover from unexpected or exceptional situations that may occur during program execution. These situations are represented by objects called exceptions. Java provides a comprehensive mechanism for working with exceptions. Here are the key concepts related to exception handling in Java:
                    <br></br>
                    <br></br>
                    Exception:
                    <li>An exception is an event that occurs during the execution of a program, disrupting the normal flow of instructions.</li>
                    <li>Exceptions can be caused by various factors, such as user input errors, file I/O errors, arithmetic errors, and more.</li>
                    <li>Exceptions are represented as objects of classes derived from the java.lang.Exception class or its subclasses.</li>
                    <br></br>
                    Checked vs. Unchecked Exceptions:
                    <li>Checked exceptions are exceptions that the compiler forces you to either handle (using try-catch) or declare (using throws) in your code. Examples include IOException and SQLException.</li>
                    <li>Unchecked exceptions (also known as runtime exceptions) do not need to be declared or caught explicitly. Examples include NullPointerException and ArrayIndexOutOfBoundsException.</li>
                    
                    
                    <br></br>
                    Try-Catch Blocks:
                    <li>A try block is used to enclose the code that may throw exceptions.</li>
                    <li>A catch block is used to specify how to handle exceptions if they occur within the try block.</li>
                    <li>You can have multiple catch blocks to handle different types of exceptions.</li>
                   <br></br>
                   Throwing Exceptions:

                    <li>You can explicitly throw an exception using the throw statement.</li>
                    <li>This is useful when you want to handle exceptional situations in your code.</li>
                    
                   <br></br>

                   Finally Block:
                   <li>The finally block is used to specify code that should be executed regardless of whether an exception is thrown or not.</li>
                   <li>It is commonly used for resource cleanup (e.g., closing files or network connections).</li>
                   <br></br>

                   Custom Exception Classes:
                   <li>You can create custom exception classes by extending the Exception class or its subclasses.</li>
                   <li>This allows you to define your own exception types with meaningful names and messages.</li>

                </div>
        
                ):
                (
                    <div></div>
                )}
                
                <h2 onClick={funthread}>Threading</h2>
                { thread ?
                (
                <div className="disptxt">
                    Multithreading is a powerful and important concept in Java that allows you to execute multiple threads (smaller units of a program) concurrently within a single Java program. Multithreading can improve the efficiency and responsiveness of your applications by making better use of available CPU resources. Here are the key concepts related to threading in Java:
                    <br></br>
                    Thread:
                    <li>A thread is the smallest unit of execution in a Java program.</li>
                    <li>Java threads are managed by the Java Virtual Machine (JVM).</li>
                    <li>The main thread is automatically created when a Java program starts, but you can create additional threads as needed.</li>
                    <br></br>
                    Thread Creation:
                    <li>In Java, you can create threads by extending the Thread class or implementing the Runnable interface.</li>
                    <li>Extending the Thread class allows you to override the run() method to define the thread's behavior.</li>
                    <li>Implementing the Runnable interface is another way to create threads. It allows for better class design because you can separate the thread's behavior from its class.</li>
                    <br></br>
                    Thread Lifecycle:
                    <li>New: When a thread is created but has not yet started.</li>
                    <li>Runnable: When a thread is ready to run and waiting for CPU time.</li>
                    <li>Running: When a thread is actively executing its code.</li>
                    <li>Blocked/Waiting: When a thread is waiting for some condition to be met.</li>
                    <li>Terminated: When a thread has finished its execution.</li>
                    <br></br>
                    Thread Synchronization:
                    <li>When multiple threads access shared resources concurrently, synchronization is needed to avoid race conditions and ensure data consistency.</li>
                    <li>Java provides synchronized blocks/methods and the synchronized keyword to protect critical sections of code.</li>
                    
                    <br></br>
                    Thread Intercommunication:
                    <li>Threads can communicate and coordinate their activities using mechanisms like wait(), notify(), and notifyAll().</li>
                    <li>These methods are used for thread synchronization and signaling.</li>
                    
                    

                </div>
        
                ):
                (
                    <div></div>
                )}

                <h2 onClick={funapplet}>Applet</h2>
                { applet ?
                (
                <div className="disptxt">
                    Applets were a significant feature of early Java technology, allowing developers to embed interactive Java applications within web pages. However, with the decline of browser support for Java applets and the rise of alternative web technologies, such as HTML5 and JavaScript, the use of Java applets has become less common. Nevertheless, it's still valuable to understand the concept of Java applets for historical context and as part of your Java knowledge.
                    <br></br>
                    What is an Applet:
                    <li>An applet is a small Java program that runs within a web browser. It is typically used to create interactive and dynamic content on a web page.</li>
                    <li>Applets are embedded in HTML pages using the  applet  tag.</li>
                    
                    <br></br>
                    
                    Applet Lifecycle:
                    <li>init(): Called when the applet is initialized, typically used for one-time setup.</li>
                    <li>start(): Called when the applet is started, for starting animations or other ongoing tasks.</li>
                    <li>paint(Graphics g): Called when the applet needs to be rendered, for drawing graphics.</li>
                    <li>stop(): Called when the applet is stopped, for pausing animations or other ongoing tasks.</li>
                    <li>destroy(): Called when the applet is destroyed, for releasing resources.</li>
                    <br></br>
                    AWT Methods:
                    <li>Frame()</li>
                    <li>add(component)</li>
                    <li>setLayout(layoutManager)</li>
                    <li>setSize(width, height)</li>
                    <li>setLocation(x, y)</li>
                    <li>setBackground(color)</li>
                    <li>setForeground(color)</li>
                    <li>addActionListener(listener)</li>
                    <li>addKeyListener(listener)</li>
                    <li>addMouseListener(listener)</li>
                    <li>drawRect(x, y, width, height)</li>
                    
                    

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

export default java;