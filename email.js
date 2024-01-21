const EmailMessage =()=>{



let Name = document.getElementById('name');
let Mail = document.getElementById('mail');
let Quote = document.getElementById('Quote');

let sendtoEmail= 
    "Name: " + Name.value + "\r\n" + 
    "Email: " + Mail.value + "\r\n" + 
    "Quote: " + Quote.value;
Email.send({
    SecureToken: "f5d1ba85-c160-427d-b0bb-e905d19db696 ",
    To: 'ajaytainwala@outlook.com',
    From: "ajaytainwala@gmail.com",
    Subject: "New Student has Registered  " + firstname + " " + lastname,
    Body: sendtoEmail,
  }).then(
    message => alert('Message Sent Successfully')
  ).catch(
    error => console.error('Error', error.message)
  );
}