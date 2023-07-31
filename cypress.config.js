const { defineConfig } = require("cypress");
const fs = require('fs');
const { connect } = require("http2");
const axios = require('axios');
//const xlsx = require ('xlsx');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", { //this event will be executed asynchronously
        logMessage(message) {{
          console.log(message);
          return null;
        }},
      },
        hello({ name, age }) {
        console.log('Hello ${name}, ${age}`);
        return null
        }
      )
    },
    openFileIfExist(filePath) {
      if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf8');
      }
      return null;
    },
    checkCountOfFilesInFolder(folerPath) {
      return new Promise((resolve, reject) => {
        fs.readdir(folerPath, (err, files) => {
          if(err) {
            return reject(err);
          }
          return resolve(files.length);
        });
      })
    },
    async queryToDb(query) {
      const connection = mysql.createConnection({host: 'local host', user: 'admin', password: 'admin', database: 'test'});
      const [rows, fields] = await connection.promise().query(query);
      connection.end();
      return rows;
    },
    async fetchDataFromAPI(url) {
      const response = await axios.get(url);
      return response.data;
    }
  },
});
