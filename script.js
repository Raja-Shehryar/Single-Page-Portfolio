const image1 = document.getElementById("p_1");
const image2 = document.getElementById("p_2");
const image3 = document.getElementById("p_3");
const image4 = document.getElementById("p_4");
const image5 = document.getElementById("p_5");
const image6 = document.getElementById("p_6");
const codeText1 = document.getElementById("visit_code-1");
const codeText2 = document.getElementById("visit_code-2");
const codeText3 = document.getElementById("visit_code-3");
const codeText4 = document.getElementById("visit_code-4");
const codeText5 = document.getElementById("visit_code-5");
const codeText6 = document.getElementById("visit_code-6");
const projectText1 = document.getElementById("visit_project-1");
const projectText2 = document.getElementById("visit_project-2");
const projectText3 = document.getElementById("visit_project-3");
const projectText4 = document.getElementById("visit_project-4");
const projectText5 = document.getElementById("visit_project-5");
const projectText6 = document.getElementById("visit_project-6");
function displayBlock(div2, div3) {
  div2.style.display = "block";
  div3.style.display = "block";
}

function hideBlock(div2, div3) {
  div2.style.display = "none";
  div3.style.display = "none";
}

//ssssssssssflex--grow-0
image1.addEventListener("mouseover", () => {
  displayBlock(projectText1, codeText1);
});
image1.addEventListener("mouseout", () => {
  hideBlock(projectText1, codeText1);
});

image2.addEventListener("mouseover", () => {
  displayBlock(projectText2, codeText2);
});
image2.addEventListener("mouseout", () => {
  hideBlock(projectText2, codeText2);
});
image3.addEventListener("mouseover", () => {
  displayBlock(projectText3, codeText3);
});
image3.addEventListener("mouseout", () => {
  hideBlock(projectText3, codeText3);
});

image4.addEventListener("mouseover", () => {
  displayBlock(projectText4, codeText4);
});

image4.addEventListener("mouseout", () => {
  hideBlock(projectText4, codeText4);
});

image5.addEventListener("mouseover", () => {
  displayBlock(projectText5, codeText5);
});

image5.addEventListener("mouseout", () => {
  hideBlock(projectText5, codeText5);
});

image6.addEventListener("mouseover", () => {
  displayBlock(projectText6, codeText6);
});

image6.addEventListener("mouseout", () => {
  hideBlock(projectText6, codeText6);
});

function ValidateEmail() {
  const emailField = document.getElementById("email-field");
  const emailError = document.getElementById("email-error");
  let emailValue = emailField.value;
  const emailValidationRegularExpression =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailValidationRegularExpression.test(emailValue)) {
    emailError.textContent = "Please Enter A valid email";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}
