// لمعرف ال user   جاي منين وكده وكمان اقدر امنعه انه يدخل الصفحه بشكل مباشر مثلا
// search ****
// document.addEventListener("DOMContentLoaded", () => {
//   // const allowedReferrers = ["http://127.0.0.3:51270/index.html"];
//   const referrer = document.referrer;
//   // console.log(referrer);
//   // if (!allowedReferrers.some((domain) => referrer.startsWith(domain))) {
//   // window.location.href = "http://127.0.0.3:51270/index.html";
//   // }
// });
// // ------------------------------------------------
// console.log(location.search.split("=")[1]);
// const validUser = JSON.parse(localStorage.getItem("userLogin")).find((e) => {
//   return e.id == location.search.split("=")[1];
// });
// // console.log(validUser);
// if (!validUser) {
//   location.assign("./index.html");
// }

const logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  location.assign("./index.html");
});
// location.console.log();
let x;
// localStorage.getItem("userLogin")
// console.log(localStorage.getItem("userLogin"))
if (!localStorage.getItem("userLogin")) {
  location.assign("./index.html");
} else {
  x = JSON.parse(localStorage.getItem("userLogin"));
}
document.getElementById("h1").innerHTML = `<span>Welcome :</span> ${
  x.find((e, idx) => {
    return e.id == location.search.split("=")[1];
  }).name
}`;
