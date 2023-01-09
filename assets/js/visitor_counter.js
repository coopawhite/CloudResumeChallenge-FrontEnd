// async function getViewCount() {
//     var requestOptions = {
//         method: 'POST',
//         redirect: 'follow'
//         };
      
//     var result = fetch("https://cooper-cloud-resume-api-gateway-aa7mk7or.ts.gateway.dev/viewcount/", requestOptions)
//         .then(response => response.json())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
    
// };

async function getViewCount2() {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
        };

    let obj;
    const res = await fetch("https://api-gw-aa7mk7or.ts.gateway.dev/viewcount/", requestOptions)
  
    obj = await res.json();
    return(obj);
}

getViewCount2().then(count => document.getElementById('visitor_count').innerHTML = count.ViewCount);
// document.getElementById('visitor_count').innerHTML = count;