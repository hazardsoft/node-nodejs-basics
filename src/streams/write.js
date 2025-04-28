import path from "path"
import {fileURLToPath} from "url"
import {createWriteStream} from "fs"
import {pipeline} from "stream"

const write = async () => {
    const fileName = "fileToWrite.txt"
    const filePath = path.resolve(fileURLToPath(import.meta.url), "..", "files", fileName);
    const writable = createWriteStream(filePath)
    pipeline(process.stdin, writable, (err) => {
        if (err) {
            console.error("pipeline failed:", err)
        }
    })
};

await write();