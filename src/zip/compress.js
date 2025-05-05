import path from "path"
import { fileURLToPath } from "url"
import {pipeline} from "stream"
import {createReadStream, createWriteStream} from "fs"
import {createGzip} from "zlib"

const compress = async () => {
    const inputFileName = "fileToCompress.txt"
    const inputFilePath = path.resolve(fileURLToPath(import.meta.url), "..", "files", inputFileName);

    const outputFileName = "archive.gz"
    const outputFilePath = path.resolve(fileURLToPath(import.meta.url), "..", "files", outputFileName);

    const inputStream = createReadStream(inputFilePath);
    const outputStream = createWriteStream(outputFilePath);

    pipeline(
        inputStream,
        createGzip(),
        outputStream,
        (err) => {
            if (err) console.error("pipeline failed", err)
        }
    )
};

await compress();