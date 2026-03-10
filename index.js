document.getElementById('copyNum').addEventListener('click', function() {
    const num = this.innerText;
    navigator.clipboard.writeText(num).then(() => {
        alert('The number has been copied: ' + num);
    });
});