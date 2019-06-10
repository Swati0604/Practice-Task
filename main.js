//Listen for the form submit
document.getElementById('myForm').addEventListener('submit', saveDetails);

// Save Bookmark
function saveDetails(e){
  // Get form values
  var Name = document.getElementById('Name').value;
  var email = document.getElementById('email').value;
  var Job = document.getElementById('Job').value;
  var password = document.getElementById('password').value;

  var Details ={
    name: Name,
    email : email,
    Job: Job,
    Password: password
  }
//Test if Detail is null
  if(localStorage.getItem("Detail") === null){
   // Init Array
  var Detail = [];
  // Add to array
  Detail.push(Details);
  //Set to local Storage
  localStorage.setItem('Detail', JSON.stringify(Detail));
  }else{
  //Get Details from the local storage
  var Detail = JSON.parse(localStorage.getItem('Detail'));
  //Add Detail to array
  Detail.push(Details);
  //Re-set to the local Storage
  localStorage.setItem('Detail', JSON.stringify(Detail));
}
  //Clear Form
  document.getElementById("myForm").reset();

//ReFetch Bookmark
    fetchDetails();


//Prevent Default
e.preventDefault();
  }

function deleteDetail(name){
    //Get Bookmark from local storage
    var Detail = JSON.parse(localStorage.getItem('Detail'));
    //Loop through Bookmark
    for(i = 0; i < Detail.length; i++){
      if(Detail[i].name == name){
        //Remove from the array
            Detail.splice(i, 1);
      }
    }
    localStorage.setItem('Detail', JSON.stringify(Detail));

    //ReFetch Bookmark
    fetchDetails();
}
function fetchDetails(){
  var Detail = JSON.parse(localStorage.getItem('Detail'));
  
  //Get output id
  var DetailResult = document.getElementById('DetailResult');
  //Build output
  DetailResult.innerHTML = "";
  for(var i = 0; i < Detail.length; i++){
    var name = Detail[i].name;
    var email = Detail[i].email;
    var Job = Detail[i].Job;
    var Password = Detail[i].Password;

    DetailResult.innerHTML += '<div class= "card card-bg-light text-dark card-body mb-2">' +
                                  '<h3>'+ "Full Name: "+name + '<h3>'+"Email: " +email +'</h3>'+ '<h3>'+"Job/Profile: " +Job +'</h3>'+ '<h3>'+"Password: " +Password +'</h3>'+
                                   ' <a class="btn btn-success mb-2" onclick="deleteDetail(\''+name+'\')" target="_blank" href="#">Edit Details</a> '+
                                   ' <a class="btn btn-danger float-right" onclick="deleteDetail(\''+name+'\')" href="#">Delete</a> '+
                                   '</h3>'+
                                   '</div>';
  
  }
} 

