
//Password Generator Version 1.0
//Programme: Timi Ndubuisi

function genPassword(length,upperCase,lowerCase,number,symbol){
    const numberChar = `0123456789`;
    const upperCaseChar = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const lowerCaseChar = `abcdefghijklmnopqrstuvwxyz`;
    const symbolChar = `!@#$%^&*()_+{}|:<>?-=[]\;,./~`;

    let allowedChars = "";
    let password = "";

    allowedChars += upperCase ? numberChar : "";
    allowedChars += lowerCase ? upperCaseChar : "";
    allowedChars += number ? lowerCaseChar : "";
    allowedChars += symbol ? symbolChar : "";

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

function generatePassword(){
    const wantedLength = Number(document.getElementById(`length`).value);
    const upperCase = document.getElementById(`upperCase`).checked? true : false;
    const lowerCase = document.getElementById(`lowerCase`).checked? true : false;
    const number = document.getElementById(`number`).checked? true : false;
    const symbol = document.getElementById(`symbol`).checked? true : false;

    const password = genPassword(wantedLength,upperCase,lowerCase,number,symbol);
    password == ""? document.getElementById(`passwordResult`).textContent = `Invalid input, please input password length` : 
    document.getElementById(`passwordResult`).textContent = `Generated password is : ${password}`;
}