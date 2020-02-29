/// preventDefault() to prevent an event to be excecuted
const signupForm = document.querySelector('#fm');
const cc = document.querySelector('#cc');
const checkBox = document.querySelector('#ck');
const selectOne = document.querySelector('#select');

signupForm.addEventListener('submit', function (e) {
    /*   alert('PREVENT FORM SUBMITTED'); */
    e.preventDefault();
    console.log(cc.value);
    console.log(checkBox.checked);
    console.log(selectOne.value);
});


// keypress event to create list from the input text if enter pressed 
const sel = document.querySelector('#sel');
const ke = document.querySelector('#tl');

ke.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        const newItem = this.value;
        const ini = document.createElement('li');
        ini.innerText = newItem;
        sel.appendChild(ini);
        this.value = '';
    }
});