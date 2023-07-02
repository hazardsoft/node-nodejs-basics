import fs from "node:fs/promises";

async function checkIfFileExists(path) {
    let isFileExist = false;
    try {
        await fs.access(path, fs.constants.F_OK);
        isFileExist = true;
    } catch (e) {
        console.error("error occurred while calling fs.access:", e);
    }
    return isFileExist;
}

export default checkIfFileExists;
