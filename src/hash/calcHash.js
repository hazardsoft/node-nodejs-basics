import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const calculateHash = async () => {
    const pathToFile = fileURLToPath(
        new URL("files/fileToCalculateHashFor.txt", import.meta.url)
    );
    const fileBuffer = await fs.readFile(pathToFile);
    const hexHash = createHash("sha256").update(fileBuffer).digest("hex");
    console.log(hexHash);
};

await calculateHash();
