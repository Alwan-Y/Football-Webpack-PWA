import req from './index'

const BASE_URL = "https://api.football-data.org/v2/areas/"

export const get = async () => {
    const res = await req(BASE_URL)
    const data = res.data
    return data
}

export const single = async id => {
    const res = await req(BASE_URL+"/"+id)
    const data = res.data
    return data
}