import {writeFile} from "fs/promises"
import path from "path";
import {fileURLToPath} from "url";

const create = async () => {
    const fileName = "fresh.txt"
    const filePath = path.resolve(fileURLToPath(import.meta.url), '..', `./files/${fileName}`)
    const fileContent = "I am fresh and young"
    try {
        await writeFile(filePath, fileContent, {flag: "wx"})
    } catch (e) {
        throw new Error("FS operation failed");
    }
};

await create();