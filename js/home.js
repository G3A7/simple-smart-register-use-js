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
let user = "";
if (JSON.parse(localStorage.getItem("userLogin"))) {
  user = JSON.parse(localStorage.getItem("userLogin")).find((e, idx) => {
    return e.id == location.search.split("=")[1];
  });
}

if (!user) {
  location.assign("./index.html");
}
// location.console.log();
document.getElementById("h1").innerHTML = `<span>Welcome :</span> ${
  JSON.parse(localStorage.getItem("userLogin")).find((e, idx) => {
    return e.id == location.search.split("=")[1];
  }).name
}`;
