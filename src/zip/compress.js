import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import { createGzip } from "node:zlib";

const compress = async () => {
    const srcFilePath = fileURLToPath(
        new URL("files/fileToCompress.txt", import.meta.url)
    );
    const destFilePath = fileURLToPath(
        new URL("files/archive.gz", import.meta.url)
    );
    const readableStream = fs.createReadStream(srcFilePath);
    const writeableStream = fs.createWriteStream(destFilePath);
    const gzip = createGzip();
    await pipeline(readableStream, gzip, writeableStream);
};

await compress();
