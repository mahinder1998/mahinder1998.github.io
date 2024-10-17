const Banner = ()=>{
    return(
        <section className="banner h-screen bg-slate-300">

        <div className="container h-full mx-auto">
            <div className="flex h-full items-center">
                <div className="w-1/2">
                    <span>Hi, I am</span>
                    <h1>Mahinder Kumar</h1>
                    <span>Shopify Developer</span>
                    <p>Description go here...</p>

                    <div className="btn-group">
                        <a href="download">Download CV</a>
                        <a href="contact">Contact Me</a>
                    </div>
                </div>
                <div className="w-1/2">
                    <span>Hi, I am</span>
                    <h1>Mahinder Kumar</h1>
                    <span>Shopify Developer</span>
                    <p>Description go here...</p>

                    <div className="btn-group">
                        <a href="download">Download CV</a>
                        <a href="contact">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>

        </section>
    )
}


export default Banner;