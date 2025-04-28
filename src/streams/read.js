import path from "path"
import {fileURLToPath} from "url"
import {createReadStream} from "fs"
import {pipeline} from "stream"

const read = async () => {
    const fileName = "fileToRead.txt"
    const filePath = path.resolve(fileURLToPath(import.meta.url), "..", "files", fileName);
    const readable = createReadStream(filePath);
    pipeline(readable, process.stdout, (err) => {
        if (err) {
            console.error(`error while reading file: ${err}`)
        }
    })
};

await read();