
console.log(process.env);


const nodeExecPath = process.execPath;
console.log("Шлях до Node.js:", nodeExecPath);

globalThis.nodePath = nodeExecPath;