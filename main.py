import datetime #for reading present date
import time 
from plyer import notification #for getting notification on your PC
import os

def sendNotification():
    notification.notify(
        title='Hora da água!',
        message='Bó bebe uma águinha meu patrão',
        app_name='Águaaaaa',
        # app_icon='/assets/img/agua-mineral.png',
        timeout=10
    )

if "DISPLAY" not in os.environ:
    raise RuntimeError("cannot connect to X server")
else:
    sendNotification()

