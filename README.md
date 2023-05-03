# MY WebPack Project

#### By _**Mahashi-github**_

#### This is a WebPack Project.

## Technologies Used
* _html_
* _css_
* _javascript_
* _node.js_
* _express_
* _axios_
* _webpack_
* _webpack-cli_
* _sass_
* _sass-loader_
* _css-loader_
* _style-loader_
* _html-webpack-plugin_
* _webpack-dev-server_
* _babel-loader_
* _@babel/core_
* _@babel/preset-env_
* _webpack-bundle-analyzer_


## Setup
To run this project, install it locally using npm:

```
$ npm install
$ npm run build
OR
$ npm run dev
```

## NOTE
To create dist directory in the case when caching capability is activated, you should first run 'npm run build', not 'npm run dev'. Because 'npm run dev' runs from memory (it recompiles but does not rebuild the resulting code). It does not run directly from the dist directory. Only the build command, that runs the webpack directly, build it and compile it to the bundle.js file. Instead wepack-dev-server, only recompiles the code and stores the result in memory not an actual file. So first run 'npm run build' and then 'npm run dev'.  

This part can be configured in different ways. There could be a template.html OR can be done by adding a path to the webpack config file: inside output part add the item: publicPath: 'dist' (it is a relative path that tells the server where to serve the code in memory from) and then server will read from this path. 

In here we have used the first solution by using Html-Webpack-Plugin. Because we do not want to directly edit the index.html folder in the dist directory and  because we are going to be able to delete the dist directory and rebuild the whole dist directory again. So we install a plugin called Html-Webpack-Plugin that recreates the whole dist directory and we create a template.html in our src directory that will be later compiled into index.html in the dist directory. 

The source-map capability is also activated. 

To configure webpack-server run command in the package.json, both of these two methods work:
    "dev": "webpack serve" and "dev": "webpack-dev-server". 

We did not use the following config in here but it is good to know about typescript files: to resolve every ts or js files to the dist directory, add this to the config file: 
resolve: {
    extensions: ['.ts', '.js']
}