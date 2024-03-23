function checkLogin(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
  
    // بررسی یوزرنیم و رمز عبور
    if (username === "venteda" && password === "DCKPE") {
      window.location.href = 'HOME.html'; // مسیر صفحه مقصد را وارد کنید
    } else {
      alert('Username or password is wrong!');
    }
  }
