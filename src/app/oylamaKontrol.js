let metamaskConnected = false;
let hasVoted = false;

function connectMetamask()
{
    // burada Metamask ile bağlantı sağlama işlemleri yapılır

         metamaskConnected = true;

        // bağlantı sağlandıktan sonra anket formunu göster
        if (metamaskConnected) {
            document.getElementById('connect-metamask').style.display = 'none';
            document.getElementById('survey-form').style.display = 'block';
        }
}

document.getElementById('surveyForm').addEventListener('input', function () {
    // oylama formunda herhangi bir değişiklik olduğunda gönder butonunu aktif et
     document.getElementById('submitBtn').disabled = false;
});

document.getElementById('surveyForm').addEventListener('submit', function (event) {
    // oylama formu gönderildiğinde bu fonksiyon çalışır
    event.preventDefault();
    // burada anket verilerini işleme ve gönderme işlemleri yapılacak
    hasVoted=true;
    alert('Oy gönderildi!');
    window.location.href = "/src/index.html";
});




