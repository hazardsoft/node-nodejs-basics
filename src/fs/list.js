import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import checkIfFileExists from "./utils.js";

const list = async () => {
    const srcFolder = fileURLToPath(new URL("files", import.meta.url));
    const isFolderExist = await checkIfFileExists(srcFolder);
    if (!isFolderExist) {
        throw new Error("FS operation failed");
    }

    const files = (await fs.readdir(srcFolder, { withFileTypes: true }))
        .filter((dirent) => dirent.isFile())
        .map((dirent) => dirent.name);
    console.log(files);
};

await list();
