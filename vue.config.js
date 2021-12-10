// 跨域配置
module.exports = {

  
  publicPath: './',//解决打包部署找不到资源路径
  devServer: {                //记住，别写错了devServer//设置本地默认端口  选填
    port: 8098,
    proxy: {               //设置代理，必须填
      '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
        target: 'http://47.96.186.60:6060',     //代理的目标地址'http://localhost:6060'  http://47.96.186.60:6060
        changeOrigin: true,              //是否设置同源，输入是的
        pathRewrite: {                   //路径重写
          '/api': ''                     //选择忽略拦截器里面的单词
        }
      }
    }
  },
  //引用element plus报错
  //解决Can‘t import the named export ‘ArrowDown‘ from non EcmaScript module 等报错信息
  configureWebpack:{
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto"
            },
        ]
    }
}
}
