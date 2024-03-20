export const sendContactForm = async(data) => fetch('/api/send-email',{
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});