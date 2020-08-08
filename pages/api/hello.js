// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  var d = new Date()
  res.statusCode = 200
  console.warn(d)
  console.info({ name: 'brone ukr', date: d })
  console.info([77,888])
  res.json({ name: 'brone ukr', date: d })
}
