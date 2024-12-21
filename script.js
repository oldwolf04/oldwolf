
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الفوري للنموذج

    // الحصول على القيم من النموذج
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // إخفاء رسائل النجاح والخطأ في البداية
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('success-message').style.display = 'none';

    // التحقق من صحة الحقول
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        document.getElementById('error-message').textContent = 'يرجى تعبئة جميع الحقول.';
        document.getElementById('error-message').style.display = 'block';
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById('error-message').textContent = 'كلمة المرور وتأكيد كلمة المرور غير متطابقين.';
        document.getElementById('error-message').style.display = 'block';
        return;
    }

    // التحقق من صحة البريد الإلكتروني
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('error-message').textContent = 'يرجى إدخال بريد إلكتروني صالح.';
        document.getElementById('error-message').style.display = 'block';
        return;
    }

    // إذا كانت البيانات صحيحة، عرض رسالة النجاح
    document.getElementById('success-message').style.display = 'block';

    // إخفاء النموذج بعد النجاح
    document.getElementById('registration-form').style.display = 'none';
});
