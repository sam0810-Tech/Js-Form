const validateRegisterForm = () => {
    let nameData = document.forms['loginForm']['userName'].value;
      if(nameData == "") {
        alert('Please input a name');
        return false;
       };
    let emailData = document.forms["loginForm"]['userEmail'].value;
      if(emailData == "") {
        alert('Please input an email')
        return false;
       };
    let passwordData = document.getElementById('userPassword').value;
      if (passwordData == "") {
        alert("Password field cannot be empty")
        return false;
       };
    let confirmPasswordData = document.getElementById('confirmPassword').value;
      if(confirmPasswordData ==" " || confirmPasswordData !== passwordData ) {
        alert("Password and Confirm Password must match")
        return false;
      };
  };