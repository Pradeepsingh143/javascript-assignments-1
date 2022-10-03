const inputTxt = document.querySelector("#input_text");
const wordCounter = document.querySelector("#word_counter");

inputTxt.addEventListener("input", (event)=>{
    const inputValue = event.target.value;
    const removeSpace = inputValue.trim().split(" ").filter(ele=>ele).join(" ");
    const inputCharValue = removeSpace.length;
    let wordCount = 0;
    if (inputValue.length == 0) {
        wordCount = 0;
    }else{
        wordCount = removeSpace.split(" ").length;
    }

    wordCounter.innerHTML = `
    <h3 class="char_length">Char =  ${inputCharValue}</h3>
        <h3 class="word_count">Words = ${wordCount}</h3>
        <h3 class="word"><strong>Text : </strong> ${inputValue}</h3>`
});