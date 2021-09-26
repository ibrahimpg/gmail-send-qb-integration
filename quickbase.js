const fetch = require('node-fetch');

const url = 'https://api.quickbase.com/v1/records/query';

const headers = {
  'Content-Type': 'application/json',
  'QB-Realm-Hostname': process.env.QB_REALM,
  Authorization: `QB-USER-TOKEN ${process.env.QB_TOKEN}`,
};

module.exports = (recordId) => fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    to: '123455',
    data: [
      {
        3: { value: recordId },
        10: { value: true },
        11: { value: 'user@quickbase.com' },
      },
    ],
  }),
});
