import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { SlSocialGithub } from "react-icons/sl";
import profile from '../images/icon.png';


import './Home.css'


const socialLinks = [
    {
        "label": "Linkedin",
        "icon":  <CiLinkedin />,
        "url": "http://linkedin.com/"
    },
    {
        "label": "Github",
        "icon":  <SlSocialGithub />,
        "url": "https://github.com/"
    },
    {
        "label": "Twitter",
        "icon":  <CiTwitter />,
        "url": "https://x.com/login?"
    },
    {
        "label": "Instagram",
        "icon":  <FaInstagram />,
        "url": "http://instagram.com/"
    }
]


const Home = ()=>{
    return(
        <section id="home">
           <div classNameName="max-w-[768px] mx-auto">
                <div classNameName="home_content_grid px-4 py-10">
                    {/* social */}
                    <div classNameName="home_social flex flex-col space-y-4">
                        {socialLinks.map((item, index) => (
                            <a href={item.url} key={index} classNameName="text-[20px] ">
                                {item.icon}
                            </a>
                        ))}
                    </div> 

                    {/* img */}
                   <div className="home_img max-w-[200px]">
                        <svg
                            className="home_blob"
                            viewBox="0 0 200 187"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            data-tilt
                        >
                            <mask id="mask0" mask-type="alpha">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                            </mask>
                            <g mask="url(#mask0)">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                            <image
                                className="home_blob-img"
                                x="12"
                                y="8"
                                href={profile}
                                alt="icon"
                                width="170"
                            />
                            </g>
                        </svg>
                    </div>

                    {/* content */}
                    <div className="home_content">
                        <h1>Hi, I'm Pranay</h1>
                        <h3>I am Web Developer</h3>
                        <p> Building Software to solve real life problems</p>
                        <a href="#">Contact Me </a>
                    </div>


                </div>
           </div>
        </section>
    )
}


export default Home;