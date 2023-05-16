export async function loginRequest(login) {
  try {
    const token = await fetch(
      'http://ec2-54-166-238-5.compute-1.amazonaws.com/authenticate/token',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          apikey: '443e64bfdcf56ec9e0790cdfedfb9653ab4a6bb3',
        },
        body: JSON.stringify(login),
      }
    );
    return token.json();
  } catch (error) {
    console.log('Erro ao realizar login');
    console.log(error);
    return false;
  }
}
