var fs = require('fs-extra');
var path = require('path');
var childProcess = require('child_process');

function make(targets, options) {
  console.log(targets, options);

  console.log(__dirname);
  var mainFile = targets[0];
  var outputFile = options.output;
  var workspace = './elm-stuff/.elm-debug';
  fs.ensureDir(workspace);
  var mainSrc = fs.readFileSync(mainFile, 'utf8');

  var splitted = mainSrc.split('import');
  var first = splitted.shift();
  mainSrc = first + 'import TimeTravel\nimport' + splitted.join('import');
  mainSrc = mainSrc.replace(/[\.a-zA-Z_]*\.program/, 'TimeTravel.program');
  fs.writeFileSync(path.resolve(workspace, mainFile), mainSrc);
  if(fs.existsSync('elm-package.json')) {
    fs.copySync('elm-package.json', path.resolve(workspace, 'elm-package.json'));
  }
  elmPackageInstall(workspace).then(() => {
    return elmPackageInstallElmDebug(workspace).then(() => {
      return elmMake(workspace, mainFile, path.resolve('.', outputFile));
    });
  }).catch(e => {
    process.exit(1);
  });
}

function elmPackageInstallElmDebug(workspace) {
  return Promise.resolve();
  // return command(workspace, 'elm-package', ['install', '--yes', 'jinjor/elm-time-travel']);
}

function elmPackageInstall(workspace) {
  return command(workspace, 'elm-package', ['install', '--yes']);
}

function elmMake(workspace, mainFile, outputFile) {
  return command(workspace, 'elm-make', [mainFile, '--yes', '--output=' + outputFile]);
}

function command(cwd, cmd, args) {
  return new Promise((resolve, reject) => {
    var p = childProcess.spawn(cmd, args, {
      cwd: cwd,
      stdio: 'inherit'
    });
    p.on('close', (code) => {
      if (code !== 0) {
        reject();
      } else {
        resolve();
      }
    });
  });
}

module.exports = {
  make: make
};
