import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function javaquiz()
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
        if(three =='c')
        {
            setthreescore(1);
        }
        if(four =='a')
        {
            setfourscore(1);
        }
        if(five =='b')
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
            <div className="disphead">PYTHON QUIZ</div>
            <div className="dispquiz">
                
                <div >
                    <div >1) Which of the following is not a Java features?</div>
                    <div>
                        <input type="radio" name="one" value="a" onChange={e=>setone(e.target.value)}></input><label>Architecture Neutral</label><br></br>
                        <input type="radio" name="one" value="b" onChange={e=>setone(e.target.value)}></input><label>Use of pointers</label><br></br>
                        <input type="radio" name="one" value="c" onChange={e=>setone(e.target.value)}></input><label>Object-oriented</label>
                    </div>
                    <br></br>

                    <div >
                    <div >2)  What do you mean by nameless objects?</div>
                    <div>
                        <input type="radio" name="two" value="a" onChange={e=>settwo(e.target.value)}></input><label>An object that has no reference.</label><br></br>
                        <input type="radio" name="two" value="b" onChange={e=>settwo(e.target.value)}></input><label>An object of a superclass created in the subclass.</label><br></br>
                        <input type="radio" name="two" value="c" onChange={e=>settwo(e.target.value)}></input><label>An object created by using the new keyword.</label>
                    </div>
                    <br></br>

                    <div >3) Which of the following is an immediate subclass of the Panel class?</div>
                    <div>
                        <input type="radio" name="three" value="a" onChange={e=>setthree(e.target.value)}></input><label>Frame class</label><br></br>
                        <input type="radio" name="three" value="b" onChange={e=>setthree(e.target.value)}></input><label>Window class</label><br></br>
                        <input type="radio" name="three" value="c" onChange={e=>setthree(e.target.value)}></input><label>Applet class</label>
                    </div>
                    <br></br>

                    <div >4) How many threads can be executed at a time?</div>
                    <div>
                        <input type="radio" name="four" value="a" onChange={e=>setfour(e.target.value)}></input><label>Multiple threads</label><br></br>
                        <input type="radio" name="four" value="b" onChange={e=>setfour(e.target.value)}></input><label>Only one thread</label><br></br>
                        <input type="radio" name="four" value="c" onChange={e=>setfour(e.target.value)}></input><label>Only main (main() method) thread</label>
                    </div>
                    <br></br>

                    <div >5) Which of these is a super class of all errors and exceptions in the Java language?</div>
                    <div>
                        <input type="radio" name="five" value="a" onChange={e=>setfive(e.target.value)}></input><label>RunTimeExceptions</label><br></br>
                        <input type="radio" name="five" value="b" onChange={e=>setfive(e.target.value)}></input><label>Throwable</label><br></br>
                        <input type="radio" name="five" value="c" onChange={e=>setfive(e.target.value)}></input><label>None of the above</label>
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
                            <p>1)Use of pointers</p>
                            <p>2)An object that has no reference.</p>
                            <p>3)Applet class</p>
                            <p>4)Multiple threads</p>
                            <p>5)Throwable</p>
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

export default javaquiz;