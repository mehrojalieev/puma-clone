const validateToken = (token: string) => {
    try {
        const decoded = JSON.parse(atob(token.split(".")[1]))
        if (decoded.exp > Date.now() / 1000) return {
            decoded,
            isValid: true
        }
        throw new Error("Token expired")
    }
    catch (error: any) {
        return {
            decoded: null,
            isValid: false
        }

    }
}


export default validateToken