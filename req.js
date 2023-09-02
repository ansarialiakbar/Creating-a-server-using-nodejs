const http = require('http')
// const http = http.request() /* this method is helpfull in server to server network call */
const options = {
    hostname: 'fakestoreapi.com',
    path: '/products/1',
    method:'GET'
}

const apiReq = http.request(options, (apiRes) => {
     apiRes.on("Data", (data)=> {
        console.log(data.toString())
    })
})
apiReq.on("error", ()=>{
    console.log(e)
})
apiReq.end()