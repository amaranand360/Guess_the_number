const Again = function again(){

    let res = confirm("Are you want to Replay?");
    if (res == true) {
        number = Math.floor(Math.random() * 20) + 1;
        //console.log(number);
        rematm = 20;
        atm = 0;

        document.querySelector('.score').textContent = rematm;
        document.querySelector('.attmpet').textContent = atm;

        document.querySelector('.text').textContent = "Start guessing..?..";
        document.querySelector('.number').textContent = 'Guess_me?..';
    }
};

document.querySelector('.again').addEventListener('click',Again);



let rematm = 20;
let atm = 0;
let minatm = 20;
let number = Math.floor(Math.random() * 20) + 1;
console.log(number);
//document.querySelector('.number').textContent = number;

/*   Function to handle all case vs input */
const checkbutton = function op() {

    const input = Number(document.querySelector('input').value);
    //console.log(input, typeof (input));
    document.querySelector('.score').textContent = --rematm;
    document.querySelector('.attmpet').textContent = ++atm;
    if (!input)     //Case:No input 
    {
        document.querySelector('.text').textContent = "🔥 NO guess & No number!";
    }

    else if (rematm < 0)    //Case:too much attempt
     {
        document.querySelector('.text').textContent = "😂😂 You Lose the Game ! ";
        Again();
    }

    else if (input < 0 || input > 20) // Case:input out of range.
    {
        document.querySelector('.text').textContent = " ~ You guess is out of Bound !";
    }

    else if (input == number) // case: Guess is correct.
    {
        document.querySelector('.number').textContent = number;
        document.querySelector('.text').textContent = `🎉 correct Number! your guess Right!`;
        //document.querySelector('body').style.backgroundColor = '#60B347';
        //document.querySelector('number').style.width = '30rem';
        if (minatm > atm) {
            minatm = atm;
            document.querySelector('.minatm').textContent = minatm;
        }

    }
    else if (input < number)    //Case:too Low!
        document.querySelector('.text').textContent = "🔥 You guess is too Low!";

    else if (input > number)     //Case:too High!
        {
        document.querySelector('.text').textContent = "⚡ You guess is too High!";
    }

}

document.querySelector('.check').addEventListener('click', checkbutton );   // using click 

document.addEventListener("keydown",(e)=>{
    if(e.key === "Enter")       //using press Enter.
    {
        checkbutton();
    }
})














// let btn = document.getElementById('btn');
// let output = document.getElementById('outputtext');
// let attmpet = document.getElementById('attmpet')
// console.log(number);
// btn.addEventListener('click', function (){
//     let input=document.getElementById('userInput').value;
//     if (input == number) {
//         output.innerHTML = `You guessed right, your number was ${number}!`
//     }else if (input < number)
//         output.innerHTML = "You guessed too low!"

//     if (input > number) {
//         output.innerHTML= "You guessed too high!"
// }
// });

//let output = document.getElementsById('text');
