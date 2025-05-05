const parseEnv = () => {
    const outputPairs = []
    const envKeys = Object.keys(process.env);
    for (const key of envKeys) {
        if (key.startsWith("RSS_")) {
            const envVar = process.env[key];
            outputPairs.push(`${key}=${envVar}`);
        }
    }
    console.log(outputPairs.join("; "));
};

parseEnv();