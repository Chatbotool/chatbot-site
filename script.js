// 1. プロトタイプ用の固定ログイン情報（デモ用）
const DUMMY_USER = {
    email: "test@example.com",
    password: "secure-demo-2026-XyZ"
};

/**
 * 表示するセクションを切り替える関数
 */
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    window.scrollTo(0, 0);
}

/**
 * ログインボタンが押された時の処理
 */
function handleLogin() {
    const emailInput = document.getElementById('email').value;
    const passInput = document.getElementById('password').value;

    if (emailInput === DUMMY_USER.email && passInput === DUMMY_USER.password) {
        alert("ログイン成功！会員専用ページへ移動します。");
        showSection('chat-page');
        
        const guestNav = document.getElementById('guest-nav');
        if (guestNav) {
            guestNav.style.display = 'none';
        }
    } else {
        alert("エラー：メールアドレスまたはパスワードが違います。\n(Hint: test@example.com / secure-demo-2026-XyZ)");
    }
}

/* =========================================
   【追加機能】スクロール検知：ヘッダー背景色の変更
   ========================================= */
window.addEventListener('scroll', function() {
    // 確実に要素を取得するために、IDとタグの両方で探します
    const header = document.getElementById('main-header') || document.querySelector('header');
    
    // headerが存在する場合のみ処理を実行（これでエラーが消えます）
    if (header) {
        if (window.scrollY > 50) { 
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});
