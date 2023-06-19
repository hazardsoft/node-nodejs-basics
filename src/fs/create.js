import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const create = async () => {
    const pathToFile = fileURLToPath(
        new URL("./files/fresh.txt", import.meta.url)
    );
    let isFileExist = false;
    try {
        await fs.access(pathToFile, fs.constants.F_OK);
        isFileExist = true;
    } catch (e) {
        console.error("error occurred while calling fs.access:", e);
    }
    if (isFileExist) {
        throw new Error("FS operation failed");
    }
    await fs.writeFile(pathToFile, "I am fresh and young");
};

await create();
