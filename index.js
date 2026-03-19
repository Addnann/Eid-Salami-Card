document.getElementById('copyNum').addEventListener('click', function () {
    const num = this.innerText;

    navigator.clipboard.writeText(num);

    alert("Number copied! Opening bKash...");

    const start = Date.now();

    window.location.href = "bkash://";

    setTimeout(function () {
        if (Date.now() - start < 3000) {
            window.location.href = "https://www.bkash.com/app/";
        }
    }, 2000);
});
