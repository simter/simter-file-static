const about = import('./pages/about')

async function foo () { 
  const v = await about
  return v.render()
} 
 
foo().then(v => console.log(v))