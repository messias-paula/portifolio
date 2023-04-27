function sair(){
    localStorage.removeItem('token')
    window.location.href = 'chrome://newtab/'
}