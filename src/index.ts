import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono()

app
  .use('/static/*', serveStatic({ root: './', }))
  .get('/', c => c.redirect('/static/nokotan.mp4'))

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
  hostname: "0.0.0.0"
})
