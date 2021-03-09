import 'dotenv/config'

import app from './app'

const { PORT } = process.env
const port = PORT || 4000

app.listen(port, () => {
  console.log(`🍟 Api listening at http://localhost:${port} 🍩`)
})
