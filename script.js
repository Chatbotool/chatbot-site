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
// プロトタイプ用の固定ログイン情報
const DUMMY_USER = {
    email: "test@example.com",
    password: "password123"
};

function handleLogin() {
    const emailInput = document.getElementById('email').value;
    const passInput = document.getElementById('password').value;

    // 入力値のチェック
    if (emailInput === DUMMY_USER.email && passInput === DUMMY_USER.password) {
        alert("ログイン成功！会員専用ページへ移動します。");
        showSection('chat-page');
        document.getElementById('guest-nav').style.display = 'none';
    } else {
        alert("エラー：メールアドレスまたはパスワードが違います。\n(Hint: test@example.com / password123)");
    }
}
