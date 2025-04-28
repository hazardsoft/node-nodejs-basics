import path from "path"
import {fileURLToPath} from "url"
import {rename as fsRename, access} from "fs/promises"

const rename = async () => {
    const srcFile = "wrongFilename.txt";
    const destFile = "properFilename.md"
    const srcPath = path.resolve(fileURLToPath(import.meta.url), '..', "files", srcFile)
    const destPath = path.resolve(fileURLToPath(import.meta.url), '..', "files", destFile)

    try {
        await access(srcPath)
    } catch (e) {
        // source file does not exist
        if (e.code === 'ENOENT' && e.path === srcPath) {
            throw new Error("FS operation failed");
        } else {
            throw e;
        }
    }

    try {
        await access(destPath);
        // if we got here, then destination files exists already
        throw new Error("FS operation failed");
    } catch(e) {
        // destination file does not exist
        if (e.code === 'ENOENT' && e.path === destPath) {
            fsRename(srcPath, destPath);
        } else {
            throw e;
        }
    }
};

await rename();