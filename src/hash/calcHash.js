import path from "path"
import {fileURLToPath} from "url"
import {createReadStream} from "fs"
import {createHash} from "crypto"

const calculateHash = async () => {
    const fileName = "fileToCalculateHashFor.txt";
    const filePath = path.resolve(fileURLToPath(import.meta.url), "..", "files", fileName);
    const hash = createHash("sha256");
    const readable = createReadStream(filePath)
    readable.on('data', (chunk) => {
        hash.update(chunk);
    })
    readable.on("end", () => {
        console.log(hash.digest("hex"))
    })
};

await calculateHash();