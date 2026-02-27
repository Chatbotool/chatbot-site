function showSection(sectionId) {
    // 全てのセクションから active クラスを消す
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    // 指定したセクションを表示
    document.getElementById(sectionId).classList.add('active');
}

function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert("ログインに成功しました！");
        showSection('chat-page');
        document.getElementById('guest-nav').style.display = 'none'; // ヘッダーのボタンを消す
    } else {
        alert("メールアドレスとパスワードを入力してください");
    }
}
