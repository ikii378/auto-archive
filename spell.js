const bearerToken = ''; // Ganti token dengan token yang valid
 
async function checkCoin() {
  const apiUrl = 'https://wapi.spell.club/user';
 
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'authorization': bearerToken,
        'Content-Type': 'application/json',
      } 
    });
 
    if (!response.ok) {
      throw new Error('Gagal melakukan panggilan API');
    }
 
    const res = await response.json();
 
    if (res?.message == "Success") {
 
            let randomNumber = Math.floor(Math.random() * 40) + 1;
 
        const coinFarm = (res.data?.coinPoolLeftCount - randomNumber) / 2
 
      collectCoin(Math.floor(coinFarm))
 
 
    }
    console.log('Hasil panggilan API:', res);
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
}
 
// Fungsi untuk melakukan panggilan API
async function collectCoin(coin) {
 
  const apiUrl = 'https://wapi.spell.club/claim?batch_mode=true';
 
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'authorization': bearerToken,
        'Content-Type': 'application/json',
      },
      body: coin
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
 
  // Set interval untuk menembak API setiap 1 menit
  setInterval(checkCoin, 50000);
}
 
startAPICalls()
