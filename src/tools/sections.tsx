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
    setCurrentCommand: React.Dispatch<React.SetStateAction<string>>,
    currentCommand: string,
    command: CommandItem[],
    UpArrowKey: number
) : void => {
    if(event.key === "Enter"){
        setCommand((prev) => [
            ...prev, {
                command: currentCommand.toLowerCase(),
                output: consoleOuput(currentCommand, setCommand),
            }
        ])
        setCurrentCommand("");
        setUpArrowKey(0)
    }
    else if(event.keyCode === 38){
        if(command.length > 0){
            setUpArrowKey(UpArrowKey + 1)
            if(command.length - UpArrowKey - 1 >= 0){
                setCurrentCommand(
                    command[command.length - UpArrowKey - 1].command
                )
            }
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
        else if(currentCommand.toLowerCase().startsWith("c")){
            setCurrentCommand("clear");
        }
        else if(currentCommand.toLowerCase().startsWith("h")){
            setCurrentCommand("help");
        }
        else if(currentCommand.toLowerCase().startsWith("sk")){
            setCurrentCommand("skills");
        }
        else if(currentCommand.toLowerCase().startsWith("so")){
            setCurrentCommand("socials");
        }
        else if(currentCommand.toLowerCase().startsWith("e")){
            setCurrentCommand("experience");
        }
    }
};
