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
            let website = document.createElement('p');
            let phone = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = directory[i].name;
            website.textContent = "Website: " + directory[i].web;
            phone.textContent = "Phone Number: " + directory[i].number;
            image.setAttribute('src', directory[i].imageurl);
            image.setAttribute('alt', directory[i].name + ' - ' + directory[i].order);


            card.appendChild(h2);
            card.appendChild(website);
            card.appendChild(phone);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });
