import path from "node:path";
import { release, version } from "node:os";
import { createServer as createServerHttp } from "node:http";
import * as c from "./files/c.js";
import { fileURLToPath } from "node:url";

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = await import("./files/a.json", {
        assert: { type: "json" },
    });
} else {
    unknownObject = await import("./files/b.json", {
        assert: { type: "json" },
    });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(
    `Path to current directory is ${fileURLToPath(
        new URL(".", import.meta.url)
    )}`
);

const myServer = createServerHttp((_, res) => {
    res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject.default);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
