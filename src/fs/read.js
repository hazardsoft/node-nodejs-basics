import path from "path"
import {fileURLToPath} from "url"
import {readFile} from "fs/promises"

const read = async () => {
    const fileName = "fileToRead.txt"
    const filePath = path.resolve(fileURLToPath(import.meta.url), "..", "files", fileName)

    try {
        const fileContents = await readFile(filePath, {encoding: "utf8"})
        console.log(fileContents);
    } catch (e) {
        throw new Error("FS operation failed")
    }
};

await read();