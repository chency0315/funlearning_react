export default function sendContactForm(values){
    const url = process.env.NEXT_PUBLIC_API_HOST.concat("/api/contactUs");
    const init_header = {
        method:"POST",
        body: JSON.stringify(values),
        headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},
        mode:'cors'
        };
    return(
        fetch(url,init_header).then((response)=>{
        if(!response.ok) throw new Error("Fail to sent message please try again.");
        return response.json();
        })
    );
}
