module.exports = [
	{
    method: 'GET',
    path:'/api/v1/products',
    handler: (request, h) => {
        return 'Teste rota /products';
    }
  }
]