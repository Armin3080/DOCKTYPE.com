document.addEventListener("DOMContentLoaded", function() {
    // افکت تایپ کردن و صدای تایپ
    const typewriterElement = document.getElementById('typewriter');
    const typeSound = document.getElementById('type-sound');
    
    let text = typewriterElement.textContent;
    let index = 0;
    
    function type() {
        if (index < text.length) {
            typewriterElement.textContent = text.substring(0, index + 1);
            typeSound.currentTime = 0;
            typeSound.play();
            index++;
            setTimeout(type, 15); // سرعت تایپ کردن را تنظیم می‌کند
        }
    }
    
    type();
});

// تابع بررسی یوزرنیم و پسورد
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // یوزرنیم و پسورد صحیح را اینجا تعیین کنید
    const correctUsername = "venteda";
    const correctPassword = "DIGITAL";

    if (username === correctUsername && password === correctPassword) {
        // کاربر را به صفحه دیگری هدایت کنید
        window.location.href = "HOME.html"; // آدرس صفحه مقصد
        return false; // این دستور باعث جلوگیری از ارسال فرم می‌شود
    } else {
        alert("Invalid username or password");
        return false; // این دستور باعث جلوگیری از ارسال فرم می‌شود
    }
}
