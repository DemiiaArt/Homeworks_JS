const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
};



const getMoney = () => {
  return new Promise (function(resolve, reject) {
    let userPromptBalanse = prompt('Подивитися баланс карті? так/ні'); //так
    userPromptBalanse.toLowerCase() === 'так' ? resolve(userData) : reject();
  })
};

getMoney()
  .then(
    function getUserBalance (userDataInformation) {
      const userCashTypes = Object.keys(userDataInformation);
          const cashType = prompt(`Введіть валюту за якою буде виведено баланс.  Доступні валюти: ${userCashTypes.join(', ')}`);
          switch (cashType) {
            case 'USD': console.log(`Баланс становить: ${userDataInformation.USD} ${cashType}`);
              break;
            case 'EUR': console.log(`Баланс становить: ${userDataInformation.EUR} ${cashType}`);
              break;
            case 'UAH': console.log(`Баланс становить: ${userDataInformation.UAH} ${cashType}`);
              break;
            case 'BIF': console.log(`Баланс становить: ${userDataInformation.BIF} ${cashType}`);
              break;
            case 'AOA': console.log(`Баланс становить: ${userDataInformation.AOA} ${cashType}`);
              break;
            case null: console.log(`Для отримання балансу треба ввести валюту`);
              break;
            default: getUserBalance(userDataInformation);
          }
    }, 
  
    function () {

    }
  )