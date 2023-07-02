import fs from "node:fs";
import { fileURLToPath } from "node:url";

const write = async () => {
    const pathToFile = fileURLToPath(
        new URL("files/fileToWrite.txt", import.meta.url)
    );
    const writeableStream = fs.createWriteStream(pathToFile, {
        encoding: "utf8",
    });
    process.stdin.pipe(writeableStream);
};

await write();
