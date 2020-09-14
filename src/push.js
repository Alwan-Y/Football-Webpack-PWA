var webPush = require('web-push');

const vapidKeys ={"publicKey":"BHyNyPIDxf9lH_T0Q5rT6LxZwbbmTKfRIQ2lcgqEGpbgbXKhEOGFVVlFRJ75Wgh5xFux936HzC2mb1g0J9WiyoI","privateKey":"r-ENeDqltXf6H1WXebigUZCFWw7HN8aQSAOqJTkPXhc"}

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dNzbPJmsys0:APA91bFV0MI2AmqBlX0JkOqvhwENhyHUIWU6HwoAvjif2jIaKEXjNdpKdbY2fgN6xX-Yt-OywJ8VzZse6jfkLf8obsfaH5AEg4BtP4Izmq_ZFGTVVoF0nvJOUfdhel4MC4bKjT0LZJpw",
    "keys": {
        "p256dh": "BI0CQ3ZQ1NIS6ezlqym0/z2ARAmQD1kujPtTdWoX1BaGMC2NVL92AtcZ69UHuAGuYPTeLLAJHtncPkIdPJ33h4k=",
        "auth": "aHS64qcMp4rMK8jJ+NZYnA=="
    }
};
var payload = 'Halo!! Kembali lagi dengan saya :)';
var options = {
    gcmAPIKey: '615953300937',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);