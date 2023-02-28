import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";


const GithubStats=()=>{
    return <section className="bg-secondary py-5">
        <div className="container mx-auto
         text-center bg-secondary w-full 
          text-white py-5">
            <p className="text-xl">GitHub Stats</p>
        </div>
        <div className="container mx-auto
         text-center bg-tertiary w-full 
          text-white p-2">
            <GitHubCalendar
            style={{
                textAlign:'center',
                // border:'1px solid red',
                padding:15,
                margin:'auto'
            }}
            hideColorLegend={true}
            // color="rgba(153, 94, 15, 1)"
            username="tejasbishnoi21"
            >
                <ReactTooltip delayShow={20} html/>
            </GitHubCalendar>
        </div>
        
        <div className="container mx-auto bg-tertiary
        flex flex-1 h-[20vh] justify-center px-2">
            <div className="flex justify-center">
            <img  
            src="https://github-readme-stats.vercel.app/api?username=TejasBishnoi21&show_icons=true&locale=en&theme=tokyonight&hide_border=true&bg_color=131419" 
            alt="TejasBishnoi21" width="95%"/>
            </div>
            <div className="flex justify-center">
            <img  
            src="https://github-readme-streak-stats.herokuapp.com/?user=TejasBishnoi21&show_icons=true&locale=en&theme=tokyonight&hide_border=true&background=131419" 
            alt="TejasBishnoi21"width="95%" /> 
            </div>
        </div>
    </section>
}
export default GithubStats;