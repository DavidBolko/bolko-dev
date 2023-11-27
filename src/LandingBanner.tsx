import { ChevronsDown, GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

const LandingBanner = () =>{
    return(
    <section className="relative flex flex-col items-center text-center gap-6 w-full min-h-screen justify-evenly">
        <span className="gradient-blob top-64"/>
        <div className="flex flex-col gap-2 pt-24">
            <h1 className="text-6xl">Hi, my name is</h1>
            <h2 className="text-8xl font-semibold text-primary">DÁVID BOLKO</h2>
            <div className="pt-12">
            <p>⬥ Frontend Engineer ⬥ Software Engineer ⬥ UI Designer ⬥</p>
            <p className="font-thin">Based in Žilina, Slovakia.</p>
            </div>
        </div>
        <div className="flex flex-col gap-8">
            <ul className="flex gap-6 text-slate-400">
            <li>
                <a href="" className="link">
                <InstagramIcon />
                </a>
            </li>
            <li>
                <a href=" " className="link">
                <GithubIcon />
                </a>
            </li>
            <li>
                <a href="" className="link">
                <LinkedinIcon />
                </a>
            </li>
            </ul>
            <span className="animate-bounce text-slate-800 mr-auto ml-auto"><ChevronsDown/></span>
        </div>
    </section>
    )
}

export default LandingBanner;