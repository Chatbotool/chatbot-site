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
    // HTML内の header 要素を取得（id="main-header" を付けている場合）
    const header = document.getElementById('main-header') || document.querySelector('header');
    
    if (window.scrollY > 50) { 
        // 50px以上スクロールしたら 'scrolled' クラスを追加
        header.classList.add('scrolled');
    } else {
        // 50px未満（一番上）なら 'scrolled' クラスを削除
        header.classList.remove('scrolled');
    }
});
