class FileStorageAdapter {
  // desktopApp = require('core/desktop_app.js');

  constructor() {
    this.fs = window.require('fs');
  }

  // getAppDataDir() {
  //     return this.desktopApp.getAppDataDir();
  // }

  read(path) {
    return new Promise((resolve, reject) => {
      this.fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          return reject(err);
        }

        return resolve(data);
      });
    });
  }

  remove(path) {
    return new Promise((resolve, reject) => {
      this.fs.unlink(path, (err) => {
        if (err) {
          return reject(err);
        }

        return resolve();
      });
    });
  }

  write(path, value) {
    return new Promise((resolve, reject) => {
      this.fs.writeFile(path, value, 'utf8', (err) => {
        if (err) {
          return reject(err);
        }

        return resolve();
      });
    });
  }
}

export default FileStorageAdapter;
