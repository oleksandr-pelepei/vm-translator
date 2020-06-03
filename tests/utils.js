const prettifyAssemblyCode = (code) => {
  return code.replace(/((^\s+)|(\s+$))/gm, '').trim();
};

module.exports = {
  prettifyAssemblyCode
}
