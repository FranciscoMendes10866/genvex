import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'

import RootRouter from './root/root.router'

const { NODE_ENV } = process.env
const app = express()

if (NODE_ENV !== 'TESTING') app.use(morgan('dev'))

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(compression())
app.use('/api', RootRouter)

export default app
