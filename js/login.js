function FnBt(){
    var email = document.querySelector('#email')
    var emailText = email.value
    
    var senha = document.querySelector('#senha')
    var senhaText = senha.value
    
    if(emailText == 'aluno_fametro@hotmail.com' && senhaText == 'fametro123')
    { window.open('principal.html') }
    else{document.querySelector('.validacao').innerHTML = 'USUARIO NÃO ENCONTRADO' }
    
    
}