export async function useFetch(_url){
    try {
        let result = await fetch(_url)
        let data = await result.json()
        console.log('data', data)
        return data
    } catch (error) {
        console.error(error)        
    }
}