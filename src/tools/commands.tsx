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
                <div className="w-3/4">
                    Hi! Thanks for social researching(I don't like the other s word) on me!<br /> I am{" "} <span className="text-purple-400">Ankit Patnaik</span>, a 3rd year undergraduate student at{" "} <span className="text-teal-400">{" "}
                    <a href="http://nita.ac.in">National Institute of Technology Agartala</a></span> pursuing B.Tech in Electrical Engineering. I have predominantly focused on web technologies for my work, primarily delving into MERN stack. However, I've recently started exploring core computer science disciplines to deepen my understanding. Alongside my proficiency in MERN, I am also adept at utilizing Python and Go for various projects and tasks.<br /><br />

                    <span className="text-blue-400">PS:</span> Just as <span className="text-teal-400">Gollum</span> aided <span className="text-teal-400">Frodo</span> and <span className="text-teal-400">Sam</span> in navigating their way through the perilous realm of Mordor, here he stands prepared to guide you through my portfolio!
                </div>
            );

            case "contact":
                return (
                    <div>
                        <span className="text-teal-400">
                            [Mail]: {" "}
                        </span>
                        <a href="mailto:ankit.patnaik2003@gmail.com" className="underline">ankit.patnaik2003@gmail.com</a><br />

                        <span className="text-teal-400">
                            [LinkedIn]: {" "}
                        </span>
                        <a href="https://www.linkedin.com/in/ankit-patnaik-102728230/" className="underline">https://www.linkedin.com/in/ankit-patnaik-102728230</a>{" "}[DM's preferred here]<br />

                        <span className="text-teal-400">
                            [Github]: {" "}
                        </span>
                        <a href="https://github.com/patnaikankit" className="underline">https://github.com/patnaikankit</a><br />

                        <span className="text-teal-400">
                            [Twitter]: {" "}
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
                    <span className="ml-7">Tailwind, React.js, Node.js, Express.js, Next.js, Django, Fiber, Gorilla Mux, Firebase</span> <br />                

                    <span className="text-teal-400">Databases/Infrastructures -{" "}</span>
                    <br />
                    <span className="ml-7">MongoDB, SQL, Redis</span> 
                    <br />
                </div>
            );


            case "projects": 
            return (
                <div>
                    <div className="flex items-center">
                        <span className="text-purple-400 mr-1">1.</span>
                        <div className="text-teal-400 inline"> Imagix</div> <br />
                    </div>
                      <div className="w-3/4">
                      -{" "}A platform that enables users to create futuristic images based on the prompt provided by the user.<br />
                      </div>
                      -{"  "}Link: <a href="https://github.com/patnaikankit/Imagix" className="text-blue-500">[Github]</a>{" | "}<a href="https://imagix-web.netlify.app/" className="text-blue-500">[Live]</a><br />
                      -{"  "}Technologies: Tailwind, DaisyUI, Typescript, Express.js, MongoDB, OpenAI API<br />

                    -----------------------------------------------------------------------------------------------------------------------------<br /><br />

                    <div className="flex items-center">
                        <span className="text-purple-400 mr-1">2. </span>
                        <div className="text-teal-400 inline"> LiteShare</div> <br />
                    </div>
                      <div className="w-3/4">
                      -{"  "}A robust platform to facilitate secure file sharing and chat between two users without the brokerage of a third party.<br />
                      </div>
                      -{"  "}Link: <a href="https://github.com/patnaikankit/LiteShare" className="text-blue-500">[Github]</a>{" | "}<a href="https://lite-share.vercel.app/" className="text-blue-500">[Live]</a><br />
                      -{"  "}Technologies: React, Typescript, Node.js, Next.js, Socket.io, WebRTC<br />

                      -----------------------------------------------------------------------------------------------------------------------------<br /><br />

                    <div className="flex items-center">
                        <span className="text-purple-400 mr-1">3. </span>
                        <div className="text-teal-400 inline"> Youtube Summarizer</div> <br />
                    </div>
                      -{"  "}An AI tool that can generate a summary based on the YouTube video provided to it.<br />
                      -{"  "}Link: <a href="https://github.com/patnaikankit/Youtube-Summarizer" className="text-blue-500">[Github]</a>{" | "}<a href="https://youtube-summarizer-seven.vercel.app/" className="text-blue-500">[Live]</a><br />
                      -{"  "}Technologies: Tailwind, Javascript, Django, Postgresql, Assembly AI API, OpenAI API<br />

                </div>
            );

            case "resume": window.open("https://drive.google.com/file/d/1oKr4BroNbW5o2M2aN2nPead7cHMKZC9s/view", "_blank");
            return "Opening resume in new tab......"

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
