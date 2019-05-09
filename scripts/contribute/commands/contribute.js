module.exports = {
  name: 'contribute',
  run: async toolbox => {
    const {user, contribution} = toolbox;
    await user.prompt();
    await contribution.prompt();
    user.finalize();
  },
};
