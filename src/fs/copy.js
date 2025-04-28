import path from "path"
import {fileURLToPath} from "url";
import { cp } from "fs/promises";

const copy = async () => {
    const srcFile = "files"
    const destFile = "files_copy"
    const srcPath = path.resolve(fileURLToPath(import.meta.url), '..', srcFile)
    const destPath = path.resolve(fileURLToPath(import.meta.url), '..', destFile)

    try {
        await cp(srcPath, destPath, {errorOnExist: true, recursive: true, force: false})
    } catch(e) {
        throw new Error("FS operation failed");
    }
};

await copy();
