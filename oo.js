const bearerToken = 'tma user=%7B%22id%22%3A6661483037%2C%22first_name%22%3A%22Cia%22%2C%22last_name%22%3A%22Chi%22%2C%22username%22%3A%22lusips%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=9062703316693926100&chat_type=sender&auth_date=1717744734&hash=5d8731550067afe8cd0c52fed7749098fe731d1e62964a470e62a8384d3ad6ac'; // Ganti token dengan token yang valid

async function checkCoin() {
  const apiUrl = 'https://wallet-api.spell.club/user';

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': bearerToken,
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Gagal melakukan panggilan API');
    }

    const res = await response.json();

    if (res?.message === "Success") {
      let randomNumber = Math.floor(Math.random() * 40) + 1;
      const coinFarm = (res.data?.coinPoolLeftCount - randomNumber) / 2;

      collectCoin(Math.floor(coinFarm));
    }
    console.log('Hasil panggilan API:', res);
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
}

// Fungsi untuk melakukan panggilan API
async function collectCoin(coin) {
  const apiUrl = 'https://wallet-api.spell.club/claim?batch_mode=true';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': bearerToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ coin })
    });

    if (!response.ok) {
      throw new Error('Gagal melakukan panggilan API');
    }

    const data = await response.json();
    console.log('coin response:', data);
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
}

// Fungsi untuk menembak API setiap 5 menit
function startAPICalls() {
  // Panggil fungsi pertama kali saat aplikasi dimulai
  checkCoin();

  // Set interval untuk menembak API setiap 5 menit
  setInterval(checkCoin, 300000); // 300000 ms = 5 menit
}

startAPICalls();
