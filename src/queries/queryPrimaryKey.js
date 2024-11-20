export const queryPrimaryKey = (enty, id) => {
  return enty.findByPk(id);
};

// Retorna null se não existir 