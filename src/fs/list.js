import path from "path"
import {fileURLToPath} from "url"
import {readdir} from "fs/promises"

const list = async () => {
    const fileName = "files"
    const filePath = path.resolve(fileURLToPath(import.meta.url), "..", fileName);
    try {
        const files = await readdir(filePath);
        for (const file of files) {
            console.log(file)
        }
    } catch (e) {
        throw new Error("FS operation failed")
    }
};

await list();