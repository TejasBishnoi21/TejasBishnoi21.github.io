import Projects from "./Projects";

const Portfolio=()=>{
    return <section id="portfolio" 
    className="section bg-primary min-h-[1400px]">
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
                <h2 className="section-title
                before:content-portfolio relative
                before:absolute
                before:opacity-60
                before:-top-[2rem]
                before:-left-[10rem]
                before:hidden
                before:lg:block">
                    My latest work
                </h2>
            </div>

            <Projects />
        </div>
        </section>
}

export default Portfolio;