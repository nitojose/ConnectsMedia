
const Url = 'https://connectapi.gitdr.com/api/';

// const Url = 'http://192.168.1.42:8000/api/';
const imgUrl = "https://connectapi.gitdr.com/public/";
// const siteUrl ="https://localhost";

const siteUrl ="https://connect.gitdr.com";


var notImage = require('../assets/images/connect.jpeg');
var picture = require('../assets/imgs/noImage.png');
var sessionstorage = require('sessionstorage');


async function isLoggin()
{
   
    const customer_id = await sessionstorage.getItem("customerId");
    console.log("customerid in global",sessionstorage.getItem("customerId"))
   
        if(customer_id === null)
        {
           
            return customer_id;
        }
            
   
}



export {Url,siteUrl,imgUrl,notImage,isLoggin,picture}
