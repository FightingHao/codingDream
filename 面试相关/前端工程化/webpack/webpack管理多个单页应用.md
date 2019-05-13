一般项目里会包含多个单页应用，虽然多个单页应用也可以合并成一个但是这样做会导致用户没访问的部分也加载了。如果项目里有很多个单页应用，为每个单页应用配置一个entry和WebPlugin？如果项目又新增了一个单页应用，又去新增webpack配置？这样做太麻烦了，web-webpack-plugin里的AutoWebPlugin可以方便的解决这些问题。

module.exports = {
    plugins: [
        // 所有页面的入口目录
        new AutoWebPlugin('./src/'),
    ]
};
AutoWebPlugin会把./src/目录下所有每个文件夹作为一个单页页面的入口，自动为所有的页面入口配置一个WebPlugin输出对应的html。要新增一个页面就在./src/下新建一个文件夹包含这个单页应用所依赖的代码，AutoWebPlugin自动生成一个名叫文件夹名称的html文件。