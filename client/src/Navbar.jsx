
function navbar()
{
 return(
  <section className="sec">
    <nav class="navi">
    <div class="mx-auto max-w-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between ">
        
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img src="../src/icon2.png" className="h-16 w-16" />
          </div>
          <div className="mx-20 text-white txt0 ">Insight Masters</div>
          <div class="hidden sm:ml-6 sm:block " >
            <div class="flex  ml-20 space-x-12 space-y-5 ">
            <a href="#" ></a>
              <a href="/about" class=" text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
              <a href="/courses" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Courses</a>
              <a href="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
              <a href="/" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Logout</a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          
  
          
          <div class="relative ml-3">
            <div>
              <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Open user menu</span>
                <img src="../src/proimg.jpg" className="h-10 w-10 rounded-3xl " />
              </button>
            </div>
  
            
             
            
          </div>
        </div>
      </div>
    </div>
  
    
    
  </nav>
  </section>
    
 );
}

export default navbar;