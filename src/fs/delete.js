import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import checkIfFileExists from "./utils.js";

const remove = async () => {
    const pathToFile = fileURLToPath(
        new URL("files/fileToRemove.txt", import.meta.url)
    );
    const isFileExist = await checkIfFileExists(pathToFile);
    if (!isFileExist) {
        throw new Error("FS operation failed");
    }
    await fs.rm(pathToFile, { force: true });
};

await remove();
