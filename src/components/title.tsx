export const Title = () => {
    return (
        <div className="mt-3">
            <div className="flex flex-row mb-0.5">
                    <div className="text-purple-500 font-bold ml-10">
                        {" "}
                        visitor<span className="text-white">@</span><span className="text-blue-400">gollum:$ ~ {" "}</span>
                    </div>

                    <div className="ml-2 font-mono text-amber-500">
                        (c){" "}(ANKIT) Not a Corporation.{" "}All rights reserved {new Date().getFullYear()}
                    </div>

                </div>

            <pre className="text-left text-purple-400 font-bold mb-2 drop-shadow-xl selection:bg-yellow-900 selection:text-white">
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