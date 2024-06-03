const form = document.querySelector("form")
// this usecase give you empty
// const height = parseInt(document.querySelector("#height").value)

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === "" || height < 0 || isNaN(height)){
        results.innerHTML = `Please give valid height ${height}`
    }else if (weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give valid weight ${weight}`
    }else{
       const bmi  = (weight / ((height*height)/1000)).toFixed(2)
       const weightGuide = document.querySelector("#weight-guide")
       results.innerHTML = `<span> ${bmi} </span>`
       if (bmi <= 18.6){
        weightGuide.innerHTML = `You are Under Weight Range`
       }else if (bmi <= 18.6 || bmi <= 24.9){
        weightGuide.innerHTML = `You are in Normal Range`
       }else{
        weightGuide.innerHTML = `You are Overweightl Range`
       }

    }
} )