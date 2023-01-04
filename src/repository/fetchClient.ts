

export const fetchClient = async (url:string) => {
    let fetchResponse: any;
    try {
        const res = await fetch(url)
        fetchResponse = await res.json()

    } catch {
        fetchResponse = "ERROR"
    }

    return fetchResponse
}