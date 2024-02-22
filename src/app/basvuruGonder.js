let metamaskConnected= false;

function connectMetamask() {
    metamaskConnected=true;

    if (metamaskConnected){
        document.getElementById('connect-metamask').style.display = 'none';
        document.getElementById('basvuru-form').style.display = 'block';
    }
}

document.getElementById('basvuru-form').addEventListener('input', function(){
    document.getElementById('submitBtn').disabled=false;
});

document.getElementById('basvuru-form').addEventListener('submit', function(event){
    event.preventDefault();
    alert("Başvuru Başarılı Bir Şekilde Gönderildi!");
    window.location.href = "/src/pages/index.html";
});

