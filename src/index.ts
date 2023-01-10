import { Context, Schema } from 'koishi'

export const name = 'mikan'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  const logger = ctx.logger('mikan')
  
}
