global.users = {
    user1: { username: 'admin', passwordHash: 'abc123' },
    user2: { username: 'john', passwordHash: 'def456' }
  };
  

  function handleResetFlag() {

    if (process.argv[2] === '--reset') {
      global.users = {}; 
      console.log('Глобальне сховище користувачів очищено.');
      console.log(JSON.stringify(global.users));
      
    } else {
      console.log('Флаг --reset не передано. Користувачі залишаються.');
      console.log(JSON.stringify(global.users));
    }
  }
  
  handleResetFlag();