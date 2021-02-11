const dogButton = document.getElementById('dog');

// dogButton.addEventListener('click', () => {
//     dogButton.innerHTML = 'generating dog...'
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res) => res.json())
//     .then((data) => {
//         const dogImg = document.createElement('img');
//         dogImg.setAttribute('src', data.message);
//         dogImg.setAttribute('width', '100px');
//         const imageContainer = document.querySelector('#image-container')
//         imageContainer.innerHTML = '';
//         imageContainer.append(dogImg)
//         dogButton.innerHTML = 'Generate Dog'
//     })
//     .catch((error) => {
//         console.log(error)
//     });
// })

dogButton.addEventListener('click', () => {
    dogButton.innerHTML = 'generating dog...'
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
        const picSlide = document.getElementById('picSlide');
        console.log(picSlide)
        const carouselItem = document.createElement('div');
        if (picSlide.innerHTML.length < 20) {
            carouselItem.classList.add('active')
            carouselItem.classList.add('carousel-item')
            carouselItem.classList.add('img-thumbnail')
        } else {
            carouselItem.classList.add('carousel-item');
            carouselItem.classList.add('img-thumbnail')
        }
        
        const dogImg = document.createElement('img');
        dogImg.classList.add('d-block');
        dogImg.classList.add('w-100');
        dogImg.setAttribute('src', data.message);
        carouselItem.append(dogImg);
        dogButton.innerHTML = 'Generate Dog';
        picSlide.append(carouselItem);
    })
    .catch((error) => {
        console.log(error)
    });
})



const dogBreedsMenu = document.getElementById('dogBreedsMenu');
function getBreeds() {
    fetch("https://dog.ceo/api/breeds/list")
    .then((res) => res.json())
    .then((data) => {
        for (let i = 0; i < data.message.length; i++) {
            const breed = document.createElement('option');
            breed.innerHTML = data.message[i];
            dogBreedsMenu.append(breed);
        }
    })
}
getBreeds()


dogBreedsMenu.addEventListener('change', () => {
    const breedChoice = dogBreedsMenu.value;
    fetch(`https://dog.ceo/api/breed/${breedChoice}/images/random`)
    .then((res) => res.json())
    .then((data) => {
        const picSlide = document.getElementById('picSlide');
        console.log(picSlide)
        const carouselItem = document.createElement('div');
        if (picSlide.innerHTML.length < 20) {
            carouselItem.classList.add('active')
            carouselItem.classList.add('carousel-item')
            carouselItem.classList.add('img-thumbnail')
        } else {
            carouselItem.classList.add('carousel-item')
            carouselItem.classList.add('img-thumbnail')
        }
        
        const dogImg = document.createElement('img');
        dogImg.classList.add('d-block');
        dogImg.classList.add('w-100');
        dogImg.setAttribute('src', data.message);
        carouselItem.append(dogImg);
        dogButton.innerHTML = 'Generate Dog';
        picSlide.append(carouselItem);
    })
    .catch((error) => {
        console.log(error)
    });
})








// const dogBreedsMenu = document.getElementById("dogBreed");
// function getBreeds() {
//     fetch("https://dog.ceo/api/breeds/list")
//     .then((res) => res.json())
//     .then((data) => {
//         for (let i = 0; i < data.message.length; i++) {
//             const breed = document.createElement('option');
//             breed.innerHTML = data.message[i];
//             dogBreedsMenu.append(breed);
//         }
//     })
// }
// getBreeds()



//     const dogButton = document.getElementById("dogButton");

// dogButton.addEventListener("click", () => {
//   // https://dog.ceo/api/breeds/image/random
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res) => res.json())
//     .then((data) => {
//       const dogImg = document.createElement("img");
//       dogImg.setAttribute("src", data.message);
//       dogImg.setAttribute("width", 100);
//       const dogContainer = document.querySelector("#dogContainer");
//       dogContainer.innerHTML = "";
//       dogContainer.append(dogImg);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });