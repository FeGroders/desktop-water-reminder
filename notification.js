//send notification to user
let enableNotification = false;

function onClickBtn(){
    if (!enableNotification) {
        enableNotification = true;
        sendNotification('Hora da água!','Bora beber uma águinha meu patrão');
    } else {
        enableNotification = false;
    }
    console.log(enableNotification);
}

function sendNotification(title, body, url) {
    if (Notification.permission !== "granted"){
        Notification.requestPermission();
    } else {
        var notification = new Notification(title, {
            icon: "./assets/img/water.png",
            body: body,
        });

        notification.onclick = function () {
            window.open(url);
        };

        setTimeout(notification.close.bind(notification), 5000);

        if (enableNotification) {
            setTimeout(sendNotification(), 10000);
        }
    }
}