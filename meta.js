const url = "https://x.metacene.io/cmd.php";
const headers = {
  "accept": "application/json, text/plain, */*",
  "accept-language": "en-US,en;q=0.9",
  "content-type": "application/json",
  "priority": "u=1, i",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "none",
  "cookie": "PHPSESSID=7856faf6f66b44ae6ea356f73b0d28c4"
};

const body = JSON.stringify({
  "user": {
    "recharge": {
      "spar": 1483
    }
  }
});

async function callAPI() {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
      referrerPolicy: "strict-origin-when-cross-origin"
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

// Function to start the API calls with a delay
async function startAPICalls() {
  while (true) {
    await callAPI();
    await new Promise(resolve => setTimeout(resolve, 60000)); // 1 minute delay
  }
}

// Start the API calls
startAPICalls();
