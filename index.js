document.getElementById('copyNum').addEventListener('click', function() {
    const num = this.innerText;

    navigator.clipboard.writeText(num).then(() => {
        alert('Number copied! Opening bKash app...');

        window.location.href = "bkash://";

        setTimeout(function() {
            if (document.hasFocus()) {
                window.location.href = "https://www.bkash.com/app/";
            }
        }, 2500);

    }).catch(err => {
        console.error('Error:', err);
    });
});