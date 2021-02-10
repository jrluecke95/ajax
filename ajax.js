const dogButton = document.getElementById('dog');

dogButton.addEventListener('click', () => {
    dogButton.innerHTML = 'generating dog...'
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
        const dogImg = document.createElement('img');
        dogImg.setAttribute('src', data.message);
        dogImg.setAttribute('width', '100px');
        const imageContainer = document.querySelector('#image-container')
        imageContainer.innerHTML = '';
        imageContainer.append(dogImg)
        dogButton.innerHTML = 'Generate Dog'
    })
    .catch((error) => {
        console.log('error')
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

const dogBreedsMenu2 = document.getElementById('dogBreedsMenu2');
function getBreeds2() {
    fetch("https://dog.ceo/api/breeds/list")
    .then((res) => res.json())
    .then((data) => {
        for (let i = 0; i < data.message.length; i++) {
            const breed = document.createElement('option');
            breed.innerHTML = data.message[i];
            dogBreedsMenu2.append(breed);
        }
    })
}
getBreeds2()


dogBreedsMenu2.addEventListener('change', () => {
    const breedChoice = dogBreedsMenu2.value;
    fetch(`https://dog.ceo/api/breed/${breedChoice}/images/random`)
    .then((res) => res.json())
    .then((data) => {
        const dogImg = document.createElement('img');
        dogImg.setAttribute('src', data.message);
        dogImg.setAttribute('width', '100px');
        const imageContainer = document.querySelector('#image-container')
        imageContainer.innerHTML = '';
        imageContainer.append(dogImg)
    })
})














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