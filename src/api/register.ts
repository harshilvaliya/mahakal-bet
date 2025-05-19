export const webKey = "mdqogufqwbfqgufgquwigfuiqwgfuiqwgifqsbs";
export const regUserApi = async (
  stUserName: any,
  stPassword: any,
  mobileNum: any,
  bonusType: any,
  otp: any,
  refer: any
) => {
  const raw = JSON.stringify({
    stUserName,
    stPassword,
    mobileNum,
    bonusType,
    otp,
    refer,
  });

  const res = await fetch("https://webapi.9xxbet.com/api/v1/users/signupallpanel", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: raw,
  });

  const resData = await res.json();
  return resData;
};
