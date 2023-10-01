import {useNavigate} from 'react-router-dom'
function home ()
{
    const navigate=useNavigate();
    const navtocourse=()=>
    {
        navigate('/login')
    };
    return (
        <div className="hm">
            <div>
            <div className='disptxt italic text-3xl mx-64 text-black'>"Education is the most powerful weapon which you can use to change the world."</div>  
            <div className='disptxt ml-96 text-2xl text-red-700'>- Nelson Mandela</div>   
            </div>
            <button className="btn1 " onClick={navtocourse}>Get Started</button>
            
            
        </div> 
    );
}

export default home;