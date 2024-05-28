function getAPIData(){
    var name = document.getElementById('search')
    if (!name){
        name = "bharat"
    }
    console.log(name);



    var request = new XMLHttpRequest()
    request.open("get", "https://restcountries.com/v3.1/name/" + name   )
    request.send()

    // console.log(request);

    request.addEventListener("load", ()=> {
        // var data = JSON.parse(request.responseText)
        // data = data[0]
        // console.log(data);

        var [data] = JSON.parse(request.responseText)

        document.getElementById('name').innerHTML = data.name.official
        document.getElementById('capital').innerHTML = data.capital
        document.getElementById('flags').innerHTML = data.flags.svg
        document.getElementById('area').innerHTML = data.area
        document.getElementById('population').innerHTML = data.population
        document.getElementById('region').innerHTML = data.region
        document.getElementById('subregion').innerHTML = data.subregion
        document.getElementById('continents').innerHTML = data.continents
        document.getElementById('borders').innerHTML = data.borders
        document.getElementById('timezones').innerHTML = data.timezones
        document.getElementById('independent').innerHTML = data.independent
        document.getElementById('unMember').innerHTML = data.unMember
        document.getElementById('landlocked').innerHTML = data.landlocked
        document.getElementById('maps').innerHTML = data.maps.googleMaps
        document.getElementById('startOfWeek').innerHTML = data.startOfWeek
        

    })

}

getAPIData()