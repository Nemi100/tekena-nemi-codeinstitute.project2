document.onload = console.log('The document has loaded!');

let buttons = document.getElementsByTagName("button");



function bodyLoaded() {
    console.log('Body has loaded!');
}


let holidayChoices=[
                    {location: 'Devon',price   : '£500',choice:'coast',tel :'07245368192',},
                    {location: 'Brighton',price    : '£650',choice: 'city',tel :'07839280920',},
                    {location: 'Leeds',price    : '£410',choice:'city',tel :'07297102941',},
                    {location: 'Manchester',price    : '£350',choice:'coast',tel :'07889201975',},
                    {location: 'Oxford',price    : '£730',choice:'city',tel :'07278390265',},
                    {location: 'Bristol',price    : '£300',choice:'coast',tel :'07210927354',},
                    {location: 'liverpool',price    : '£500',choice : 'coast',tel :'07753467425',},
                    {location: 'Belfast',price    : '£410',choice:'city',tel :'07297102941',},
                    {location: 'Nottingham',price    : '£350',choice:'coast',tel :'07889201975',},
                    {location: 'Plymouth',price    : '£730',choice:'city',tel :'07278390265',},
                    {location: 'Newcastle',price    : '£300',choice:'coast',tel :'07210927354',},
                    {location: 'Birmingham',price    : '£500',choice : 'city',tel :'07753467425',},
                ]

console.log(holidayChoices);


function buildTable(data){
    var table = document.getElementById("myTable")
    table.innerHTML = "";
    for(var i = 0;i < data.length; i++) {
        var row = `<tr>
                     <td>${data[i].location}</td>
                     <td>${data[i].price}</td>
                     <td>${data[i].tel}</td>
                  </tr>`
        table.innerHTML += row;
    }
}


    let coast=holidayChoices.filter((holidayChoices) => {
        return holidayChoices.choice === "coast"});
        console.log(coast);

    let city = holidayChoices.filter((holidayChoices) => {
        return holidayChoices.choice === "city"});
        console.log(city);
  
/**
 * When click search, hide budget hokliday.com panel and show the options
 * 
 * Scroll the page down using javascript so that it would only show the options
 * 
 */
function handleSubmit() {
    

    // Get the two input elements
    var rd1 = document.getElementById('rd1');
    var rd2 = document.getElementById('rd2');

    if (rd1.checked == true ){
        console.log('coast:', rd1.value);
        buildTable(coast);
        document.querySelector(".result-area").style.display ="block";

    }
    else if(rd2.checked==true){
        console.log('city:', rd2.value);
        buildTable(city);
        document.querySelector(".result-area").style.display ="block";
    }
    //else
    //alert('Please make a selection');

    // Log their values to the console
   
}
handleSubmit();

