>npm i
>change plugins: new CopyWebpackPlugin, if static files or folder needs to be copied from src to dist folder
>configure eslintrc file
>add all imports to vendor.js
>change entry files and extensions (inludint index.js/jsx file) in webpack.config
>fonts that imported into scss will be copied automaticly
>npm start/npm run dev/npm run prod/npm run watch


> webpack-mockup@1.0.0 prod C:\Users\vishi\Desktop\webpack-mockup
> cross-env NODE_ENV=production webpack --mode production        

(node:6044) [DEP_WEBPACK_COMPILATION_OPTIMIZE_CHUNK_ASSETS] DeprecationWarning: optimizeChunkAssets is deprecated (use Compilation.hook.processAssets instead and use one of Compilation.PROCESS_ASSETS_STAGE_* as stage option)
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:6044) [DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_HASH] DeprecationWarning: [hash] is now [fullhash] (also consider using [chunkhash] or [contenthash], see documentation for details)
(node:6044) [DEP_WEBPACK_COMPILATION_ASSETS] DeprecationWarning: Compilation.assets will be frozen in future, all modifications are deprecated.
BREAKING CHANGE: No more changes should happen to Compilation.assets after sealing the Compilation.
        Do changes to assets earlier, e. g. in Compilation.hooks.processAssets.
        Make sure to select an appropriate stage from Compilation.PROCESS_ASSETS_STAGE_*.
[webpack-cli] Compilation finished
assets by path *.js 214 KiB
  asset 301.43b251f9d024e5ba89cc.js 213 KiB [emitted] [immutable] [minimized] (id hint: vendors) 1 related asset
  asset main.43b251f9d024e5ba89cc.js 851 bytes [emitted] [immutable] [minimized] (name: main)
  asset vendor.43b251f9d024e5ba89cc.js 0 bytes [emitted] [immutable] [minimized] (name: vendor)
asset index.html 412 bytes [emitted]
asset main.43b251f9d024e5ba89cc.css 43 bytes [emitted] [immutable] (name: main)
Entrypoint main 214 KiB = 301.43b251f9d024e5ba89cc.js 213 KiB main.43b251f9d024e5ba89cc.css 43 bytes main.43b251f9d024e5ba89cc.js 851 bytes     
Entrypoint vendor = vendor.43b251f9d024e5ba89cc.js
runtime modules 2.59 KiB 2 modules
orphan modules 50 bytes [orphan] 1 module
modules by path ../node_modules/core-js/modules/*.js 190 KiB 273 modules
modules by path ../node_modules/core-js/library/ 6.43 KiB 18 modules
modules by path ../node_modules/core-js/fn/ 1.29 KiB 11 modules
modules by path ./ 533 bytes (javascript) 44 bytes (css/mini-extract) 3 modules
modules by path ../node_modules/@babel/polyfill/lib/*.js 1.22 KiB 2 modules
modules by path ../node_modules/react/ 6.48 KiB 2 modules
modules by path ../node_modules/react-dom/ 119 KiB
  ../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../node_modules/react-dom/cjs/react-dom.production.min.js 118 KiB [built] [code generated]
modules by path ../node_modules/scheduler/ 4.91 KiB
  ../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../node_modules/scheduler/cjs/scheduler.production.min.js 4.72 KiB [built] [code generated]
4 modules
webpack 5.11.0 compiled successfully in 5968 ms
PS C:\Users\vishi\Desktop\webpack-mockup> 
