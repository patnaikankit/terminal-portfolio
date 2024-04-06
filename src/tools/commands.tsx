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
                    <span className="text-teal-400 ml-3"> help</span> - You are here already and you obviously know what this does<br />
                    <span className="text-teal-400 ml-3"> about</span> - Get to know me better<br />
                    <span className="text-teal-400 ml-3"> contact</span> - If I seem interesting to you<br />
                    <span className="text-teal-400 ml-3"> skills</span> - Stuff I think I am good at!<br />
                    <span className="text-teal-400 ml-3"> projects</span> - Projects I have made so far<br />
                    <span className="text-teal-400 ml-3"> resume</span> - Checkout my resume<br />
                    <span className="text-teal-400 ml-3"> clear</span> - Clear the terminal<br />
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

            case "contact":
                return (
                    <div>
                        <span className="text-teal-400">
                            Mail -{" "}
                        </span>
                        <a href="mailto:ankit.patnaik2003@gmail.com" className="underline">ankit.patnaik2003@gmail.com</a><br />

                        <span className="text-teal-400">
                            LinkedIn -{" "}
                        </span>
                        <a href="https://www.linkedin.com/in/ankit-patnaik-102728230/" className="underline">https://www.linkedin.com/in/ankit-patnaik-102728230</a><br />

                        <span className="text-teal-400">
                            Github -{" "}
                        </span>
                        <a href="https://github.com/patnaikankit" className="underline">https://github.com/patnaikankit</a><br />

                        <span className="text-teal-400">
                            Twitter -{" "}
                        </span>
                        <a href="https://twitter.com/_Ankitpatnaik1_" className="underline">https://twitter.com/_Ankitpatnaik1_</a><br />
                    </div>
                );

            case "skills": 
            return (
                <div>
                    <span className="text-teal-400">Languages -{" "}</span>
                    <br />
                    <span className="ml-7">C, C++, Javascript, Typescript, Python, Go</span> <br />

                    <span className="text-teal-400">Frameworks/Libraries -{" "}</span>
                    <br />
                    <span className="ml-7">Tailwind, React.js, Node.js, Express.js, Next.js, Numpy, Pandas, Django, Fiber, Gorilla Mux, Firebase</span> <br />                

                    <span className="text-teal-400">Databases/Infrastructures -{" "}</span>
                    <br />
                    <span className="ml-7">MongoDB, SQL, Redis</span> 
                    <br />
                </div>
            );


            case "projects": 
            return (
                <div>
                    <span className="text-purple-400">1. </span>
                    <div className="text-teal-400">{" "}LiteShare{" "}</div><br />
                      -{"  "}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nam modi pariatur molestias blanditiis fugit est aut officia et provident.<br />

                    ----------------------------------------------------------------------------------------------------------<br />

                    <span className="text-purple-400">1. </span>
                    <div className="text-teal-400">{" "}LiteShare{" "}</div><br />
                      -{"  "}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nam modi pariatur molestias blanditiis fugit est aut officia et provident.<br />

                    ----------------------------------------------------------------------------------------------------------<br />

                    <span className="text-purple-400">1. </span>
                    <div className="text-teal-400">{" "}LiteShare{" "}</div><br />
                      -{"  "}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nam modi pariatur molestias blanditiis fugit est aut officia et provident.<br />

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
