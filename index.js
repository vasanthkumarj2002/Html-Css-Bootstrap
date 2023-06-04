
  function vali()
    {
      var name=/^[a-zA-Z]{3,}$/
      var number=/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[!@$#%^&*])[a-zA-Z0-9!@$#%^&*]{3,}$/
      var email=/^[a-zA-Z0-9]{3,}@{1}[A-Za-z]{2,}.{1}[a-zA-Z]{2,}$/
      var phone=/^[6789]{1}[0-9]{9}$/
      
      var input=document.getElementsByTagName("input")
      var error=document.getElementsByClassName("ERROR")

      if(name.test(input[0].value))
      {
       error[0].innerHTML=""
      }
      else{
        error[0].innerHTML="name must have 3 char"
        error[0].style.color="red"
        return false;
      }
      if(email.test(input[1].value))
      {
       error[1].innerHTML=""
      }
      else{
        error[1].innerHTML="email is mismatch"
        error[1].style.color="red"
        return false;
      }
      if(phone.test(input[2].value))
      {
       error[2].innerHTML=""
      }
      else{
        error[2].innerHTML="enter your phone number"
        error[2].style.color="red"
        return false;
      }
      if(number.test(input[3].value))
      {
       error[3].innerHTML=""
      }
      else{
        error[3].innerHTML="please enter correct number"
        error[3].style.color="red"
        return false;
      }
    }