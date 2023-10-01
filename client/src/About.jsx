import NavBar from './Navbar'

function about ()
{
    return (
        <>
        <NavBar />
        
        <div className="abt">
            <div className="txt mx-64">
                This is a Learing Platform.
                You can learn the courses and 
                take a quiz and get the marks.
            </div>
            <div className='disphead text-4xl text-red-800'>Mission</div>
            <div className='disphead p-5 text-3xl'>Accessible Education for All</div>
            <div className='disptxt italic text-2xl mx-64'>"We envision a future where high-quality education is accessible to people of all backgrounds, regardless of location or socioeconomic status, through our inclusive online learning platform."</div>
        <br></br>
        
        <div className='disptxt italic text-3xl mx-64 '>"Education is the most powerful weapon which you can use to change the world."</div>  
        <div className='disptxt ml-96 text-2xl text-red-700'>- Nelson Mandela</div>   
        
        </div>
        </>
    );
}

export default about;