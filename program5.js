const fs = require('fs');
const path = require('path');
const dirPath = process.argv[2];
const fileExt = process.argv[3];

fs.readdir(dirPath, function(err,files) {
  if (err) {
    return console.log(err);
  }
  for (i=0; i<files.length; i++)  //can use forEach function
  {
    if (path.extname(files[i]) == "." + fileExt) {
      console.log(files[i]);
    }
  }
}


)
