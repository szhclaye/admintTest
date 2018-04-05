/*
 * @author: shazhenghu,LastModifiedTime:undefined 
 * @params:  Provider -->routeComp (route.js)
 * @params:          |-->store (store.js)
 * @params: 
 */
if(process.env.NODE_ENV === 'production'){
    module.exports = require('./Root.prod.js');
}else{
    module.exports = require('./Root.dev.js')
}