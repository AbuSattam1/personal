function toggleFields() {
    const actionType = document.getElementById("actionType").value;
    document.getElementById("borrowOptions").classList.toggle("hidden", actionType !== "borrow");
    document.getElementById("donateOptions").classList.toggle("hidden", actionType !== "donate");
}

function toggleLoanDetails() {
    const loanType = document.getElementById("loanType").value;
    document.getElementById("permanentOptions").classList.toggle("hidden", loanType !== "permanent");
    document.getElementById("temporaryOptions").classList.toggle("hidden", loanType !== "temporary");
}

async function submitForm() {
    const data = {
        actionType: document.getElementById("actionType").value,
        fullName: document.getElementById("fullName").value,
        universityID: document.getElementById("universityID").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        loanType: document.getElementById("loanType").value,
        permanentBookName: document.getElementById("permanentBookName").value,
        replacementBookName: document.getElementById("replacementBookName").value,
        temporaryBookName: document.getElementById("temporaryBookName").value,
        loanEndDate: document.getElementById("loanEndDate").value,
        donatedBookName: document.getElementById("donatedBookName").value,
        bookCondition: document.getElementById("bookCondition").value,
    };

    const TELEGRAM_CHAT_ID = '7947403575'; // استبدل بـ ID الخاص بك
    const TELEGRAM_TOKEN = '5061281257:AAHy082mvKaOSvnlPfV48kCpF6oo1ZUA7Js'; // استبدل بالتوكن الخاص بك
    const TELEGRAM_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    let message = `النوع: ${data.actionType === "borrow" ? "استعارة" : "إعارة"}\n`;
    message += `الاسم: ${data.fullName}\n`;
    message += `الرقم الجامعي: ${data.universityID}\n`;
    message += `رقم الجوال: ${data.phoneNumber}\n`;

    if (data.actionType === "borrow") {
        if (data.loanType === "permanent") {
            message += `نوع الاستعارة: دائم\n`;
            message += `اسم الكتاب: ${data.permanentBookName}\n`;
            message += `اسم الكتاب البديل: ${data.replacementBookName}\n`;
        } else {
            message += `نوع الاستعارة: مؤقت\n`;
            message += `اسم الكتاب: ${data.temporaryBookName}\n`;
            message += `تاريخ انتهاء الاستعارة: ${data.loanEndDate}\n`;
        }
    } else {
        message += `اسم الكتاب: ${data.donatedBookName}\n`;
        message += `حالة الكتاب: ${data.bookCondition}\n`;
    }

    try {
        const response = await fetch(TELEGRAM_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message })
        });

        const responseMessage = document.getElementById("responseMessage");
        const errorMessage = document.getElementById("errorMessage");

        if (response.ok) {
            responseMessage.innerText = "تم إرسال النموذج بنجاح إلى تليجرام!";
            responseMessage.classList.remove("hidden");
            errorMessage.classList.add("hidden");
            document.getElementById("libraryForm").reset();
            toggleFields(); // إعادة تعيين الحقول
        } else {
            errorMessage.innerText = "فشل إرسال النموذج. الرجاء المحاولة مرة أخرى.";
            errorMessage.classList.remove("hidden");
        }
    } catch (error) {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.innerText = "حدث خطأ أثناء إرسال النموذج إلى تليجرام.";
        errorMessage.classList.remove("hidden");
    }
}
