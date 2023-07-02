const parseArgs = () => {
    const args = process.argv.slice(2);
    const pairs = [];
    for (let i = 0; i < args.length; i++) {
        pairs.push([args[i], args[++i]]);
    }
    console.log(
        pairs.map((pair) => `${pair[0].substr(2)} is ${pair[1]}`).join(", ")
    );
};

parseArgs();
