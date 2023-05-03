import './styles/main.scss'
import laughing from './assets/amazethumbs.png'
import apiContentFetched from './apiContentFetched'

const laughImoji = document.getElementById('laughing')
laughImoji.src = laughing 

const cardBtn = document.getElementById('btn') 
cardBtn.addEventListener('click', apiContentFetched)

apiContentFetched()