const sign = document.getElementById("sign");
const name = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const eye = document.getElementById("eye");
const eyeSlash = document.getElementById("eye-slash");
const inputs = document.querySelectorAll(".col-md-4 input");
// console.log(inputs)
let arrLogin = [];
inputs.forEach((e) => {
  e.addEventListener("input", (e) => {
    validationsInput(e.target);
  });
});

eye.addEventListener("click", (e) => {
  pass.setAttribute("type", "text");
  eyeSlash.classList.replace("d-none", "d-block");
  eye.classList.replace("d-block", "d-none");
});
eyeSlash.addEventListener("click", (e) => {
  pass.setAttribute("type", "password");

  eyeSlash.classList.replace("d-block", "d-none");
  eye.classList.replace("d-none", "d-block");
});
const regex = {
  name: /^[A-Za-z ]{3,20}$/,
  email: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
  pass: /^.{6,10}$/,
};
function validationsInput(el) {
  if (regex[el.id].test(el.value)) {
    el.classList.add("is-valid");
    el.classList.remove("is-invalid");
    return true;
  } else {
    el.classList.remove("is-valid");
    el.classList.add("is-invalid");
    return false;
  }
}
sign.addEventListener("click", () => {
  if (CheckValidation()) {
    let objData = {
      name: name.value,
      email: email.value,
      pass: pass.value,
    };
    arrLogin.push(objData);
    localStorage.setItem("userLogin", JSON.stringify(arrLogin));
    location.assign("index.html");
  } else {
    Swal.fire({
      html: `<div class="box">
    <div class="box-header">
        <div class="circle">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="box-body text-start   pt-4">
            <ul class=' w-75 mt-5 mx-auto'>
                <li class='text-nowrap'>
                   <strong>Name:</strong> <i class='text-danger'>Must be more than 3-Char</i> 
                </li>
                 <li  class='text-nowrap'>
                   <strong>Email:</strong> <i class='text-danger'>Exampl@gmail.com</i> 
                </li>
                <li  class='text-nowrap'>
                   <strong>Password:</strong> <i class='text-danger'>must be more than 6</i> 
                </li>
            </ul>
        </div>
    </div>
  </div>`,
    });
  }
});

function CheckValidation() {
  let flag = true;
  if (!validationsInput(name)) {
    flag = false;
  }
  if (!validationsInput(email)) {
    flag = false;
  }
  if (!validationsInput(pass)) {
    flag = false;
  }
  //    validationsInput(name) && validationsInput(email) && validationsInput(pass);
  return flag;
}
