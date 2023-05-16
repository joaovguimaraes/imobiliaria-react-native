export async function getAllProperty(id, token) {
  try {
    console.log(token);
    const response = await fetch(
      'http://ec2-54-166-238-5.compute-1.amazonaws.com/imoveis/',
      {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          apikey: '443e64bfdcf56ec9e0790cdfedfb9653ab4a6bb3',
          token: token,
          body: JSON.stringify(id),
        },
      }
    );
    if (response.ok) {
      return await response.json(); // Extrai os dados da resposta em formato JSON
    } else {
      console.log('A solicitação falhou com status:', response.status);
      return null; // Retorna nulo em caso de falha na solicitação
    }
  } catch (error) {
    console.log('Houve um erro');
    console.log(error);
    return false;
  }
}
