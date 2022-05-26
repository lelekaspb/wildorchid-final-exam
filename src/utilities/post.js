// 6082d28c28bf9b609975a5db api key
export const postGiftcard = async (payload) => {
  const url = "https://kea0209-5a57.restdb.io/rest/wildorchid-giftcard";

  const options = {
    method: "POST",
    headers: {
      "x-apikey": "6082d28c28bf9b609975a5db",
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  };

  try {
    const request = await fetch(url, options);
    const data = await request.json();
    return data;
  } catch (err) {
    console.log("Caught error " + err);
    return undefined;
  }
};

// add to payment page
//import { postGiftcard } from "./../utilities/post.js";
// console.log(e);
// const payload = {
//   first_name: info.firstName,
//   last_name: info.lastName,
//   email: info.email,
//   amount: parseInt(info.amount),
//   note: info.note,
//   date_receive: info.date,
// };
// const response = await postGiftcard(payload);
// console.log(response);
