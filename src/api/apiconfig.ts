import { enqueueSnackbar } from "notistack";

export const webKey = "mdqogufqwbfqgufgquwigfuiqwgfuiqwgifqsbs";
export const commonError = (message: any, status: any) => {
  return enqueueSnackbar(message, {
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
    autoHideDuration: 2000,
    variant: status,
    transitionDuration: 500,
  });
};
export const fetchCheckUser = async (userName: any) => {
  const raw = JSON.stringify({
    userName,
    key: webKey,
  });

  const res = await fetch(
    "https://webapi.9xxbet.com/api/v1/users/checkusername",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: raw,
    }
  );
  const resData = await res.json();
  return resData;
};

export const fetchGenOtp = async (num: any) => {
  const raw = JSON.stringify({
    mobileNum: num,
  });

  const res = await fetch(
    "https://webapi.9xxbet.com/api/v1/users/generateotp",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: raw,
    }
  );
  const resData = await res.json();
  return resData;
};
