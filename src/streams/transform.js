import {Transform} from "stream"

const transform = async () => {
    const transform = new Transform({
        transform(chunk, _, callback) {
            const reversed = chunk.toString().split("").reverse().join("")
            this.push(reversed)
            callback()
        }
    })

    process.stdin
        .pipe(transform)
        .pipe(process.stdout)
    
};

await transform();