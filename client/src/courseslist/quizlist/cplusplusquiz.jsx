import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios"

function cplusplusquiz()
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
            <div className="disphead">C++ QUIZ</div>
            <div className="dispquiz">
                
                <div >
                    <div >1) If we stored five elements or data items in an array, what will be the index address or the index number of the array's last data item?</div>
                    <div>
                        <input type="radio" name="one" value="a" onChange={e=>setone(e.target.value)}></input><label>3</label><br></br>
                        <input type="radio" name="one" value="b" onChange={e=>setone(e.target.value)}></input><label>4</label><br></br>
                        <input type="radio" name="one" value="c" onChange={e=>setone(e.target.value)}></input><label>5</label>
                    </div>
                    <br></br>

                    <div >
                    <div >2) Which of the following can be considered as the object of an array?</div>
                    <div>
                        <input type="radio" name="two" value="a" onChange={e=>settwo(e.target.value)}></input><label>Elements of the Array</label><br></br>
                        <input type="radio" name="two" value="b" onChange={e=>settwo(e.target.value)}></input><label>Index of an array</label><br></br>
                        <input type="radio" name="two" value="c" onChange={e=>settwo(e.target.value)}></input><label>Functions of the Array</label>
                    </div>
                    <br></br>

                    <div >3) Which of the following function is used to remove all characters of a string object in C++?</div>
                    <div>
                        <input type="radio" name="three" value="a" onChange={e=>setthree(e.target.value)}></input><label>removeall()</label><br></br>
                        <input type="radio" name="three" value="b" onChange={e=>setthree(e.target.value)}></input><label>clear()</label><br></br>
                        <input type="radio" name="three" value="c" onChange={e=>setthree(e.target.value)}></input><label>delete()</label>
                    </div>
                    <br></br>

                    <div >4) Which of the following function is used to get the index of a specified character in a string object? </div>
                    <div>
                        <input type="radio" name="four" value="a" onChange={e=>setfour(e.target.value)}></input><label>get()</label><br></br>
                        <input type="radio" name="four" value="b" onChange={e=>setfour(e.target.value)}></input><label>search()</label><br></br>
                        <input type="radio" name="four" value="c" onChange={e=>setfour(e.target.value)}></input><label>find()</label>
                    </div>
                    <br></br>

                    <div >5) Which of the following function is used to insert an item just before a given position in the vector?</div>
                    <div>
                        <input type="radio" name="five" value="a" onChange={e=>setfive(e.target.value)}></input><label>emplace()</label><br></br>
                        <input type="radio" name="five" value="b" onChange={e=>setfive(e.target.value)}></input><label>insertbefore()</label><br></br>
                        <input type="radio" name="five" value="c" onChange={e=>setfive(e.target.value)}></input><label>push_back()</label>
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
                            <p>1)4</p>
                            <p>2)Elements of the Array</p>
                            <p>3)clear()</p>
                            <p>4)find()</p>
                            <p>5)emplace()</p>
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

export default cplusplusquiz;