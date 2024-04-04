import { Header } from "./header";
import { Title } from "./title";

const Terminal = () => {
    return (
        <div className="bg-neutral-800 text-slate-300 w-screen min-h-screen overflow-x-hidden"> 
            <Title />
            <Header />
        </div>
    );
}

export default Terminal;