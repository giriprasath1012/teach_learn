import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function cprogramquiz()
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
        if(one =='a')
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
        if(four =='b')
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
            <div className="disphead">C PROGRAMMING QUIZ</div>
            <div className="dispquiz">
                
                <div >
                    <div >1) What is the output of this statement "printf("%d", (a++))"?</div>
                    <div>
                        <input type="radio" name="one" value="a" onChange={e=>setone(e.target.value)}></input><label>The current value of a</label><br></br>
                        <input type="radio" name="one" value="b" onChange={e=>setone(e.target.value)}></input><label>The value of (a + 1)</label><br></br>
                        <input type="radio" name="one" value="c" onChange={e=>setone(e.target.value)}></input><label>Error message</label>
                    </div>
                    <br></br>

                    <div >
                    <div >2) A pointer is a memory address. Suppose the pointer variable has p address 1000, and that p is declared to have type int*, and an int is 4 bytes long. What address is represented by expression p + 2?</div>
                    <div>
                        <input type="radio" name="two" value="a" onChange={e=>settwo(e.target.value)}></input><label>1002</label><br></br>
                        <input type="radio" name="two" value="b" onChange={e=>settwo(e.target.value)}></input><label>1004</label><br></br>
                        <input type="radio" name="two" value="c" onChange={e=>settwo(e.target.value)}></input><label>1008</label>
                    </div>
                    <br></br>

                    <div >3) What is the maximum number of characters that can be held in the string variable char address line [40]? </div>
                    <div>
                        <input type="radio" name="three" value="a" onChange={e=>setthree(e.target.value)}></input><label>39</label><br></br>
                        <input type="radio" name="three" value="b" onChange={e=>setthree(e.target.value)}></input><label>40</label><br></br>
                        <input type="radio" name="three" value="c" onChange={e=>setthree(e.target.value)}></input><label>41</label>
                    </div>
                    <br></br>

                    <div >4) Give the following declarations and an assignment statement. Which one is equivalent to the expression str [4]? char str[80];  char * p;  p = str;  </div>
                    <div>
                        <input type="radio" name="four" value="a" onChange={e=>setfour(e.target.value)}></input><label>*p + 4</label><br></br>
                        <input type="radio" name="four" value="b" onChange={e=>setfour(e.target.value)}></input><label>*(p + 4)</label><br></br>
                        <input type="radio" name="four" value="c" onChange={e=>setfour(e.target.value)}></input><label>p + 4</label>
                    </div>
                    <br></br>

                    <div >5) Which of the following function is used to write the integer in a file?</div>
                    <div>
                        <input type="radio" name="five" value="a" onChange={e=>setfive(e.target.value)}></input><label>putw()</label><br></br>
                        <input type="radio" name="five" value="b" onChange={e=>setfive(e.target.value)}></input><label>getw()</label><br></br>
                        <input type="radio" name="five" value="c" onChange={e=>setfive(e.target.value)}></input><label>f_int()</label>
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
                            <p>1)The current value of a</p>
                            <p>2)1008</p>
                            <p>3)39</p>
                            <p>4)*(p + 4)</p>
                            <p>5)putw()</p>
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

export default cprogramquiz;