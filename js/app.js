//https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=d01672c66700f92ba27784fdb08667a2

const API_KEY = `d01672c66700f92ba27784fdb08667a2`


const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data))
}


const displayTemparature = data => {
    // const temperature = document.getElementById('temperature')
    // temperature.innerText = data.main.temp
    setInnerTextById('temperature', data.main.temp)
    setInnerTextById('weather', data.weather[0].main)

}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id)
    temperature.innerText = text
}

document.getElementById('btn-search').addEventListener('click', function () {

    const searchField = document.getElementById('search-field')
    const city = searchField.value
    loadTemperature(city)

    // set city
    document.getElementById('city').innerText = city;

})
loadTemperature('dhaka')