import { Transform } from "node:stream";

const transform = async () => {
    const reverse = new Transform({
        transform: (chunk, _, callback) => {
            callback(null, chunk.reverse());
        },
    });
    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
