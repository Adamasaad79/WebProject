
function signIn() {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;
    
    let storedPassword = localStorage.getItem(username);
    
    if (storedPassword && storedPassword === password) {
        alert('Login successful! Redirecting...');
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
}
</script>
