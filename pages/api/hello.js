// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  var d = new Date()
  res.statusCode = 200
  console.log(d)
  res.json({ name: 'brone ukr', date: d })
}
