export const Header = () => {
    return (
        <div className="font-mono text-left ml-10 mb-5 selection:bg-yellow-900">
            Welcome to my Portfolio!<br/>
            Type <span className="text-purple-400">help</span> to get a list of available commands.<br/>
            You can use <span className="text-purple-400">Tab</span> key to autocomplete commands!
        </div>
    );
}