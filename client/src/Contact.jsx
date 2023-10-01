import NavBar from './Navbar'
function contact ()
{
    return (
        <>
         <NavBar />
        
        <div className="chm3">
            <div className="ctxt"> 
            <div class="text-sky-600 text-4xl">Contact Us</div>

            <center><img src="./src/loc.png" class="cimg" /></center>
       
            <h2 className='ctitle'>Our Office Address</h2>
            <div class="ctxt">
                123 A, 5th Floor, Tidel Park, <br></br>
                Civil Aerodrome Post,Coimbatore,<br></br>Tamil Nadu 641014.
            </div>

            <h2 className='ctitle'>General Enquiries </h2>
            <div class="ctxt">
                enquiries@insightmasters.com
            </div>

            
       
            <h2 className='ctitle'>Make Appointment</h2>
            <div class="ctxt">
                appointment@insightmasters.com
            </div>

            
       
            <h2 className='ctitle'>Call Us</h2>
            <div class="ctxt">
                +91 8056884206
            </div>

            
       
            <h2 className='ctitle'>Our Timings</h2>
            <div class="ctxt">
                Mon-Fri : 9.00 AM - 7.00 PM <br></br>
                Sat-Sun : 10.00 AM - 3.00 PM 
            </div>
         
        </div>
        
               
        </div> 
        </>
    );
}

export default contact;