export async function registerUser(usuario) {
  try {
    const response = await fetch(
      'http://ec2-54-166-238-5.compute-1.amazonaws.com/usuarios/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          apikey: '443e64bfdcf56ec9e0790cdfedfb9653ab4a6bb3',
        },
        body: JSON.stringify(usuario),
      }
    );
    console.log(response);
    return true;
  } catch (error) {
    console.log('Houve um erro');
    console.log(error);
    return false;
  }
}
