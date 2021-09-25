import axios from "axios";

class urlist {
    constructor (url){
        this.url = url
    }
}

var url = new urlist('https://todos-go.herokuapp.com/api');
url=url.url


    const Http_get = async ()=>{
        const Get = await axios({
            method:'GET',
            baseURL:url,
            url:'/todos',
            responseType:'json'
        })
    return Get
    }

    const Http_post = async (data)=>{
        const Patch = await axios(
            {
                method:'POST',
                baseURL:url,
                url:'/todos',
                data: data
            }
        )
        return Patch
    }

export {Http_get, Http_post}

