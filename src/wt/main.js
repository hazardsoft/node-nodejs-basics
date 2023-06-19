import { Worker } from "node:worker_threads";
import os from "node:os";
import { URL } from "node:url";

const successfulStatus = "fulfilled";

const performCalculations = async () => {
    let startNumber = 10;
    const numofCPUs = os.cpus().length;
    const promises = [];
    for (let i = 0; i < numofCPUs; i++) {
        promises.push(runWorker(startNumber));
        startNumber++;
    }
    const results = await Promise.allSettled(promises);
    const transformedResults = results.map((result) => {
        return {
            status: result.status === successfulStatus ? "resolved" : "error",
            data: result.status === successfulStatus ? result.value : null,
        };
    });
    console.log(transformedResults);
};

async function runWorker(data) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(new URL("./worker.js", import.meta.url), {
            workerData: data,
        });
        worker.on("message", resolve);
        worker.on("error", reject);
        worker.on("exit", reject);
    });
}

await performCalculations();
