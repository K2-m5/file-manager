export const getInitVariables = (variableName) => {
  const variables = {}
    
  process.argv.forEach(item => {
    if (item.startsWith('--')) {
      const name = item.match(/^[^=]*/)[0];
      const value = item.match(/(?<=^.*=).*/)[0]
  
      variables[name] = value
    }
    
  }) 
  
  if (variableName && variables[variableName]) {
    return variables[variableName];
  }

  return variables;
}
