import path from "path"
import {fileURLToPath} from "url"
import {createReadStream, createWriteStream} from "fs"
import {createUnzip} from "zlib"
import { pipeline } from "stream";

const decompress = async () => {
    const inputFileName = "archive.gz";
    const inputFilePath = path.resolve(fileURLToPath(import.meta.url), "..", "files", inputFileName);

    const outputFileName = "fileToCompress.txt";
    const outputFilePath = path.resolve(fileURLToPath(import.meta.url), "..", "files", outputFileName);

    const inputStream = createReadStream(inputFilePath);
    const outputStream = createWriteStream(outputFilePath);

    pipeline(
        inputStream,
        createUnzip(),
        outputStream,
        (err) => {
            if (err) console.error("pipeline failed", err);
        }
    )
};

await decompress();