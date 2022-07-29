console.log("Moodle+ successfully loaded!");
let login_text = document.getElementById("login").innerText;

let first = login_text.slice(45,69);
let second = login_text.slice(45,70);
let add = login_text.slice(45,55);
let subtract = login_text.slice(45,60);

let answer ; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

if(first == 'Please enter first value'){
    answer = login_text.slice(70,72);
}

else if(second == 'Please enter second value'){
    let matches = login_text.match(/\d+/g);
    let i = 0;
              
    if (matches) {
        answer = matches[1];
    }
}

else if(add == 'Please add'){
    let matches = login_text.match(/\d+/g);
    let i = 0;

    if (matches) {
        answer = (matches[0]*1) + (matches[1]*1);
    }
}

else if(subtract == 'Please subtract'){
    let matches = login_text.match(/\d+/g);
    let i = 0;

    if (matches) {
        answer = (matches[0]*1) - (matches[1]*1);
    }
}

const captcha_input_element = document.querySelector("#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
