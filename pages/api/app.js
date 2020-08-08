import * as Sentry from '@sentry/node'
Sentry.init({ dsn: 'https://1aa9f096f9dd49ee95def5e142b0a4db@o431614.ingest.sentry.io/5383204' })

export default (req, res) => {
  var d = new Date()
  
  res.statusCode = 200
  console.warn(d)
  console.info({ name: 'brone ukr', date: d })
  console.info([77,888])
  
  Sentry.captureException(new Error("Something broke"))
  res.json({ name: 'brone ukr', date: d })
}
