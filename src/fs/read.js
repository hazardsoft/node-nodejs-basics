import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import checkIfFileExists from "./utils.js";

const read = async () => {
    const pathToFile = fileURLToPath(
        new URL("files/fileToRead.txt", import.meta.url)
    );
    const isFileExist = await checkIfFileExists(pathToFile);
    if (!isFileExist) {
        throw new Error("FS operation failed");
    }
    const fileContent = await fs.readFile(pathToFile, { encoding: "utf8" });
    console.log(fileContent);
};

await read();
