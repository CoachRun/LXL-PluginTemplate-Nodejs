const fs = require('fs');
var path = require('path');
const { exit } = require('process');

// Webpack config
module.exports = (env, argv) => {
    let DEV_MODE = (argv.mode === 'development')

    // Read Package Info
    var packageConfig
    try {
        let packageData = fs.readFileSync('package.json', 'utf8')
        packageConfig = JSON.parse(packageData)
    } catch (e) {
        console.error('package.json read failed\n' + e)
        exit(-1);
    }
    var PluginInfo = {
        name: packageConfig.name || '',
        version: packageConfig.version || '',
        author: packageConfig.author || '',
        homepage: packageConfig.homepage || '',
        license: packageConfig.license || '',
    }

    // Get Git Commit Version Hash
    var gitCurrentCommitHash = null
    {
        var gitCurrentHead = null
        try {
            gitCurrentHead = fs.readFileSync(path.resolve(__dirname, '.git/HEAD'), 'utf8').trim();
            let ref = gitCurrentHead.split(':')[1].trim()
            gitCurrentCommitHash = fs.readFileSync(path.resolve(__dirname, '.git/' + ref), 'utf8').trim();
        } catch (e) {
            gitCurrentHead = null
        }
    }

    // Get Dist File Name
    var outputDistVersion = PluginInfo.version
    if (gitCurrentCommitHash !== null) {
        outputDistVersion += '+' + gitCurrentCommitHash.slice(0, 7)
    }

    // Mode Tag
    var outputDistFileName = ''
    if (DEV_MODE) {
        outputDistFileName = `${PluginInfo.name}[${outputDistVersion}](DEV).js`
    } else {
        outputDistFileName = `${PluginInfo.name}[${outputDistVersion}](PROD).js`
    }

    var config = {
        target: 'web',
        entry: './src/main.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: outputDistFileName
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: [{ loader: path.resolve(__dirname, 'loaders/lxl-loader'), options: PluginInfo }]
                }
            ]
        },
        resolveLoader: {
            modules: [
                'node_modules',
                path.resolve(__dirname, 'loaders')
            ]
        }
    }
    if (DEV_MODE) {
        config.devtool = 'source-map';
    }
    return config
};