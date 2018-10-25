const fakeDatabase = {
  dutyDetail: [{
    date: '2018-10-26',
    shift: 'P',
    request: '',
    approve: ''
  }, {
    date: '2018-10-27',
    shift: 'A',
    request: '',
    approve: ''
  }, {
    date: '2018-10-28',
    shift: '1N',
    request: '',
    approve: ''
  }, {
    date: '2018-10-29',
    shift: '2N',
    request: '',
    approve: ''
  }, {
    date: '2018-10-30',
    shift: 'OFF',
    request: '',
    approve: ''
  }, {
    date: '2018-10-31',
    shift: 'P',
    request: '',
    approve: ''
  }]
};

const delay = (ms) => new Promise (resolve => setTimeout(resolve, ms));

export const dutyDetail = (filter) =>
  delay(500).then(() => {
    switch(filter) {
      case 'all':
        return fakeDatabase.dutyDetail;
      default:
        throw new Error(`unknown filter: ${filter}.`);
    }
})


export const addRegister = (date, text) =>
  delay(500).then(() => {
    const newDetail = {
      date,
      shift: '',
      request: `${text}`,
      approve: ''
    };
    fakeDatabase.dutyDetail.map(detail => {
      if (detail.date === date) {
        if (detail.request === '') {
          detail.request = text;
        } else {
          detail.request += `| ${text}`
        }
        return detail
      } else {
        fakeDatabase.dutyDetail.push(newDetail)
      }
    })
    return newDetail;
});