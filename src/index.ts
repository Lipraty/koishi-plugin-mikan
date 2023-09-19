import { Context, Schema } from 'koishi'
import { AnimeEndpoint } from './types'

export const name = 'mikan'

export interface Config {
  endpoint: AnimeEndpoint
  rss: boolean
}

export const Config: Schema<Config> = Schema.object({
  endpoint: Schema.union([
    Schema.const(AnimeEndpoint.MikananiMe).description('mikanani.me'),
    Schema.const(AnimeEndpoint.MikanimeTv).description('mikanime.tv （仅中国大陆）')
  ]).description('源地址').default(AnimeEndpoint.MikanimeTv),
  rss: Schema.boolean().description('使用 RSS 订阅').default(false),
})

export function apply(ctx: Context, config: Config) {
  const logger = ctx.logger('mikan')

}
