const url = "https://wallet-api.spell.club/claim?batch_mode=true";
const headers = {
  "accept": "application/json, text/plain, */*",
    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "tma user=%7B%22id%22%3A6661483037%2C%22first_name%22%3A%22Cia%22%2C%22last_name%22%3A%22Chi%22%2C%22username%22%3A%22lusips%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=9062703316693926100&chat_type=sender&auth_date=1718097034&hash=c52fe8622ecfcd6901a52c3a076e4885c98c0aa3324628dabb1164fdc2c8ef86",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "Referer": "https://wallet.spell.club/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
};

async function fetchAPI() {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({})
    });

    if (!response.ok) {
      throw new Error('Failed to make API call');
    }

    const data = await response.json();
    console.log('API response:', data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the function immediately and then set an interval to call it every 1 second
fetchAPI();
setInterval(fetchAPI, 14460000);
