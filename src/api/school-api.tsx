import axios from "axios"

const url = 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json'

export const schoolApi = async ()=>{
    try{
        const response = await axios.get(url);
        return response.data;
    }catch(error){
        console.log('Error Fetching Schools Data',error)
    }
}