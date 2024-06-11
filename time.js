const startUrl = "https://tg-bot-tap.laborx.io/api/v1/farming/start";
const finishUrl = "https://tg-bot-tap.laborx.io/api/v1/farming/finish";

const headers = {
  "accept": "*/*",
  "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
  "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTgxODI3MTksInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3MTgwOTYzMTksImF1ZCI6InRnLmFpLmpvYnMiLCJpc3MiOiJ0Zy5haS5qb2JzIiwic3ViIjoiNjY2MTQ4MzAzNyIsImp0aSI6IjM4Z21uaWx4YTY2c2FyIn0.U3OBRihGfB7rzD0civ8TsowC-Z8GZJSkL0sDMDo8yk3jx3Hh38c8eifWbMT_efxRFtMPsxLWv7HZ5gy70KiBpC0qJ1qHz4dmbOIGQ3fhKC0ksTAM5QQ1wjynPkLh4vMklfmx-j-pKlNIj-dawbd2626vTPtb7yNxgEQIptwW1a5swenqOAVS0Bun4KOWivIvfhe4KFNecWN0I0DgpSD538V8jhKCTP5rHzeLkBq6wldGIWYzCGhTYxluiUFu66emJdvO0i87EIqITe2TuX-5AfUQpBFTBupz8VhwaW4WWhjsgRqEmlcaWXY92xtp8ZgjCOr1GK0iOHrXqjpYIsjrmNy0s_mZTVCwUarPGGRwPML0J7Ccr_8WmEk9-a5AF4q2nlAMFAAhiM4YLvoguLxVmIV35PNBWmuBgXddW2vgji_Wqloi_hDY5S0L0smGPuGyEvcptPhMXQwUeIluSqpAKRKiBcirNtD6POdW0MqigYXMYsYfcaoKOwkAvuN57tDpIukxcUfNbV05BOpkICcQTh1NDU4du7-82j047ljfu2yrb7SXgikbVeQqr0KGQrs2bZvbaxsJzeJ2wldO001Y1dxKSwMdYNL_VfntNT1gd5QSGm_FhDZv6fENDog7J33DtH7N8HmNjQg8D5WFUhP09lD-w_gPaFtNasKJRWAViPg",
  "content-type": "application/json",
  "priority": "u=1, i",
  "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
  "sec-ch-ua-mobile": "?1",
  "sec-ch-ua-platform": "\"Android\"",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-site",
  "Referer": "https://tg-tap-miniapp.laborx.io/",
  "Referrer-Policy": "strict-origin-when-cross-origin"
};

async function callStartAPI() {
  try {
    const response = await fetch(startUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({})
    });

    if (!response.ok) {
      throw new Error('Failed to make start API call');
    }

    const data = await response.json();
    console.log('Start API response:', data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

async function callFinishAPI() {
  try {
    const response = await fetch(finishUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({})
    });

    if (!response.ok) {
      throw new Error('Failed to make finish API call');
    }

    const data = await response.json();
    console.log('Finish API response:', data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Function to start the API calls in sequence with a delay
async function startAPICalls() {
  while (true) {
    await callFinishAPI();
    await new Promise(resolve => setTimeout(resolve, 14401000));
    await callStartAPI();
    await new Promise(resolve => setTimeout(resolve, 14460000)); // 1 minute delay
  }
}

// Start the API calls
startAPICalls();
