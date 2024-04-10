import React from "react";
import { consoleOuput } from "./commands";

interface CommandItem {
    command: string,
    output: JSX.Element | string;
}

export const sections = (
    event: React.KeyboardEvent<HTMLInputElement>,
    setCommand: React.Dispatch<React.SetStateAction<CommandItem[]>>,
    setUpArrowKey: React.Dispatch<React.SetStateAction<number>>,
    setDownArrowKey: React.Dispatch<React.SetStateAction<number>>,
    setCurrentCommand: React.Dispatch<React.SetStateAction<string>>,
    currentCommand: string,
    command: CommandItem[],
    UpArrowKey: number,
    DownArrowKey: number,
) : void => {
    if(event.key === "Enter"){
        setCommand((prev) => [
            ...prev, {
                command: currentCommand.toLowerCase(),
                output: consoleOuput(currentCommand, setCommand),
            }
        ])
        setCurrentCommand("");
        setUpArrowKey(0);
        setDownArrowKey(0); 
    }

    else if (event.key === "ArrowUp") {
        if (command.length > 0 && UpArrowKey < command.length) {
            setUpArrowKey(UpArrowKey + 1);
            setCurrentCommand(command[command.length - UpArrowKey - 1].command);
            setDownArrowKey(UpArrowKey);
        }
    }

    else if (event.key === "ArrowDown") { 
        if (command.length > 0 && DownArrowKey > 0) {
            setDownArrowKey(DownArrowKey - 1);
            setCurrentCommand(command[command.length - DownArrowKey].command);
            setUpArrowKey(command.length - DownArrowKey);
        }
    }
    
    else if(event.key === "Tab"){
        event.preventDefault();
        if(currentCommand.toLowerCase().startsWith("a")){
            setCurrentCommand("about");
        }
        else if(currentCommand.toLowerCase().startsWith("r")){
            setCurrentCommand("resume");
        }
        else if(currentCommand.toLowerCase().startsWith("p")){
            setCurrentCommand("projects");
        }
        else if(currentCommand.toLowerCase().startsWith("cl")){
            setCurrentCommand("clear");
        }
        else if(currentCommand.toLowerCase().startsWith("h")){
            setCurrentCommand("help");
        }
        else if(currentCommand.toLowerCase().startsWith("s")){
            setCurrentCommand("skills");
        }
        else if(currentCommand.toLowerCase().startsWith("co")){
            setCurrentCommand("contact");
        }
        else if(currentCommand.toLowerCase().startsWith("e")){
            setCurrentCommand("experience");
        }
    }
};
