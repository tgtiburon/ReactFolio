// Here is where we will put any helper functions we might need.

export function validateEmail(email) {
  var regexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validEmail = regexp.test(String(email).toLowerCase());

  //console.log("Valid Email: ", validEmail);

  return validEmail;
}
