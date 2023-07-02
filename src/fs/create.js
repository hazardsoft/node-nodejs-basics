import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import checkIfFileExists from "./utils.js";

const create = async () => {
    const pathToFile = fileURLToPath(
        new URL("files/fresh.txt", import.meta.url)
    );
    const isFileExist = await checkIfFileExists(pathToFile);
    if (isFileExist) {
        throw new Error("FS operation failed");
    }
    await fs.writeFile(pathToFile, "I am fresh and young");
};

await create();
