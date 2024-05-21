export const Title = () => {
    return (
        <div className="mt-3">
            <div className="flex flex-row mb-0.5">
                    <div className="text-purple-400 font-bold ml-10">
                        {" "}
                        visitor<span className="text-white">@</span><span className="text-blue-400">gollum:$ ~ {" "}</span>
                    </div>

                    <div className="ml-2 font-mono text-amber-500">
                        (c){" "}ANKIT. {" "}All rights reserved {new Date().getFullYear()}
                    </div>

                </div>

            <pre className="text-left text-purple-500 font-bold mb-2 drop-shadow-xl selection:text-white">
                {
                    `
                    
      █████╗░███╗░░██╗██╗░░██╗██╗████████╗  ██████╗░░█████╗░████████╗███╗░░██╗░█████╗░██╗██╗░░██╗
     ██╔══██╗████╗░██║██║░██╔╝██║╚══██╔══╝  ██╔══██╗██╔══██╗╚══██╔══╝████╗░██║██╔══██╗██║██║░██╔╝    
     ███████║██╔██╗██║█████═╝░██║░░░██║░░░  ██████╔╝███████║░░░██║░░░██╔██╗██║███████║██║█████═╝
     ██╔══██║██║╚████║██╔═██╗░██║░░░██║░░░  ██╔═══╝░██╔══██║░░░██║░░░██║╚████║██╔══██║██║██╔═██╗
     ██║░░██║██║░╚███║██║░╚██╗██║░░░██║░░░  ██║░░░░░██║░░██║░░░██║░░░██║░╚███║██║░░██║██║██║░╚██╗
     ╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝╚═╝░░░╚═╝░░░  ╚═╝░░░░░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚══╝╚═╝░░╚═╝╚═╝╚═╝░░╚═╝
                                       
                    `
                }
            </pre>
        </div>
    );
}