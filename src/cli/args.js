const parseArgs = () => {
    const outputPairs = []
    const args = process.argv.slice(2);
    for (let i = 0; i < args.length; i += 2) {
        outputPairs.push(`${args[i]} is ${args[i+1]}`)
    }
    console.log(outputPairs.join(", "));
};

parseArgs();