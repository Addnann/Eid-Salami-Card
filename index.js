const copyNum = document.getElementById('copyNum');
const toast = document.getElementById('toast');

copyNum.addEventListener('click', () => {
    const num = copyNum.innerText;

    navigator.clipboard.writeText(num).then(() => {
        showToast("Number Copied ✅");
    });
});

function showToast(msg) {
    toast.innerText = msg;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

// Open bKash (optional)
function openBkash() {
    window.location.href = "bkash://";
}
