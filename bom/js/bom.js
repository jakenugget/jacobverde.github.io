const input = document.querySelector("#fav");
const output = document.querySelector(".addlist");
const button = document.querySelector("button");

button.addEventListener('click', () => {
    if (input.value != '' ) {
        
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');

        
        li.textContent = input.value;
        deletebutton.textContent = '❌';

       
        li.append(deletebutton);
        output.append(li);
        deletebutton.addEventListener('click', () => {
            output.removeChild(li);
            input.focus;
        });
        input.value = '';
        input.focus;
    }
});
