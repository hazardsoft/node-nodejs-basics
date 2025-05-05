import { fork } from "child_process";
import path from "path"
import {fileURLToPath} from "url"

const spawnChildProcess = async (args) => {
    const modulePath = path.resolve(fileURLToPath(import.meta.url), "..", "files", "script.js");
    const child = fork(modulePath, args, {stdio: "pipe"})
    
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
