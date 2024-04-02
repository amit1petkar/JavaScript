# JavaScript
<h2>Initial steps.</h2>
<ul>
<li>Ran npm init to create initial draft of package.json.</li>
<li>Ran node -v > .nvmrc to create .nvmrc. This ensures the desired version (In my case, system's default : v21.7.1) of NodeJs is used. Run nvm use to take effect.</li>
<li>Installed following packages using npm install
<ul>
    <li>prompt-sync (For input prompts).</li>

        // sigint (Signal Interrupt) to true allows user to interrupt (exit) the program flow (using Ctrl+C)
        const jsPrompt = require('prompt-sync')({sigint: true});
        let tests = jsPrompt("Enter number:")
        console.log(tests);

NOTE: NodeJS has in-built functions for the same. They're too wordy.

        const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
        });

        readline.question('Number?', num => {
        console.log(`Number entered ${num}!`);
        readline.close();
        });        
</ul>
</li>
<li>Run code on Terminal
        
        node <path to JS file>
</li>

</ul>