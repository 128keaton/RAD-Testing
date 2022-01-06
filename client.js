const Client = require('node-radius-client');
const prompt = require('prompt');

const {
    dictionaries: {
        rfc2865: {
            file,
            attributes,
        },

    },
} = require('node-radius-utils');



prompt.start();


prompt.get(['host', 'secret', 'username', 'password'], function (err, result) {
    if (err) {
        return onErr(err);
    }

    const client = new Client({
        host: result.host,
        dictionaries: [
            file,
        ],
    });


    client.accessRequest({
        secret: result.secret,
        attributes: [
            [attributes.USER_NAME, result.username],
            [attributes.USER_PASSWORD, result.password],
        ],
    }).then((result) => {
        console.log('result', result);
    }).catch((error) => {
        console.log('error', error);
    });
});


function onErr(err) {
    console.log(err);
    return 1;
}

