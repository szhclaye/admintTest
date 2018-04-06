/*
 * @author: shazhenghu,CreateTime:2018-04-06 19:53:04,LastModifiedTime:2018-04-06 19:53:04 
 * @input:   Provider -->route (route.js)
                      |-->store (store.js)
 * @output:  
 * @params: 
 */

if (process.env.NODE_ENV === "production") {
    module.exports = require("./Root.prod.js");
} else {
    module.exports = require("./Root.dev.js");
}
