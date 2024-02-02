import { useEffect, useState } from "react"
import ApiInstance from "../../api"
import { AxiosResponse } from "axios"

const useFetch = (url: string) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | unknown>("")

    useEffect(() => {
        const fetch = async function () {
            try {
                setLoading(true)
                const response: AxiosResponse = await ApiInstance(url)
                const { data } = response
                setData(data.payload)
            }
            catch (error: unknown) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetch()
    }, [url])
    return { data, loading, error }
}

export default useFetch