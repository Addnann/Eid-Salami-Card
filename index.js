document.getElementById('copyNum').addEventListener('click', function() {
    const num = this.innerText;

    navigator.clipboard.writeText(num).then(() => {
        alert('Number copied! Now paste it in the bKash app.');

        setTimeout(function() {
            window.location.href = "bkash://"; 
            
            setTimeout(function() {
                if (document.hasFocus()) {
                    window.location.href = "https://www.bkash.com/app/";
                }
            }, 2000);
        }, 500);

    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});