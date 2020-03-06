const child_process = require("child_process");
const packageInfo = require("./package.json");
const fs = require("fs-extra");

const libDir = __dirname + "/lib";
fs.ensureDirSync(libDir);
fs.emptyDirSync(libDir);
process.chdir(libDir);

const packages = [];
for (const packageName in packageInfo.devDependencies) {
  if (packageName.startsWith("tree-sitter-") && packageName !== "tree-sitter-cli") {
    packages.push(packageName);
  }
}

const treeSitterCli = __dirname + "/node_modules/.bin/tree-sitter";
for (const package of packages) {
  console.log(`* Build package ${package}`);
  child_process.execSync(`${treeSitterCli} build-wasm ../node_modules/${package}`);
}
