const inputEl = document.getElementById('input')
const errorEl = document.getElementById('error')
const resultEl = document.getElementById('result')

let errorTime;
let timeCompletion;
function updateResults(){
    if(inputEl.value <= 0 || isNaN(inputEl.value)){
        errorEl.innerText = 'Please Enter a Valid number!';
        clearTimeout(errorTime)
        errorTime = setTimeout(()=>{
            errorEl.innerText = '';
            inputEl.value = '';
        },2000);
    }else{
        resultEl.innerText = (+inputEl.value / 2.2).toFixed(2);

        clearTimeout(timeCompletion);
        timeCompletion = setTimeout(()=>{
            resultEl.innerText = '';
            inputEl.value = '';
        },5000)
    }
}


inputEl.addEventListener('input',updateResults)