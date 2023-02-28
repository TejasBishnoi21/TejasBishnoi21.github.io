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
                before:-left-3/4
                before:hidden
                before:lg:block">
                    My latest work
                </h2>
                {/* <p className="subtitle">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Voluptas dolor labore hic cum nobis alias perspiciatis 
                    temporibus molestiae quas? Earum!
                </p> */}
            </div>

            <Projects />
        </div>
        </section>
}

export default Portfolio;