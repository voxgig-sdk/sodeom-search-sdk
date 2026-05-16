
import { Context } from './Context'


class SodeomSearchError extends Error {

  isSodeomSearchError = true

  sdk = 'SodeomSearch'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  SodeomSearchError
}

