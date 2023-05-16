export async function registerProperty(property) {
  const token = useUserContext();
  try {
    const response = await fetch(
      'http://ec2-54-166-238-5.compute-1.amazonaws.com/imoveis/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          apikey: '443e64bfdcf56ec9e0790cdfedfb9653ab4a6bb3',
          token: token.token['token'],
        },
        body: JSON.stringify(property),
      }
    );

    if (response.ok) {
      return true;
    } else {
      console.log(response);
      return false;
    }
  } catch (error) {
    console.log('Houve um erro');
    console.log(error);
    return false;
  }
}
