import http from 'superagent'


//let baseUrl = 'http://10.3.136.153:3000/'
let baseUrl="http://localhost:3000/"
//let baseUrl = 'http://127.0.0.1:3000/'

const geturl = (url) => {
    if(url.startsWith('http')){
        return url;
    } else {
        return baseUrl + url;
    }
}


export default {
    get(url, params){
        return new Promise((resolve, reject) => {
            http.get(geturl(url))
            //传参用query，不然传不过去
            
            .query(params)
            .end((error, res) => {
                if(error){
                    reject(error)
                } else {
                    resolve(res)
                }
            })
        })
    },

    post(url, data){
        return new Promise((resolve, reject) => {
            http.post(geturl(url))
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            .send(data)
            .end((error, res) => {
                if(error){
                    reject(error)
                } else {
                    resolve(res)
                }
            })
        })        
    }
}