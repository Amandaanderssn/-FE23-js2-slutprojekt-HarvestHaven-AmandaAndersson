function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t=globalThis,o={},n={},r=t.parcelRequirefc52;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequirefc52=r);var s=r.register;s("27Lyk",function(t,o){e(t.exports,"register",()=>n,e=>n=e);var n,r=new Map;n=function(e,t){for(var o=0;o<t.length-1;o+=2)r.set(t[o],{baseUrl:e,path:t[o+1]})}}),s("1ahZW",function(t,o){e(t.exports,"getLoginUser",()=>s),e(t.exports,"getYourUser",()=>l),e(t.exports,"postNewUser",()=>a),e(t.exports,"allUsers",()=>c),e(t.exports,"postForum1",()=>i),e(t.exports,"postForum2",()=>u),e(t.exports,"postForum3",()=>p),e(t.exports,"deleteAccount",()=>d);let n="https://slutprojekt-js2-socialmedia-default-rtdb.europe-west1.firebasedatabase.app/",r={"Content-type":"application/json; charset=UTF-8"};async function s(){let e=await fetch(n+"AllUsers/.json",{method:"GET",headers:r}),t=await e.json();return console.log(t),t}async function l(e){let t=n+`AllUsers/${e}.json`,o=await fetch(t,{method:"GET",headers:r});return await o.json()}async function a(e){let t={method:"POST",body:JSON.stringify(e),headers:r},o=await fetch(n+"AllUsers/.json",t),s=await o.json();return console.log(s),s}async function c(){try{let e=await fetch("https://slutprojekt-js2-socialmedia-default-rtdb.europe-west1.firebasedatabase.app/AllUsers.json");return await e.json()}catch(e){throw console.error("Error fetching all users:",e),e}}async function i(e){let t={method:"POST",body:JSON.stringify(e),headers:r},o=await fetch(n+"forum1/0/posts.json",t),s=await o.json();return console.log(s),s}async function u(e){let t={method:"POST",body:JSON.stringify(e),headers:r},o=await fetch(n+"forum2/0/posts.json",t),s=await o.json();return console.log(s),s}async function p(e){let t={method:"POST",body:JSON.stringify(e),headers:r},o=await fetch(n+"forum3/0/posts.json",t),s=await o.json();return console.log(s),s}async function d(e){let t=n+`AllUsers/${e}.json`,o=await fetch(t,{method:"DELETE"});console.log(await o.json())}}),s("2DCO9",function(t,o){e(t.exports,"createAndAppend",()=>n);function n(e,t,o){let n=document.createElement(t);return"div"!=t&&"img"!=t&&(n.innerText=o),e.append(n),n}}),s("j2nI3",function(e,t){e.exports=new URL("pig.259b56e2.jpeg",import.meta.url).toString()}),s("9SEX7",function(e,t){e.exports=new URL("cow.5e4743a9.jpeg",import.meta.url).toString()}),s("hC4Lz",function(e,t){e.exports=new URL("chick.fc389aad.jpeg",import.meta.url).toString()}),r("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["X8CdH","profileView.014e02ec.js","jHcLR","pig.259b56e2.jpeg","4pF8D","cow.5e4743a9.jpeg","80Qni","chick.fc389aad.jpeg"]'));var l=r("1ahZW"),a=r("2DCO9");const c=localStorage.getItem("userId");async function i(){try{console.log("Filling user dropdown...");let e=await (0,l.allUsers)();console.log("Users from Firebase:",e);let t=document.getElementById("userDropdown");if(t)for(let o in t.innerHTML="",e){let n=e[o].username,r=document.createElement("option");r.value=o,r.textContent=n,t.appendChild(r)}console.log("User dropdown filled successfully.")}catch(e){console.error("Error filling user dropdown:",e)}}console.log(c),(0,l.getYourUser)(c).then(e=>{let t=document.querySelector(".username"),o=document.querySelector(".myAccountUsername");t.textContent=e.username,o.textContent=e.username,function(e,t){for(let o in e){let n=e[o];(function(e,t){let o=document.querySelector(".latestComments"),n=(0,a.createAndAppend)(o,"div"," ");n.id=e,console.log(n),(0,a.createAndAppend)(n,"p",t)})(o,n.postContent),console.log(o),console.log(n.postContent),console.log(t),console.log(e[o])}}(e.comments,e.comments),console.log(e.comments);let n=localStorage.getItem("profileImage"),s=document.getElementById("profilePicture"),l=document.getElementById("profilePicturex2");if("pig"==n){let e=new URL(r("j2nI3"));s.src=e.toString(),l.src=e.toString()}else if("cow"==n){let e=new URL(r("9SEX7"));s.src=e.toString(),l.src=e.toString()}else{let e=new URL(r("hC4Lz"));s.src=e.toString(),l.src=e.toString()}});const u=document.getElementById("userDropdown");u&&u.addEventListener("change",e=>{let t=e.target.value;t&&function(e){let t=`http://localhost:1234/profileView.html?userId=${e}`;window.location.href=t}(t)}),i();
//# sourceMappingURL=profileView.014e02ec.js.map