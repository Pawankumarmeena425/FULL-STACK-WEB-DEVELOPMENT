const fs = require("fs");
let text = fs.readFileSync("Important_points.txt","utf-8");
console.log("The content of the file is : ");
console.log(text);
text = text.replace("font" , "Font");
console.log("Writing in the file ..............!");
fs.writeFileSync("abc.txt",text);
console.log(text);