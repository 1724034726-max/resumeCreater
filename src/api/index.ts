import type { AxiosRequestConfig, Method } from 'axios'
import request from '@/utils/request'
import config from './modules'

type ExtractKey<T> = T extends Record<infer K, any> ? K : never
type RequestKey = ExtractKey<typeof config>
type RequestConfig<K extends RequestKey> = (typeof config)[K]
type RequestPayload<
  K extends RequestKey,
  C extends RequestConfig<K>
> = C extends { method: 'get' | 'delete' }
  ? {
      params?: Record<string, any>
      path?: Record<string, string | number>
    }
  : {
      data?: any
      path?: Record<string, string | number>
    }

type ExtraOptions = Omit<
  AxiosRequestConfig,
  'url' | 'method' | 'params' | 'data'
>

const buildUrl = (template: string, path: RequestPayload<RequestKey, any>['path']) =>
  template.replace(/:(\w+)/g, (_, key) => {
    const value = path?.[key]
    if (value === undefined) {
      throw new Error(`缺少路径参数: ${key}`)
    }
    return encodeURIComponent(String(value))
  })

async function requestWrapper<K extends RequestKey>(
  key: K,
  payload?: RequestPayload<K, RequestConfig<K>>,
  extra?: ExtraOptions,
) {
  const requestConfig = config[key]
  if (!requestConfig) {
    throw new Error(`未找到接口: ${String(key)}`)
  }

  const method = (requestConfig.method as Method).toLowerCase() as Method
  const url = buildUrl(requestConfig.url, payload?.path)

  const params = 'params' in (payload ?? {}) ? (payload as any).params : undefined
  const data = 'data' in (payload ?? {}) ? (payload as any).data : payload

  try {
    const response = await request({
      ...requestConfig,
      ...extra,
      url,
      method,
      params,
      data,
    })
    return [response, null] as const
  } catch (error) {
    return [null, (error as any).response.data] as const
  }
}

type Api = {
  [K in RequestKey]: (
    payload?: RequestPayload<K, RequestConfig<K>>,
    extra?: ExtraOptions,
  ) => Promise<readonly [unknown, unknown]>
}

const api = new Proxy({} as Api, {
  get(_, key: string) {
    return (payload: unknown, extra?: ExtraOptions) =>
      requestWrapper(key as RequestKey, payload as any, extra)
  },
})

export default api
