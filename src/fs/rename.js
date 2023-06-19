import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import checkIfFileExists from "./utils.js";

const rename = async () => {
    const oldPath = fileURLToPath(
        new URL("files/wrongFilename.txt", import.meta.url)
    );
    const newPath = fileURLToPath(
        new URL("files/properFilename.md", import.meta.url)
    );

    const isOldFileExist = await checkIfFileExists(oldPath);
    const isNewFileExist = await checkIfFileExists(newPath);
    if (!isOldFileExist || isNewFileExist) {
        throw new Error("FS operation failed");
    }
    await fs.rename(oldPath, newPath);
};

await rename();
