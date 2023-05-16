export async function getAllProperty(type, token) {
  try {
    console.log(token);
    const response = await fetch(
      'http://ec2-54-166-238-5.compute-1.amazonaws.com/imoveis/tipo-imovel' +
        type,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          apikey: '443e64bfdcf56ec9e0790cdfedfb9653ab4a6bb3',
          token: token,
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
