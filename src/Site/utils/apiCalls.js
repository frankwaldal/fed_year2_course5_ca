import base64 from 'base-64';

import { apikey } from '../Constants/apikeys';

export async function sendEmail(body) {
    return (await fetch(`http://bronto.freeddns.org:3001/api/sendEmail`, {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${base64.encode(apikey)}`
        },
        body: JSON.stringify(body),
        redirect: 'follow'
    })).json();
}

export async function checkRecaptcha(body) {
  return (await fetch('https://cors-anywhere.herokuapp.com/https://www.google.com/recaptcha/api/siteverify', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body
  })).json();
}
