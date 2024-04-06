import React from "react";

interface CommandItem {
    command: string,
    output: JSX.Element | string;
}


export const consoleOuput = (
    command: String,
    setCommand: React.Dispatch<React.SetStateAction<CommandItem[]>>
): JSX.Element | string => {
    switch (command.toLowerCase()){
        case "help":
            return (
                <div>
                    {" "}
                    Available commands: <br/>
                    <span className="text-purple-400 ml-3"> about</span> - Want to know me better<br />
                    <span className="text-purple-400 ml-3"> socials</span> - Lorem ipsum dolor sit amet consectetur.<br />
                    <span className="text-purple-400 ml-3"> skills</span> - Lorem ipsum dolor sit amet consectetur.<br />
                    <span className="text-purple-400 ml-3"> projects</span> - Lorem ipsum dolor sit amet consectetur.<br />
                    <span className="text-purple-400 ml-3"> resume</span> - Lorem ipsum dolor sit amet consectetur.<br />
                    <span className="text-purple-400 ml-3"> clear</span> - Clear the terminal<br />
                    {/* <span className="text-purple-400 ml-3"> experience</span> - Want to know me better<br /> */}
                </div>
            );

            case "about": 
            return (
                <div>
                    Hi! Thanks for stalkng me!<br /> I am{" "} <span className="text-purple-400">Ankit Patnaik</span>, a 3rd year undergraduate student at{" "} <span className="text-teal-400">{" "}
                    <a href="http://nita.ac.in">National Institute of Technology Agartala</a></span> pursuing my B.Tech in Electrical Engineering.<br />
                </div>
            );

            case "socials":
                return (
                    <div>
                        <span className="text-purple-400">
                            <a href="https://github.com/patnaikankit">Github</a> -{" "}
                        </span>
                        You can find all my projects here.<br />

                        <span className="text-purple-400">
                            <a href="https://github.com/patnaikankit">LinkedIn</a> -{" "}
                        </span>
                        You can find all my projects here.<br />

                        <span className="text-purple-400">
                            <a href="mailto:ankit.patnaik2003@gmail.com">Mail</a> -{" "}
                        </span>
                        You can find all my projects here.<br />

                        <span className="text-purple-400">
                            <a href="mailto:ankit.patnaik2003@gmail.com">Instagram</a> -{" "}
                        </span>
                        You can find all my projects here.<br />

                        <span className="text-purple-400">
                            <a href="mailto:ankit.patnaik2003@gmail.com">Twitter</a> -{" "}
                        </span>
                        You can find all my projects here.<br />
                    </div>
                );

            case "skills": 
            return (
                <div>
                    <span className="text-purple-400">Languages -{" "}</span>
                    <br />
                    <span className="ml-7">C, C++, Javascript, Typescript, Python, Go</span> <br />

                    <span className="text-purple-400">Frameworks/Libraries -{" "}</span>
                    <br />
                    <span className="ml-7">Tailwind, React.js, Node.js, Express.js, Next.js, Numpy, Pandas, Django, Fiber, Gorilla Mux, Firebase</span> <br />                

                    <span className="text-purple-400">Databases/Infrastructures -{" "}</span>
                    <br />
                    <span className="ml-7">MongoDB, SQL, Redis</span> 
                    <br />
                </div>
            );


            case "projects": 
            return (
                <div>
                    <span className="text-purple-400">1. </span>
                    <a href="" className="text-teal-400">{" "}LiteShare{" "}</a> - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nam modi pariatur molestias blanditiis fugit est aut officia et provident.<br />

                    <span className="text-purple-400">1. </span>
                    <a href="" className="text-teal-400">{" "}LiteShare{" "}</a> - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nam modi pariatur molestias blanditiis fugit est aut officia et provident.<br />

                    <span className="text-purple-400">1. </span>
                    <a href="" className="text-teal-400">{" "}LiteShare{" "}</a> - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nam modi pariatur molestias blanditiis fugit est aut officia et provident.<br />
                </div>
            );

            case "resume": window.open("https://drive.google.com/file/d/1oKr4BroNbW5o2M2aN2nPead7cHMKZC9s/view", "_blank");
            return "Heading to resume......"

            case "clear": 
                setCommand([]);
                return "";

            default:
                return(
                    <div>
                        <span className="text-red-600">Command not found.</span>
                        <br />
                        Type <span className="text-purple-400">help</span> to get a list of valid commands.
                    </div>
                );
    }
};
