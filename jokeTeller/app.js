const jokeText = document.getElementById("joke_text");
const jokeBtn = document.getElementById("get_joke_btn");
const menuItems = document.querySelectorAll(".menu_item");
const heroSection = document.querySelector(".hero_section");
const categorySection = document.querySelector(".category_section");
const categoryTitle = document.querySelector(".category_section .page_title");
const jokeCards = document.querySelector(".jokes_cards");
const loadMoreBtn = document.querySelector(".load_more_btn");
const jokeTellerBtn = document.getElementById("jokeTellerBtn");
const hamburger = document.getElementById("hamburger");

const randomApiUrl = `https://v2.jokeapi.dev/joke/Any?type=single&amount=9`;

jokeBtn.addEventListener("click", () => {
    getJoke(randomApiUrl);
});

menuItems.forEach(element => {
    element.addEventListener("click", () => {
        const category = element.innerHTML;
        const apiUrl = `https://v2.jokeapi.dev/joke/${category}?type=single&amount=9`;
        jokeCards.innerHTML = '';
        getJoke(apiUrl, category);
    });
});


loadMoreBtn.addEventListener("click", () => {
    let category = categoryTitle.innerText.slice(11);
    const apiUrl = `https://v2.jokeapi.dev/joke/${category}?type=single&amount=9`;
    getJoke(apiUrl, category);
});

async function getJoke(apiUrl, category) {
    await fetch(apiUrl)
        .then((response) => {
            const data = response.json();
            return data;
        })
        .then((result) => {
            const jokesArr = result.jokes;
            jokesArr.forEach(element => {
                if (apiUrl.includes("Any")) {
                    heroSection.style.display = "flex";
                    jokeText.innerText = element.joke;
                    categorySection.style.display = "none";
                }
                else {
                    categoryTitle.innerHTML = `Category : ${category}`;
                    jokeCards.innerHTML += `
            <div class="jokeCard">
                <h4 class="id">Id: ${element.id}</h4>
                <h4 class="type">Type: ${element.type}</h4>
                <i class="fa fa-volume-up speakBtn"></i>
                <h2 class="joke_text">${element.joke}</h2>
            </div>
            `
                    heroSection.style.display = "none";
                    categorySection.style.display = "block";
                }
            });
            jokeTeller()
        })
        .catch((err) => {
            console.log('Error=>:', err);
        });
}


jokeTellerBtn.addEventListener("click", () => {
    let text = jokeText.innerHTML;
    let voiceSpeak = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(voiceSpeak);
});

function jokeTeller() {
    const speakBtn = document.querySelectorAll(".jokeCard .speakBtn");
    speakBtn.forEach((ele, index) => {
        ele.addEventListener("click", () => {
        jokeCardBtn(ele, index);
        })
    })
}

// joke card speak button
function jokeCardBtn(ele, index) {
    const jokeArr = [];
    const jokeCardText = document.querySelectorAll(".jokeCard .joke_text");
    jokeCardText.forEach((text) => {
        jokeArr.push(text.innerHTML);
    });

    const speak = speechSynthesis;
    if (speak.speaking) {
        speak.cancel();
    }

    let voiceSpeak = new SpeechSynthesisUtterance(jokeArr[index]);
    speak.speak(voiceSpeak);
    ele.style.color = '#12B0E8';
    setInterval(() => {
        ele.style.color = '';
    }, jokeArr[index].length * 75);
}

// Mobile Menu
hamburger.addEventListener("click", () => {
    const mobileMenuList = document.getElementById("mobile_menu_list");
    mobileMenuList.classList.toggle("hidden")
})