const correctAnswers = ['B', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const span = document.querySelector('span');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check Answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    //show results on page - MY ATTEMPT
    // result.classList.remove('d-none');
    // span.textContent = `${score} %`;


    //Showing the results on page
    scrollTo(0,0)

    result.classList.remove('d-none');

    //HERE THE FUNCTION FIRES ONLY ONCE
// setTimeout(() => {
//     alert('hello ninjas');
// }, 3000)


//HERE THE FUNCTION FIRES IN EVERY TIME OF THE INTERVAL
// setInterval(() => {
//     console.log('hello')
// }, 1000)



    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;

        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});

//Window Object
// console.log('Hello');
// window.console.log('Hi');
// console.log(document.querySelector('form'));

// alert('Hello');
// window.alert('hey')


//HERE THE FUNCTION FIRES ONLY ONCE
// setTimeout(() => {
//     alert('hello ninjas');
// }, 3000)


//HERE THE FUNCTION FIRES IN EVERY TIME OF THE INTERVAL
// setInterval(() => {
//     console.log('hello')
// }, 1000)


//THE TECHNIQUE TO STOP THE INTERVAL
// let i = 0;
// const timer = setInterval(() => {
//     console.log('Hello')
//     i++;
//     if(i === 5){
//         clearInterval(timer);
//     }

// }, 2000)