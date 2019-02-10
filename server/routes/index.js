const users = require('./user');

module.exports = function(app, db) {
  console.log('routes')
  users(app, db);
  // Тут, позже, будут и другие обработчики маршрутов
};
