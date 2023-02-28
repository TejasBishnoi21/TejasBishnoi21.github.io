import { skills2 } from "../data";

const Tools = ()=>{
    return <>
    <section className=" bg-secondary py-12">
        <div className="container mx-auto">
                <div className="container mx-auto 
                text-center">
                    <h2 className="text-3xl lg:text-4xl font-medium
                    lg:font-bold mb-4">
                        Tools
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-5
            md:grid-cols-4 lg:grid-cols-8 md:mb-4 
            p-1">
                {
                    skills2.map((el, index)=>{
                        return <div
                        className="flex flex-col items-center
                        justify-center mx-auto md:mx-0
                         w-[120px] md:w-auto"
                        key={index}>
                            <img src={el.image} alt="skills" width={el.size}/>
                            <p>{el.name}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </section>
    </>
}

export default Tools;