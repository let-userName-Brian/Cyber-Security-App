//fetch port 8080

const url = 'http://localhost:8080/'


export async function hackerNewsFetch() {
    const response = await fetch(`${url}hacker-news`)
    const json = await response.json()
    return json
}


//fetch api @ https://remotive.io/api/remote-jobs?search=front%20end
export async function remotiveFetch() {
    const response = await fetch("https://remotive.io/api/remote-jobs?search=front%20end")
    const result = await response.json()
    return result
}
