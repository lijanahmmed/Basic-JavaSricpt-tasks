function sendNotification(email) {
    const emailName = email.includes("@");
    if (emailName === false) {
        return "Invalid Email";
    }
    const username = email.split('@')[0];
    const domainName = email.split('@')[1];
    const result = username + " sent you an email from " + domainName;
    return result;
}

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));  
console.log(sendNotification("sadia8icloud.com"));


// Output
// zihad sent you an email from gmail.com
// farhan34 sent you an email from yahoo.com
// nadim.naem5 sent you an email from outlook.com
// Invalid Email
// Invalid Email