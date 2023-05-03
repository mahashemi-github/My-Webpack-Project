import axios from 'axios'

function apiContentFetched () {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    axios.get('https://icanhazdadjoke.com', config)
    .then (res => {
        document.getElementById('card-body').innerHTML = res.data.joke
    })
}
 
export default apiContentFetched