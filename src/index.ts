import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono()

app
  .use(logger())
  .use('/static/*', serveStatic({ root: './', }))
  .get('/', c => c.redirect('/static/nokotan.mp4'))

const port = 3000
const hostname = "0.0.0.0"
console.log(`Server is running on http://${hostname}:${port}`)

serve({
  fetch: app.fetch,
  port,
  hostname
})
