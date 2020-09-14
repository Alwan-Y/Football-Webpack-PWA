import axios from 'axios'
export default  async (url) => {
    return await axios.get(url,{headers:{'X-Auth-Token':'53a5308fb9d2451191fa93800479f221'}})
}