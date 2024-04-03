export default async function sendContactForm(values) {
  const url = process.env.NEXT_PUBLIC_API_HOST.concat("/api/contactUs");
  const init_header = {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
  };
  const response = await fetch(url, init_header);
    if (!response.ok) throw new Error("Fail to sent message please try again.");
    return await response.json();
}
