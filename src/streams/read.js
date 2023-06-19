import fs from "node:fs";
import { fileURLToPath } from "node:url";

const read = async () => {
    const pathToFile = fileURLToPath(
        new URL("files/fileToRead.txt", import.meta.url)
    );
    const readableStream = fs.createReadStream(pathToFile, {
        encoding: "utf8",
    });
    readableStream.pipe(process.stdout);
};

await read();
