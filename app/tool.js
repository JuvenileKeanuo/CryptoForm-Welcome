let source = `王  安   北京理工大学
马  超   哈尔滨理工大学`

let result = source.split('\n').map((item) => {
  let nameSplit = item.split('   ')
  return {
    name: nameSplit[0].replace(/\s/g, ''),
    from: nameSplit[1],
  }
})

console.log(result)
