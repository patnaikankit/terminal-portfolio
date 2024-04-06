import { Header } from "./header";
import Command from "./prompt-box";
import { Title } from "./title";

const Terminal = () => {
    return (
        <div className="bg-neutral-800 text-slate-300 w-screen min-h-screen overflow-x-hidden border-4 border-purple-900 rounded-lg"> 
            <Title />
            <Header />
            <Command />
        </div>
    );
}

export default Terminal;