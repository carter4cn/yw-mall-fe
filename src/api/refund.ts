import { request } from './request'
import type { OkResp, RefundRequest, ListRefundRequestsResp } from '@/types/api'

export const submitRefund = (data: {
  orderId: number
  amount: number
  reason: string
  evidence?: string[]
}) =>
  request<{ refundId: number }>({
    url: '/api/refund/submit',
    method: 'POST',
    auth: true,
    data,
  })

export const getRefund = (id: number) =>
  request<RefundRequest>({ url: `/api/refund/${id}`, auth: true })

export const listMyRefunds = (params: { status?: number; page?: number; pageSize?: number }) =>
  request<ListRefundRequestsResp>({
    url: '/api/refund/list',
    auth: true,
    data: {
      status: params.status ?? -1,
      page: params.page ?? 1,
      pageSize: params.pageSize ?? 20,
    },
  })

export const appealRefund = (id: number, reason: string) =>
  request<OkResp>({
    url: `/api/refund/${id}/appeal`,
    method: 'POST',
    auth: true,
    data: { reason },
  })
