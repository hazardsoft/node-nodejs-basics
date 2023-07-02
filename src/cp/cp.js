import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const spawnChildProcess = async (args) => {
    const path = fileURLToPath(new URL("files/script.js", import.meta.url));
    const childProcess = spawn("node", [path, ...args], {
        stdio: "inherit",
    });
    childProcess.on("close", (code) => {
        console.log(`child process exited with code ${code}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
