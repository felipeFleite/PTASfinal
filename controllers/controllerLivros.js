const items = [
    { id: 1, nome: 'Batata' },
    { id: 2, nome: 'Pão' },
  ];
  
  const todosItems = (req, res) => {
    res.send(items);
  };
  
  const itemId = (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(i => i.id === itemId);
  
    if (item) {
      res.send(item);
    } else {
      res.status(404).send('Item não encontrado');
    }
  };
  
export default {todosItems,itemId} 