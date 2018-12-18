// log :: a -> Effect log a
const log = (x) => {
  console.log(`result is : ${x}`) // eslint-disable-line no-console
}

module.exports.log = log
