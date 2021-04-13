module.exports = function(dir) {
    const fs = require('fs');               // Importing fs (File System)
    const path = require('path');           // Importing path

    const ls = fs.readdirSync(
        dir != undefined                   // If the 1st argument (0: index.exe: 1: directory) is not undefined
             ? path.join(dir)              // We set the path to the path that was mentioned inside of the 1rd argument
             : path.join("."),              // If the 1st argument is undefined, we then set the default path to . (Active directory)
    
        callback = (err, list) => {
            if (err) {                      // If we get an error:
                console.log(err);           // We log the error
                return;                     // Then we exit the function
            }
            return list;                    // If no errors, we return the list of files in the directory
        }
    )
    
    return ls.join("\n");             // Logging the files & directories (joined by new line)
}