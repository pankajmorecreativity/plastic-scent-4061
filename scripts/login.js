// const Login = async () => {

//     let login_data = {
//         username:document.getElementById('username').value,
//         password:document.getElementById('password').value,
//     };

//     const login_url = `https://masai-api-mocker.herokuapp.com//auth/login`;

//     fetch(login_url,{
//         method:'POST',
//         body:JSON.stringify(login_data),
//         headers:{
//             'Content-Type':'application/json',
//         }
//     });

//     let data = await res.json();

//     let token = data.token;

//     getProfile(login_data.username,token);
// }

// document.querySelector('form').addEventListener('submit',Login);

// const getProfile = async (username,token) => {

//     let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;

//     let res = await fetch(api,{
//         headers:{
//             'Content-Type':'application/json',
//             Authorization:`Bearer${token}`,
//         }
//     });

//     let data = await res.json();
//     console.log('data:',data);
// }
let arr1=[];
const Login = () => {

    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    
    let arr = JSON.parse(localStorage.getItem('data'))||[];
    // console.log(arr);
    let flag=false;

    arr.forEach(function(elem){
        if(elem.username==username&&elem.password==password)
        {
            flag=true;
            //console.log(document.querySelector("#login_text").innerHTML);
            //document.querySelector("#loginId").innerHTML=username;
            arr1.push(username);
            localStorage.setItem("store",JSON.stringify(arr1));
            alert("Login successful");
            window.location.href="index.html";
        }
    });

    if(flag==false)
    {
        alert("Invalid credentials");
    }

}

let google = document.getElementById('google');
google.addEventListener('click',function(){
    window.location.href="https://accounts.google.com/signin";
});

let facebook = document.getElementById('facebook');
facebook.addEventListener('click',function(){
    window.location.href="https://www.facebook.com/login/";
});
