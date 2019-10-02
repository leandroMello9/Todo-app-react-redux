const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    //Porta de Entrada
    entry : './src/index.jsx',
    //Saida
    output:{
        path: __dirname +'/public',
        filename:'./app.js'
    },
    //Porta que ira startar
    devServer:{
        port:8080,
        contentBase:'./public',

    },
    //Reconhimento do arquivo .jsx
    resolve:{
        extensions : ['','.js','.jsx'],
        
        alias:{
            modules: __dirname+'/node_modules'
        }
    },
    //Arquivo CSS que ira ser utilizado
    plugins:[
        new ExtractTextPlugin('app.css')
    ],
    module:{
        //Arquivos que serão interpretados pelo loader
        loaders:[{
            //Carregando o tipo de arquivo
            test: /.js[x]?$/,
            loader:'babel-loader',
            exclude:'/node_modules',
            query : {
                presets: ['es2015','react'],
                plugins:['transform-object-rest-spread']
            }

        },{
            //Carregando o Css
            test: /\.css$/,
            loader:ExtractTextPlugin.extract('style-loader','css-loader')
        },{
            //Carregando alguns tipos de extensoes
            test:/\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader:'file'
        }]
    }

}