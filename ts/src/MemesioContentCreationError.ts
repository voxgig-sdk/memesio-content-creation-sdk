
import { Context } from './Context'


class MemesioContentCreationError extends Error {

  isMemesioContentCreationError = true

  sdk = 'MemesioContentCreation'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  MemesioContentCreationError
}

