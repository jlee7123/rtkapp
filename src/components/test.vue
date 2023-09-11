const axios = require('axios');

let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://121.137.228.240:7579/Mobius/KETI_RTK/DroneList/latest',
    headers: {
        'Accept': 'application/json',
        'X-M2M-RI': '12345',
        'X-M2M-Origin': 'SSwonseok'
    }
};

axios.request(config)
    .then((response) => {
        console.log(response.data["m2m:cin"].con);
        console.log(response.data["m2m:cin"].con[1].gcs);
        console.log(response.data["m2m:cin"].con[1]);
    })
    .catch((error) => {
        console.log(error);
    });
