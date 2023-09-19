export enum AnimeEndpoint {
  MikananiMe = 'mikanani.me',
  MikanimeTv = 'mikanime.tv',
}

export interface AnimeUser {
  name: string
  id: string
  cookie: string
  ss: AnimeSubscription[]
}

export interface AnimeToday {
  data: BangumiInfomation[]
}

export interface AnimeSubscription {
  name: string
  type: AnimeSubscriptionType
  forme: string              // user id
  data: (Translator | BangumiInfomation)[]
}

export enum AnimeSubscriptionType {
  Translator = 'translator', // 字幕组
  Bangumi = 'bangumi',       // 番剧
}

export interface Translator {
  name: string               // 字幕组名
  id: string                 // 字幕组 ID
  language: string[]         // 字幕组翻译语言
  bangumi: string[]          // 字幕组翻译的番剧
}

export interface BangumiInfomation {
  name: string               // 番剧名
  author: string             // 作者
  season: number             // 第几季
  episode: number            // 总集数
  homePage: string           // 官网
  location: string           // 番剧地址
  description: string        // 简介
  translator?: string        // 字幕组
  coverImage: string         // 封面图片地址
  period: string             // 更新周期（每周几/月/季/年更新）
  release: string            // 首播日期
  status: BangumiSatatus     // 状态
}

export type BangumiPeriod = `${number}.${BangumiPeriodKey}` // e.g. 1.week, 0.month, 0.year. default zero except weeks.
export type BangumiPeriodKey = 'year' | 'month' | 'week'

export enum BangumiSatatus {
  OnGoing = 1,
  Finished = 2,
  NotYetAired = 0,
  Unknown = -1,
}
