console.log('%c HI', 'color: firebrick')

fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        // console.log(data)
        let dogImg;
        data.message.forEach(image => {
            dogImg = document.createElement('img')
            dogImg.src = image
            document.body.appendChild(dogImg)
        })
       
    })

fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        allBreeds = []
        //console.log(data)
        Object.entries(data.message).map(entry => {
            let dogBreed = entry[0]
            allBreeds.push(entry[0])
            console.log('dogBreed', dogBreed)
            const allDogs = document.createElement('li')
            const dogBreedsList = document.getElementById('dog-breeds')
            dogBreedsList.appendChild(allDogs)
            allDogs.innerHTML = dogBreed

            function clickDogName() {
                console.log('foggiee')
                allDogs.style = 'color: pink'
            }
            allDogs.addEventListener('click', clickDogName)

            // const selectDogs = document.getElementById('breed-dropdown')
            // data.message.filter(function (breed) {
            //     console.log('fog', breed)
            //     if (allDogs.startsWith('a'))
            //         return allDogs.startsWith(a)
            // })
        })
        
        function selectChange() {
            const value = document.getElementById('breed-dropdown').value
            console.log('value: ', value)
            const filteredBreeds = allBreeds.filter(function (breed) {
                return breed.startsWith(value)
            })
            console.log('filteredBreedsL: ', filteredBreeds)
            const dogBreedsList = document.getElementById('dog-breeds')
            dogBreedsList.innerHTML = ''

            filteredBreeds.forEach((breed) => {
                const filteredDog = document.createElement('li')
                filteredDog.innerHTML = breed
                dogBreedsList.appendChild(filteredDog)
                filteredDog.addEventListener('click', () => filteredDog.style = 'color: pink')
            })
        }

        const selectDogs = document.getElementById('breed-dropdown')
        selectDogs.addEventListener("change", selectChange)
    })