import axios from 'axios';

export default{
    post: (url, data) => new Promise (
        async (resolve, reject) => {
            try{
                const res = await axios.post(url, data);
                resolve(res.data);
            }catch(e){
                if(!e.response){
                    reject("NodeJS server connection error.")
                }else{
                    reject(e.response.data.error)
                }
            }
        }
    ),

    get: url => new Promise (
        async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                resolve(res.data);
            }catch(e){
                if(!e.response){
                    reject("NodeJS server connection error.");
                }else{
                    reject(e.response.data.error);
                }
            }
        }
    ),
};