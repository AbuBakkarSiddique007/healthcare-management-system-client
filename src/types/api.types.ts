export interface ApiResponse<TData = unknown> {
    success: boolean
    message: string
    data: TData
    meta?: PaginationMeta
}

interface PaginationMeta {
    page: number
    limit: number
    total: number
    totalPages: number
}

export interface ApiErrorResponse {
    success: boolean
    message: string
}