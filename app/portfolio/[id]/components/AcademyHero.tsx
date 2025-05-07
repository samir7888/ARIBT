

export default function AcademyHeroSection() {
  return (
    <div className=" overflow-hidden bg-white p-8 rounded-2xl">
      {/* Main Background Image */}
      <div className="relative h-96 md:h-[550px] w-full overflow-hidden rounded-lg">
        {/* Background Image */}
        <img 
          src="https://images.pexels.com/photos/31630117/pexels-photo-31630117/free-photo-of-scenic-view-of-canzo-in-lombardian-alps.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
          alt="Academy Building" 
          className="absolute inset-0 w-full h-full rounded-2xl object-cover "
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <p className="text-gray-100 mb-2 text-sm md:text-base">WELCOME TO</p>
          
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif mb-4 tracking-wider">
            ABHYAM ACADEMY
          </h1>
          
          <div className="mb-6">
            <p className="text-gray-100 text-sm font-noir tracking-wider">
              MANAGED BY <span className="text-teal-400 font-bold">ABHYAM GROUPS</span>
            </p>
          </div>
          
          <p className="text-white text-sm tracking-wide font-noir  mb-8">
            " We aim to create a Extraordinary school of knowledge "
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 font-noir">
            <button className="bg-white pt-5 text-gray-800 px-6 py-3 rounded-full text-sm md:text-base hover:bg-gray-100 transition">
              Enroll Now
            </button>
            <button className="bg-transparent border pt-5 border-white text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-white/10 transition">
              Virtual College Tour
            </button>
          </div>
        </div>
      </div>
      
     
    </div>
  );
}