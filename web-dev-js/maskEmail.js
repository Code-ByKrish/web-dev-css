const email = "apple.pie@example.com";


function maskEmail(email){
  const atIndex = email.indexOf("@");

  const userName = email.slice(0,atIndex);
  const domain = email.slice(atIndex);

  if(userName.length <= 2){
    return userName[0] + "**" + userName.slice(-1) + domain;
  }

  const masked = userName[0] + "*".repeat(userName.length - 2) + userName.slice(-1);

  return masked + domain;
}

console.log(maskEmail(email));