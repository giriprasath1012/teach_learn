import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios"

function Dsaquiz()
{
    const [onescore,setonescore]=useState(0);
    const [twoscore,settwoscore]=useState(0);
    const [threescore,setthreescore]=useState(0);
    const [fourscore,setfourscore]=useState(0);
    const [fivescore,setfivescore]=useState(0);
    
    const[finalscore,setfinalscore]=useState(0);

    const [one,setone]=useState();
    const [two,settwo]=useState();
    const [three,setthree]=useState();
    const [four,setfour]=useState();
    const [five,setfive]=useState();

    const [submit,setsubmit]=useState(0);

   

    
    function check()
    {
        if(one =='b')
        {
            setonescore(1);
        }
        if(two =='a')
        {
            settwoscore(1);
        }
        if(three =='b')
        {
            setthreescore(1);
        }
        if(four =='c')
        {
            setfourscore(1);
        }
        if(five =='a')
        {
            setfivescore(1);
        }
        calc();
        
    
    }
    
    function calc()
    {
        setfinalscore(onescore+twoscore+threescore+fourscore+fivescore);
    }

    const navigate=useNavigate();
    const back=()=>
    {
        navigate('/courses')
    };

    return (
        <>
       
        {
            submit<=1 ?
            (

            
        <div className="disp">
            <div className="disphead">DSA QUIZ</div>
            <div className="dispquiz">
                
                <div >
                    <div >1) What is a data structure?</div>
                    <div>
                        <input type="radio" name="one" value="a" onChange={e=>setone(e.target.value)}></input><label>A programming language</label><br></br>
                        <input type="radio" name="one" value="b" onChange={e=>setone(e.target.value)}></input><label>A way to store and organize data</label><br></br>
                        <input type="radio" name="one" value="c" onChange={e=>setone(e.target.value)}></input><label>A type of computer hardware</label>
                    </div>
                    <br></br>

                    <div >
                    <div >2) Function call is an application of ?</div>
                    <div>
                        <input type="radio" name="two" value="a" onChange={e=>settwo(e.target.value)}></input><label>Stack</label><br></br>
                        <input type="radio" name="two" value="b" onChange={e=>settwo(e.target.value)}></input><label>Queue</label><br></br>
                        <input type="radio" name="two" value="c" onChange={e=>settwo(e.target.value)}></input><label>Tree</label>
                    </div>
                    <br></br>

                    <div >3) When the user tries to delete the element from the empty stack then the condition is said to be ?</div>
                    <div>
                        <input type="radio" name="three" value="a" onChange={e=>setthree(e.target.value)}></input><label>Overflow</label><br></br>
                        <input type="radio" name="three" value="b" onChange={e=>setthree(e.target.value)}></input><label>Underflow</label><br></br>
                        <input type="radio" name="three" value="c" onChange={e=>setthree(e.target.value)}></input><label>None of these above</label>
                    </div>
                    <br></br>

                    <div >4) Trees can be represented in </div>
                    <div>
                        <input type="radio" name="four" value="a" onChange={e=>setfour(e.target.value)}></input><label>Linked List</label><br></br>
                        <input type="radio" name="four" value="b" onChange={e=>setfour(e.target.value)}></input><label>Array</label><br></br>
                        <input type="radio" name="four" value="c" onChange={e=>setfour(e.target.value)}></input><label>All the above</label>
                    </div>
                    <br></br>

                    <div >5) Which of the following is an example of a cyclic graph?</div>
                    <div>
                        <input type="radio" name="five" value="a" onChange={e=>setfive(e.target.value)}></input><label>Complete Graph</label><br></br>
                        <input type="radio" name="five" value="b" onChange={e=>setfive(e.target.value)}></input><label>Trees</label><br></br>
                        <input type="radio" name="five" value="c" onChange={e=>setfive(e.target.value)}></input><label>Directed acyclic graph</label>
                    </div>
                    <br></br>
                </div>
                </div>
                
            </div>
            <div className="disphead">
                <button className="btn" onClick={sub}>Submit</button>
            </div>
         
        </div>
            ):
            (
                <div className="res hm2">
                    <div className="txt">
                        Result
                        <div className="res1">
                            <div className="pt-4">Your Score</div>
                        <div className="res1txt">{finalscore} / 5</div>
                        </div>

                        <div className="res2 w-auto ">
                        <div className="pt-4 text-cyan-500">Correct Answer</div>
                        <div>
                            <p>1)A way to store and organize data</p>
                            <p>2)Stack</p>
                            <p>3)Underflow</p>
                            <p>4)All the above</p>
                            <p>5)Complete Graph</p>
                        </div>

                        </div>

                        <div>
                            <button className="btn" onClick={back}>Back</button>
                        </div>
                        
                    </div>
                </div>
            )
        }
        </>

    );

    function sub()
    {
        setsubmit(submit+1);
        check();
        
    }

    

    

    

}

export default Dsaquiz;