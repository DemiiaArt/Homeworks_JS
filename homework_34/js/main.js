/*//Отримати кожну роботу з масиву окремо
const getJob = job => console.log(job);

const getJobs = (jobs) => {
    jobs.forEach(job => {
        getFile(`./files/${job}.json`, getJob)
    })
}

const getFile = (job, callbackFunk) => {
    const xhrJobs = new XMLHttpRequest();

    xhrJobs.open('GET', job);
    xhrJobs.send();

    xhrJobs.addEventListener('readystatechange', () => {
        if (xhrJobs.readyState === 4) {
            const isStatusJobs = xhrJobs.status>= 200 && xhrJobs.status< 400;
            const response = isStatusJobs? JSON.parse(xhrJobs.response) : {};

            callbackFunk(response)
        }
    })
}

getFile('./files/jobs-array.json', getJobs);
*/

/*//запит на кожен файл з масиву з посадами по порядку
let globalJobs;

const getFourthJob = fourthJob => console.log('fourth job', fourthJob);

const getThirdJob = thirdJob => {
    console.log('third job', thirdJob);
    getFile(`./files/${globalJobs[3]}.json`, getFourthJob);
}

const getSecondJob = secondJob => {
    console.log('second job', secondJob);
    getFile(`./files/${globalJobs[2]}.json`, getThirdJob);
}

const getFirstJob = firstJob => {
    console.log('first job', firstJob);
    getFile(`./files/${globalJobs[1]}.json`, getSecondJob);
}

const getJobs = (jobs) => {
    globalJobs = jobs;
    getFile(`./files/${globalJobs[0]}.json`, getFirstJob);
}

const getFile = (job, callbackFunk) => {
    const xhrJobs = new XMLHttpRequest();

    xhrJobs.open('GET', job);
    xhrJobs.send();

    xhrJobs.addEventListener('readystatechange', () => {
        if (xhrJobs.readyState === 4) {
            const isStatusJobs = xhrJobs.status>= 200 && xhrJobs.status< 400;
            const response = isStatusJobs? JSON.parse(xhrJobs.response) : {};

            callbackFunk(response);
        }
    })
}

// getFile('./files/jobs-array.json', getJobs);
*/

//======Виведення даних на сторінку=======
//запити на файли
let globalJobs;
const getFourthJob = (fourthJob) => console.log("fourth job", fourthJob);

const getThirdJob = (thirdJob) => {
  console.log("third job", thirdJob);
  getFile(`./files/${globalJobs[3]}.json`, getFourthJob);
};

const getSecondJob = (secondJob) => {
  console.log("second job", secondJob);
  getFile(`./files/${globalJobs[2]}.json`, getThirdJob);
};

const getFirstJob = (firstJob) => {
  console.log("first job", firstJob);
  getFile(`./files/${globalJobs[1]}.json`, getSecondJob);
};

const getJobs = (jobs) => {
  globalJobs = jobs;
  getFile(`./files/${globalJobs[0]}.json`, getFirstJob);
};

const getFile = (job, callbackFunk) => {
  const xhrJobs = new XMLHttpRequest();

  xhrJobs.open("GET", job);
  xhrJobs.send();

  xhrJobs.addEventListener("readystatechange", () => {
    if (xhrJobs.readyState === 4) {
      const isStatusJobs = xhrJobs.status >= 200 && xhrJobs.status < 400;
      const response = isStatusJobs ? JSON.parse(xhrJobs.response) : {};

      callbackFunk(response);

      localStorage.setItem(job, JSON.stringify(response));
    }
  });
};

//створення рядків таблиці
const refs = {
  root: document.querySelector("#root>tbody"),
};

function createRow(item) {
  const tableRow = document.createElement("tr");

  for (let key in item) {
    const tableData = document.createElement("td");
    tableData.textContent = item[key];
    tableRow.append(tableData);
  }

  refs.root.append(tableRow);
}

//заповнення рядків таблиці
getFile("./files/jobs-array.json", getJobs);

const jobsArrayStorage = JSON.parse(
  localStorage.getItem("./files/jobs-array.json")
);

for (job of jobsArrayStorage) {
  let currentJob = JSON.parse(localStorage.getItem(`./files/${job}.json`));
  createRow(currentJob);
}
