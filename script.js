document.onload = console.log("The document has loaded!");

/*let buttons = document.getElementsByTagName("button");*/



function bodyLoaded() {
    console.log("Body has loaded!");
}


let holidayChoices=[
    {Preference:"coast",location: "Devon",
        price: "£500",tel :"07245368192"},
    {Preference: "city",location: "Brighton",
        price: "£650",tel :"07839280920"},
    {Preference:"city",location: "Leeds",
        price: "£410",tel :"07297102941"},
    {Preference:"coast",location: "Manchester",
        price:"£350",tel :"07889201975"},
    {Preference:"city",location: "Oxford",
        price:"£730",tel :"07278390265"},
    {Preference:"coast",location: "Bristol",
        price:"£300",tel :"07210927354"},
    {Preference :"coast",location: "liverpool",
        price:"£500",tel :"07753467425"},
    {Preference:"city",location: "Belfast",
        price: "£410",tel :"07297102941"},
    {Preference:"coast",location: "Nottingham",
        price:"£350",tel :"07889201975"},
    {Preference:"city",location: "Plymouth",
        price:"£730",tel :"07278390265"},
    {Preference:"coast",location: "Newcastle",
        price:"£300",tel :"07210927354"},
    {Preference :"city",location:"Birmingham",
        price:"£500",tel :"07753467425"}
];

console.log(holidayChoices);


function buildTable(data){
    let table = document.getElementById("myTable");
    table.innerHTML = "";
    for(let i = 0;i < data.length; i++) {
        var row = `<tr>
                     <td>${data[i].location}</td>
                     <td>${data[i].price}</td>
                     <td>${data[i].tel}</td>
                  </tr>`
        table.innerHTML += row;
    }
}


    let coast=holidayChoices.filter((holidayChoices) => {
        return holidayChoices.Preference === "coast"});
        console.log(coast);

    let city = holidayChoices.filter((holidayChoices) => {
        return holidayChoices.Preference === "city"});
        console.log(city);
  

/**
 * When click search, hide budget hokliday.com panel and show the options
 * 
 * Scroll the page down using javascript so that it would only show the options
 * 
 */
function handleSubmit() {
    

    // Get the two input elements
    var rd1 = document.getElementById("rd1");
    var rd2 = document.getElementById("rd2");


    if (rd1.checked == true ){
        console.log("coast:", rd1.value);
        buildTable(coast);
        document.querySelector(".result-area").style.display ="block";
        rd1.checked = false;
    }else if(rd2.checked==true){
        console.log("city:", rd2.value);
        buildTable(city);
        document.querySelector(".result-area").style.display ="block";
        rd2.checked = false;
    }else {
       alert('Please make a selection');
   }
      
  document.getElementById("results").style.visibility = "visible";
    
   
}

function handleHide() {
    console.log("test");
    document.getElementById("results").style.visibility = "hidden";
}
