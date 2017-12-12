
// function to check age 

function calculateAge (dateOfBirth) {

	 var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;

}// end calculateAge


// now lets put the age filter 

exports.ageFilter = function (req, res, next) {
  
  var age  = calculateAge(req.query.dob);
  console.log(age);

  //adding a variable to request object
  req.age = age;

  if(age>=18){

  	 console.log('Age is ohk');
  	 next();

  }

  else{

  	res.send("You are not allowed to access this link");

  }


 
};