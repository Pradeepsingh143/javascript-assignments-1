const input = document.querySelector(".naming_conversion #text");
const convertBtn = document.querySelector("#convert-btn");
convertBtn.addEventListener("click", function() {
    if (isNaN(input.value)) {
        input.classList.remove('red');
        input.placeholder = "Please Enter Text";
        document.querySelector("#camel-case").innerHTML =`${methods.camelCase()}`;
        document.querySelector("#pascal-case").innerHTML =`${methods.pasCalCase()}`;
        document.querySelector("#snake-case").innerHTML =`${methods.snakeCase()}`;
        document.querySelector("#screaming-snake-case").innerHTML =`${methods.screamingSnakeCase()}`;
        document.querySelector("#kebab-case").innerHTML =`${methods.kebabCase()}`;
        document.querySelector("#screaming-kebab-case").innerHTML =`${methods.screamingKebabCase()}`;
    } else {
        input.value = '';
        input.placeholder = "Please enter a vaild string";
        input.classList.add('red');
    }
})

const methods = {
    inputValue: function() {
        return input.value.split(' ');
    },
   camelCase : function() {
       let camelCaseArr = this.inputValue().map((word, index)=>{
        if (index == 0) {
          return word.toLowerCase();
        }
       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
       })
        if (camelCaseArr.length == 2) {
            return camelCaseArr.join("");
        }
       else{
        return camelCaseArr.join(" ");
       }
    },
    pasCalCase : function() {
       let pasCalCaseArr = this.inputValue().map((word)=>{
       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
       })
        if (pasCalCaseArr.length == 2) {
            return pasCalCaseArr.join("");
        }
       else{
        return pasCalCaseArr.join(" ");
       }
    },
    snakeCase : function() {
       let snakeCaseArr = this.inputValue().map((word)=>{
       return word.toLowerCase();
       })
         return snakeCaseArr.join("_");
    },
    screamingSnakeCase : function() {
       let screamingSnakeCaseArr = this.inputValue().map((word)=>{
       return word.toUpperCase();
       })
         return screamingSnakeCaseArr.join("_");
    },
    kebabCase : function() {
       let kebabCaseArr = this.inputValue().map((word)=>{
       return word.toLowerCase();
       })
         return kebabCaseArr.join("-");
    },
    screamingKebabCase : function() {
       let screamingKebabCaseArr = this.inputValue().map((word)=>{
       return word.toUpperCase();
       })
         return screamingKebabCaseArr.join("-");
    }

};

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", function() {
    input.classList.remove('red');
    input.value = '';
    input.placeholder = "Please Enter Text";
    document.querySelectorAll(".case_div p").forEach((item)=>{
        item.innerText = '';
    })
})