const prettifyAssemblyCode = (code) => {
  return code.replace(/((^ +)|( +$))/gm, '').trim();
};

module.exports = {
  prettifyAssemblyCode
}
