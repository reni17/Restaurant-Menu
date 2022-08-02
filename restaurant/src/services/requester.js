const request  =async (method, url, data) => {

    try {
        let request

        if(method === "GET"){
            request = fetch(url)
        }else{
            request = fetch(url , {
                method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
        }

        let response = await request
        const result = await response.json()

        return result

    } catch (error) {
        console.log(error)
    }
}

export const get = request.bind({}, "GET")
export const post = request.bind({}, "POST")
export const put = request.bind({}, "PUT")
export const remove = request.bind({}, "DELETE")
