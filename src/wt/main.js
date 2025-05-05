import {isMainThread, Worker} from "worker_threads"
import {cpus} from "os"
import path from "path"
import {fileURLToPath} from "url"

const performCalculations = async () => {
    if (isMainThread) {
        const startingNumber = 10;
        const calculations = [];
        const cpuCores = cpus().length;
        const workerPath = path.resolve(fileURLToPath(import.meta.url), "..", "worker.js");
        for (let i = 0; i < cpuCores; i++) {
            calculations.push(new Promise((resolve, reject) => {
                const worker = new Worker(workerPath, {workerData: startingNumber + i});
                worker.on("message", result => resolve(result))
                worker.on("error", (err) => reject(err))
            }))
        }
        const calculationsResults = await Promise.allSettled(calculations);
        const output = calculationsResults.map(result => {
            const isSuccess = result.status === "fulfilled";
            return {
                status: isSuccess ? "resolved" : "error",
                data: isSuccess ? result.value : null
            }
        })
        console.log(output)
    }
};

await performCalculations();