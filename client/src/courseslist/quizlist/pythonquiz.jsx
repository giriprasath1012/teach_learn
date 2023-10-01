import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function pythonquiz()
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
        if(two =='c')
        {
            settwoscore(1);
        }
        if(three =='a')
        {
            setthreescore(1);
        }
        if(four =='c')
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
                    <div >1) Who developed the Python language?</div>
                    <div>
                        <input type="radio" name="one" value="a" onChange={e=>setone(e.target.value)}></input><label>Zim Den</label><br></br>
                        <input type="radio" name="one" value="b" onChange={e=>setone(e.target.value)}></input><label>Guido van Rossum</label><br></br>
                        <input type="radio" name="one" value="c" onChange={e=>setone(e.target.value)}></input><label>Wick van Rossum</label>
                    </div>
                    <br></br>

                    <div >
                    <div >2) What is the maximum possible length of an identifier?</div>
                    <div>
                        <input type="radio" name="two" value="a" onChange={e=>settwo(e.target.value)}></input><label>16</label><br></br>
                        <input type="radio" name="two" value="b" onChange={e=>settwo(e.target.value)}></input><label>32</label><br></br>
                        <input type="radio" name="two" value="c" onChange={e=>settwo(e.target.value)}></input><label>None of these above</label>
                    </div>
                    <br></br>

                    <div >3) Which of the following is correctly evaluated for this function? pow(x,y,z) </div>
                    <div>
                        <input type="radio" name="three" value="a" onChange={e=>setthree(e.target.value)}></input><label>(x**y) % z</label><br></br>
                        <input type="radio" name="three" value="b" onChange={e=>setthree(e.target.value)}></input><label>(x / y) / z</label><br></br>
                        <input type="radio" name="three" value="c" onChange={e=>setthree(e.target.value)}></input><label>(x**y) / z</label>
                    </div>
                    <br></br>

                    <div >4)Which one of the following syntaxes is the correct syntax to read from a simple text file stored in ''d:\java.txt''?</div>
                    <div>
                        <input type="radio" name="four" value="a" onChange={e=>setfour(e.target.value)}></input><label>Infile = open(''d:\java.txt'',''r'')</label><br></br>
                        <input type="radio" name="four" value="b" onChange={e=>setfour(e.target.value)}></input><label>Infile = open.file(''d:\\java.txt'',''r'')</label><br></br>
                        <input type="radio" name="four" value="c" onChange={e=>setfour(e.target.value)}></input><label>Infile = open(''d:\\java.txt'', ''r'')</label>
                    </div>
                    <br></br>

                    <div >5) Which of the following option is not a core data type in the python language?</div>
                    <div>
                        <input type="radio" name="five" value="a" onChange={e=>setfive(e.target.value)}></input><label>Dictionary</label><br></br>
                        <input type="radio" name="five" value="b" onChange={e=>setfive(e.target.value)}></input><label>Class</label><br></br>
                        <input type="radio" name="five" value="c" onChange={e=>setfive(e.target.value)}></input><label>Lists</label>
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
                            <p>1)Guido van Rossum</p>
                            <p>2)None of these above</p>
                            <p>3)(x**y) % z</p>
                            <p>4)Infile = open(''d:\\java.txt'', ''r'')</p>
                            <p>5)Class</p>
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

export default pythonquiz;