export const Header = () => {
    return (
        <div className="font-mono text-left ml-10 mb-5">
            -{" "}Welcome to my interactive Terminal Portfolio! (v1.0.0)<br/>
            - {" "}Type <span className="text-purple-400">help</span> to get a list of available commands.<br/>
            -{" "}You can use <span className="text-purple-400">Tab</span> key to autocomplete commands!<br />
            -{" "}Use <span className="text-purple-400">up</span> and <span className="text-purple-400">down</span> arrow keys to toggle between previous commands.
        </div>
    );
}