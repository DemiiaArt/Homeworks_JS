const userData = {
  USD: 1000,
  EUR: 900,
  UAH: 15000,
  BIF: 20000,
  AOA: 100,
};

const bankData = {
  USD: {
    max: 3000,
    min: 100,
    img: "💵",
  },
  EUR: {
    max: 1000,
    min: 50,
    img: "💶",
  },
  UAH: {
    max: 0,
    min: 0,
    img: "💴",
  },
  GBP: {
    max: 10000,
    min: 100,
    img: "💷",
  },
};

const getMoney = () => {
  return new Promise(function (resolve, reject) {
    let userPromptBalanse = prompt("Подивитися баланс карті? так/ні"); //так
    userPromptBalanse.toLowerCase() === "так"
      ? resolve(userData)
      : reject(userData, bankData);
  });
};

function getUserBalance(userDataInformation) {
  const userCashTypes = Object.keys(userDataInformation);
  const cashType = prompt(
    `Введіть валюту за якою буде виведено баланс.  Доступні валюти: ${userCashTypes.join(", ")}`);

  if (cashType === null) {
    const continueOrTakeCash = prompt('Для виведення балансу потрібно ввести валюту. Бажаєте подивитись баланс? ');
    return continueOrTakeCash === 'так' ? getUserBalance(userDataInformation) : Promise.reject('Користувач відмовився від перевірки балансу')
  } else if (!userCashTypes.includes(cashType)) {
    console.log("Введено недоступну валюту, спробуйте ще раз.");
    return getUserBalance(userDataInformation);
  } else {
    console.log(
      `Баланс становить: ${userDataInformation[cashType]} ${cashType}`
    );
    const whatNextToDo = prompt('Бажаєте зняти кошти (так/ні)?');
    return whatNextToDo === 'так'? getUserCurrency(userData, bankData) : Promise.reject('Користувач завершив операції')
  }
}

function getUserCurrency(userDataInfo, bankDataInfo) {
  return new Promise(function (resolve, reject) {
    const availableUserCash = Object.keys(userDataInfo);
    const availableBankCash = availableUserCash.filter(
      (currency) => bankDataInfo[currency]?.max > 0
    );
    const userWantToTake = prompt(
      `Введіть валюту, за якою буде проведене зняття. Доступні валюти: ${availableBankCash}`
    );

    if (availableBankCash.includes(userWantToTake)) {
      return resolve(userWantToTake)
    } else if (userWantToTake === null) {
      const whatNext = prompt('Для зняття коштів потрібно ввести валюту, бажаєте продовжити (так/ ні)?');
      return whatNext === 'так' ? getUserCurrency(userDataInfo, bankDataInfo) : reject("Користувач відмовився від зняття коштів")
    } else {
      console.log("Введено недоступну валюту. Спробуйте ще раз");
      getUserCurrency(userDataInfo, bankDataInfo);
    }
  });
}

function getUserCash(userDataInfo, bankDataInfo, currency) {
return new Promise(function(resolve) {
  const maxAvailableBankCash = Math.min(bankDataInfo[currency]?.max, userDataInfo[currency]);
  const minAvailableBankCash = bankDataInfo[currency]?.min;
  const userWantToTake = parseInt(prompt(
    `Введіть суму для зняття. Доступна сума від ${minAvailableBankCash} до ${maxAvailableBankCash} ${currency}`
  ));

  if (userWantToTake >= minAvailableBankCash && userWantToTake <= maxAvailableBankCash) {
    console.log(`От Ваші гроші ${userWantToTake} ${currency} ${bankDataInfo[currency].img}`);
    resolve(userDataInfo);
  } else if (userWantToTake < minAvailableBankCash) {
    console.log(`Введена сума менша за доступну. Мінімальна сума зняття: ${minAvailableBankCash} ${currency}`);
    getUserCash(userDataInfo, bankDataInfo, currency);
  }else if (userWantToTake > maxAvailableBankCash) {
    console.log(`Введена сума більша за доступну. Максимальна сума зняття: ${maxAvailableBankCash} ${currency}`);
    getUserCash(userDataInfo, bankDataInfo, currency);
  }
})
}

getMoney()
  .then(
  function (data) {
    return getUserBalance(data);
  },
  function () {
    return getUserCurrency(userData, bankData);
  }
  )
  .then(
    function (data) {
      return getUserCash(userData, bankData, data);
    }
  )
  .catch(
    function (error) {
      console.log(error);
    }
  )
  .finally(
    function () {
      console.log('Дякую, гарного дня 😊');
    }
  )
