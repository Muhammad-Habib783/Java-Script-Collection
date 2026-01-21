const URL="https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


// by using async await method in this we use async and await keywords
const getFacts = async() =>
    {
        console.log("getting data...");
    let response = await fetch(URL)
    console.log(response);  // JSON format means JavaScript Object Notation format 
    let data = await response.json();
    factPara.innerText = data.fact;
}

// by using promise chaining method in this we use .then() method

function getFacts()
{
    fetch(URL).then((response)=>
    {
        return response.json();
    }).then((data)=>
    {
        console.log(data);
        factPara.innerText = data.fact;
    });
}
btn.addEventListener("click", getFacts);
