
import img1 from "../../assets/imgix-klWUhr-wPJ8-unsplash.jpg"
import img2 from "../../assets/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg"
import img3 from "../../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg"
const Work = () => {
    return (
        <section id="work" className="section pb-4 " >
            <div className="container mx-auto ">
                <div className=" flex flex-col lg:flex-row gap-x-10 ">
                    <div className=" flex-1 flex-col gap-12 mb-10 lg:mb-0 ">
                        <div className=" mb-4 ">
                            <h1 className=" text-pink-600 font-bold  text-2xl pb-1 px-4 ">My Letest work... </h1>
                            <p className="mx-w-sm mb-6 font-normal px-4  ">
                                A technology worker is an expert in the field of technology, with roles spanning from software developers and IT specialists to data scientists and engineers. They are responsible for creating, managing, and maintaining digital systems, software, and hardware to support businesses and industries
                            </p>
                            <button className="bg-pink-600 text-white font-bold text-lg px-6 py-1 rounded-2xl ml-4 "> Viwe All </button>
                        </div>
                        <div className=" group  relative overflow-hidden border-2 border-white/50  rounded-xl ">
                            <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300  ">

                            </div>
                            <img className=" group-hover:scale-125  transition-all duration-500 " src={img1} alt="" />

                            {/*  */}
                            <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-white   ">
                                <span className="text-2xl text-pink-600 font-bold "> Technology And Electronic  </span>
                            </div>
                            {/*  */}
                            <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 text-white ">
                                <span className=" text-xl text-white font-bold "> Brand Details  </span>
                            </div>
                        </div>
                    </div>


                    <div className=" flex-1 flex-col  gap-y-10 lg:mb-0  ">
                        {/* img  */}

                        <div className=" group  relative overflow-hidden border-2 border-white/50  rounded-xl ">
                            <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300  ">

                            </div>
                            <img className=" group-hover:scale-125  transition-all duration-500 " src={img2} alt="" />

                            {/*  */}
                            <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-white   ">
                                <span className="text-2xl font-bold text-pink-600 "> Technology And Electronic  </span>
                            </div>
                            {/*  */}
                            <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 text-white ">
                                <span className=" text-xl text-white font-bold "> Brand Details  </span>
                            </div>
                        </div>
                        {/* img 3 */}

                        <div className=" group  relative overflow-hidden border-2 border-white/50  rounded-xl ">
                            <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300  ">

                            </div>
                            <img className=" group-hover:scale-125  transition-all duration-500 " src={img3} alt="" />

                            {/*  */}
                            <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-white   ">
                                <span className="text-2xl text-pink-600 font-bold  "> Technology And Electronic  </span>
                            </div>
                            {/*  */}
                            <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 text-white ">
                                <span className=" text-xl text-white font-bold "> Brand Details  </span>
                            </div>
                        </div>

                        
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Work;