import path from "path"
import {fileURLToPath} from "url"
import {rm} from "fs/promises"

const remove = async () => {
    const fileName = "fileToRemove.txt"
    const filePath = path.resolve(fileURLToPath(import.meta.url), "..", "files", fileName);
    try {
        await rm(filePath, {force: false})
    } catch (e) {
        throw new Error("FS operation failed")
    }
};

await remove();