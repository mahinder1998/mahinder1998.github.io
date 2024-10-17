

import banner from '../images/banner.jpg'
import html5 from '../images/html5.png'
import css3 from '../images/css3.png'
import shopify from '../images/shopify.png'
import bootstrap from '../images/bootstrap.png'
import git from '../images/git.png'
import js from '../images/js.png'
import tailwind from '../images/tailwind.png'
import react from '../images/react.png'




import "./Banner.css";
const Banner = ()=>{
    return(
        <section className="banner h-screen">

        <div className="container h-screen-minus-80 mx-auto">
            <div className="flex h-full items-center">
                <div className="w-1/2">
                    <span className="text-2xl text-secondary leading-10 font-bold font-raleway">Hi, I am</span>
                    <h1 className="font-opensens text-5xl text-primary font-bold leading-[60px]">Mahinder Kumar</h1>
                    <span className="text-2xl text-primary leading-10 font-bold font-raleway">Shopify Developer</span>
                    <p className="text-gray my-5 max-w-lg mt-2">I specialize in custom Shopify theme development, app integrations, and creating tailored e-commerce solutions.</p>

                    <div className="btn-group space-x-4 mt-5">
                        <a href="download" className="inline-block border-secondary bg-secondary text-white font-bold text-sm px-5 border rounded-full py-3 transition-all duration-300 ease-in-out hover:bg-transparent hover:text-black">Download CV</a>
                        <a href="contact" className="inline-block border-secondary text-primary font-bold text-sm px-5 border rounded-full py-3 transition-all duration-300 ease-in-out hover:bg-secondary hover:text-white">Contact Me</a>
                    </div>
                </div>
                <div className="w-1/2">                       
                 <div className="circle-wrap">
                    <div className="circle-box">

                        <div className="circle-inner-wrap">
                            <div className="filpkart-icon">
                                <img src={html5} alt="logo" width="80" />
                            </div>
                            <div className="lined-icon">
                            <img src={css3} alt="logo" width="80" />
                            </div>
                            <div className="adobe-icon">
                            <img src={js} alt="logo" width="80" />
                            </div>
                            <div className="ola-icon">
                            <img src={shopify} alt="logo" width="80" />
                            </div>
                        </div>

                        <div className="amazone-icon">
                        <img src={git} alt="logo" width="80" />
                        </div>
                        <div className="apple-icon">
                        <img src={react} alt="logo" width="80" />                        </div>
                        <div className="netflex-icon">
                        <img src={bootstrap} alt="logo" width="80" />                        </div>
                        <div className="gogogle-icon">
                        <img src={tailwind} alt="logo" width="80" />                        </div>
                    </div>
                 </div>


                </div>
            </div>
        </div>

        </section>
    )
}


export default Banner;