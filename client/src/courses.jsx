import {useNavigate} from 'react-router-dom'
import NavBar from './Navbar'

function courses ()
{
    const navigate=useNavigate();
    const dsa=()=>
    {
        navigate('/courses/dsa')
    };
    const python=()=>
    {
        navigate('/courses/python')
    };
    const java=()=>
    {
        navigate('/courses/java')
    };
    const cprogram=()=>
    {
        navigate('/courses/cprogram')
    };
    const cplusplus=()=>
    {
        navigate('/courses/cplusplus')
    };
    const javascript=()=>
    {
        navigate('/courses/javascript')
    };
    return (
       <>
       <NavBar />
       <section className='sec'>
        <div className="hm1" >
             
            <div className="grid">
                <div className="item" onClick={dsa}>DSA</div>
                <div className="item" onClick={python}>Python</div>
                <div className="item" onClick={cprogram}>C Programming</div>
                <div className="item" onClick={java}>Java</div>
                <div className="item" onClick={javascript}>Javascript</div>
                <div className="item" onClick={cplusplus}>C++ Programing</div>
                
            </div>
            
        </div>
        </section>
        </>
    );

   
}

export default courses;