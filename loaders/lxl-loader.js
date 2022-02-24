module.exports = function (source) {
  let options = this.getOptions()
  let res = source
  res = res.replace(/__PluginInfo__name__/g, options.name)
  res = res.replace(/__PluginInfo__version__/g, options.version)
  res = res.replace(/__PluginInfo__author__/g, options.author)
  res = res.replace(/__PluginInfo__homepage__/g, options.homepage)
  res = res.replace(/__PluginInfo__license__/g, options.license)
  return res;
};