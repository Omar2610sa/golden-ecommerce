type Method = "GET" | "POST" | "PUT" | "DELETE"

export type Options = {
    method?: Method
    body?: Record<string, unknown>
    headers?: Record<string, string>
    next?: NextFetchRequestConfig
}


export type Profile = {
    name: string
    email: string
    phone: string
    phone_code: string
    country: {
        id: string;
        name: string
    }
    image: string
    country_id: number
    date_of_birth: string
    gender: string
    token?: string
}
