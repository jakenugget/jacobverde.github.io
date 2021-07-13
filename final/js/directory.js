const requestURL = 'json/final.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const directory = jsonObject['directory'];
        
        for (let i = 0; i < directory.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let dateOfBirth = document.createElement('p');
            let placeOfBirth = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = directory[i].name;
            dateOfBirth.textContent = "Website: " + directory[i].birthdate;
            placeOfBirth.textContent = "Phone Number: " + directory[i].birthplace;
            image.setAttribute('src', directory[i].imageurl);
            image.setAttribute('alt', directory[i].name + ' - ' + directory[i].order);


            card.appendChild(h2);
            card.appendChild(dateOfBirth);
            card.appendChild(placeOfBirth);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });
