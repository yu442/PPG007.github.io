const html = require('../../html/index.js')
const css = require('../../css/index.js')
const javascript = require('../../javascript/index.js')
const vue2 = require('../../vue2/index.js')
const vue3 = require('../../vue3/index.js')
const es6 = require('../../es6/index.js')
const axios = require('../../axios/index.js')
const go = require('../../go/index.js')
const gin = require('../../gin/index.js')
const gRPCAndProtobuf = require('../../grpc-and-protobuf/index.js')
const mongodb = require('../../mongodb/index.js')
const git = require('../../git/index.js')

const Sidebar = {
  ...html.HTMLSidebar,
  ...css.CssSidebar,
  ...javascript.JavaScriptSidebar,
  ...vue2.Vue2Sidebar,
  ...es6.ES6Sidebar,
  ...vue3.Vue3Sidebar,
  ...axios.AxiosSidebar,
  ...go.GoSidebar,
  ...gRPCAndProtobuf.gRPCAndProtobufSidebar,
  ...gin.GinSidebar,
  ...mongodb.MongoDBSidebar,
  ...git.GitSidebar,
}

module.exports.Sidebar = Sidebar