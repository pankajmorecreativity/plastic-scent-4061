
// const Register = async () => {

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const username = document.getElementById('username').value;
//     const mobile = document.getElementById('mobile').value;
//     // const description=null;

//     let user_data = {
//         name,
//         email,
//         password,
//         username,
//         mobile,
//         description:"Hello"
//     };
//     //console.log(user_data);
//     const register_url = `https://masai-api-mocker.herokuapp.com/auth/register`;

//     let res = await fetch(register_url,{
//         method:'POST',
//         body:JSON.stringify(user_data),
//         headers:{
//             'Content-Type':'application/json',
//         },
//     });
//     let data = await res.json();
//     console.log('data:',data);
// }



const Register = () => {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;
    let mobile = document.getElementById('mobile').value;
    

    let user_data = {
        name,
        email,
        password,
        username,
        mobile,
    };
    console.log(user_data);

    let arr=JSON.parse(localStorage.getItem("data"))||[];
    arr.push(user_data);
    localStorage.setItem("data",JSON.stringify(arr));

}