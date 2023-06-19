import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import checkIfFileExists from "./utils.js";

const copy = async () => {
    const srcPath = fileURLToPath(new URL("files", import.meta.url));
    const destPath = fileURLToPath(new URL("files_copy", import.meta.url));

    const isSrcFolderExist = await checkIfFileExists(srcPath);
    const isDestFolderExist = await checkIfFileExists(destPath);
    if (!isSrcFolderExist || isDestFolderExist) {
        throw new Error("FS operation failed");
    }
    await fs.cp(srcPath, destPath, { recursive: true });
};

await copy();
