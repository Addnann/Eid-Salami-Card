document.getElementById('copyNum').addEventListener('click', function () {
    const num = this.innerText;

    navigator.clipboard.writeText(num);

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
        window.location.href = "bkash://";
        
        setTimeout(function () {
            window.location.href = "https://www.bkash.com/app/";
        }, 2000);
    } else {
        alert("Please open this on your mobile to use bKash app.");
    }
});

//open bkash app 
