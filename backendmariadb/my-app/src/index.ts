import { serve } from '@hono/node-server'
import { Hono } from 'hono'

import ping from './ping/ping.js';
import greet from './greet/greet.js';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/', ping)
app.route('/', greet)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
