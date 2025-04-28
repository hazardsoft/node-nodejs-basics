import {workerData, parentPort} from "worker_threads"

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    if (typeof workerData === "number") {
        const result = nthFibonacci(workerData)
        parentPort.postMessage(result);
    } else {
        throw new Error("invalid data passed to worker", workerData);
    }
};

sendResult();