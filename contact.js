function SendMail() {
   
    var params = {
        name: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    const serviceId= "service_8aixyoc";
    const templateId = "template_69ks6am";

    emailjs.send(serviceId, templateId, params)
    .then(
        res =>{
            document.getElementById("fullName").value="";
            document.getElementById("email").value="";
            document.getElementById("message").value="";
            console.log(res);
            alert("votre message est envoyé avec succés");
        }
    )
    .catch((err) => console.log(err));
}
