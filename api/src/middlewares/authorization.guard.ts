import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import TokenDTO from '@utils/token.dto'

const { JWT_SECRET_KEY } = process.env

const AuthorizationGuard = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.sendStatus(403)
  }
  const token = authorization.replace('Bearer', '').trim()
  try {
    const decoded = verify(token, JWT_SECRET_KEY)
    const { id } = decoded as TokenDTO
    req.tokenId = id
    return next()
  } catch {
    return res.sendStatus(403)
  }
}

export default AuthorizationGuard
