const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
  {
    id: 4,
    question: "How to build logics?",
    answer: "There is only one way to build logis read more practice more and constaintly repeat it",
  },
  {
    id: 5,
    question: "Who can write code?",
    answer: "Anybody who have patients and interest in coding",
  },
];


const faq = document.querySelector(".faq");

faqData.forEach((data)=>{
    faq.innerHTML +=`
    <div class="faq_header">
    <h3>${data.question}</h3>
    <button class="show_btn">+</button>
    </div>
    <p hidden>${data.answer}.</p>
    `
  });


  function showFaq(button, index) {
    let text = document.querySelectorAll(".faq p");
    if (text[index].hidden == true) {
      text[index].hidden = false;
      button.innerHTML = "-";
    } else {
      text[index].hidden = true;
      button.innerHTML = "+";
    }
  }

  function btnStatus() {
    const button = document.querySelectorAll(".show_btn");
    button.forEach((btn, index)=>{
      btn.addEventListener("click", function() {
        showFaq(btn, index);
      })
    });
  }
  btnStatus();


