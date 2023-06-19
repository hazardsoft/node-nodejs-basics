const parseEnv = () => {
    const envVars = [];
    const prefix = "RSS_";
    for (const env in process.env) {
        if (env.startsWith(prefix)) {
            envVars.push([env, process.env[env]]);
        }
    }
    console.log(envVars.map((pair) => `${pair[0]}=${pair[1]}`).join("; "));
};

parseEnv();
