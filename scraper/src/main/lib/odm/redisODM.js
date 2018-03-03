import 'babel-polyfill'

// Generates a flat array of an object's key and values
// Example:
//   { 'name': 'abc', 'code': 56 }
//   is generated as
//   [ 'name', 'abc', 'code', 56 ]
function * flattenData (data) {
  const entries = Object.entries(data)
  for (let i = 0, len = entries.length; i < len; i++) {
    const entry = entries[i]

    yield entry[0]
    yield entry[1]
  }
}

// Persits data to a redis server
// Data has to be a json array
// Example:
//   [
//     { 'name': 'abc', 'code': 56 },
//     { 'name': 'efg', 'code': 84 }
//   ]
export default ({ redis }) => ({ host, port }) => {
  const client = redis({ host, port })

  // Returns an ODM
  return {
    // data is the data
    // idKey is the key in the data which will be used as the id in the redis
    //   hash object
    create: async ({ data, idKey }) => {
      const id = data[idKey]
      const flattenedData = [id, ...flattenData(data)]
      return {
        save: async () => client.hmset(...flattenedData)
      }
    }
  }
}
