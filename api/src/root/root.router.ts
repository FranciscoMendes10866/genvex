import { Router } from 'express'

import RootController from './root.controller'

const router = Router()

router.post('/', RootController.index)

export default router
