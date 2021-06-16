module.exports = {
  up: (queryInterface) => {
    return Promise.all([
      queryInterface.addIndex('Companies', ['searchVector'], {
        using: 'gin',
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeIndex('Companies', ['searchVector']),
    ]);
  },
};
