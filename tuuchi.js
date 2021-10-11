window.onload = function() {
    Notification.requestPermission();
    setInterval(checkTime, 1000);   
 };
 
 const checkTime = function() {
    let previousMinutes;
    const options = {
        body: "ボタンをクリックでゲームを始めましょう！",
        icon: "bell.png"
    };
    return function() {
        const currentTime = new Date();
        const minutes = currentTime.getMinutes();
        if (previousMinutes !== minutes && minutes % 1 === 0) {
            previousMinutes = minutes;
            const notification = new Notification("Check!", options);
        }
    }  
 }();
