import React, { useEffect, useRef, useState } from "react";
import { sections } from "../tools/sections";

interface CommandItem {
    command: string,
    output: string | JSX.Element;
}

const Command: React.FC = () => {
    const [command, setCommand] = useState<CommandItem[]>([]);
    const [currentCommand, setCurrentCommand] = useState<string>("");
    const [UpArrowKey, setUpArrowKey] = useState<number>(0);
    const [DownArrowKey, setDownArrowKey] = useState<number>(0); 

    const inputRef = useRef<HTMLInputElement>(null);
    const outputRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef(null)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                inputRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start",
                });
                inputRef.current.focus();
            }
        };
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    useEffect(() => {
        scrollToBottom();
      });
    
      const scrollToBottom = () => {
        const currentElement = bottomRef.current as HTMLElement | null;
        if (currentElement) {
          currentElement.scrollIntoView();
        }
      };
      
    
    
    return (
        <div ref={bottomRef}>
            {command.map((item, index) => (
                <div key={index}>
                    <div className="flex flex-row mb-0.5">
                        <div className="text-purple-500 font-bold ml-10 ">
                            {" "}
                            visitor<span className="text-white">@</span><span className="text-blue-400">gollum:$ ~ {" "}</span>
                        </div>

                        <div className="ml-2 font-mono text-amber-500">
                            {item.command}
                        </div>
                    </div>

                    <div className="font-mono text-left ml-16 mb-3 " id="output-content" ref={outputRef}>
                        {item.output}
                    </div>
                </div>
            ))}
            <div className="flex flex-row">
                <div className="text-purple-500 font-bold ml-10">
                    {" "}
                    visitor<span className="text-white">@</span><span className="text-blue-400">gollum:$ ~ {" "}</span>
                </div>

                <input 
                    className="bg-transparent outline-none border-none font-mono ml-2 w-2/3 text-amber-500"
                    type="text" 
                    ref={inputRef} 
                    value={currentCommand} 
                    onChange={(e) => setCurrentCommand(e.target.value)}
                    autoFocus={true} 
                    onKeyDown={(e) => {
                        if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Tab' || e.key === 'Enter') {
                            e.preventDefault();
                          }

                        sections(
                            e,
                            setCommand,
                            setUpArrowKey,
                            setDownArrowKey, 
                            setCurrentCommand,
                            currentCommand,
                            command,
                            UpArrowKey,
                            DownArrowKey,
                        );
                    }}
                />
            </div>
        </div>
    );
};

export default Command;
