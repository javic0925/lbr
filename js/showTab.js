function showTab(page){
    [].forEach.call(document.querySelectorAll('.tab'), tab => tab.style.display='none');
    document.querySelector(`#${page}`).style.display = 'flex';
    [].forEach.call(document.getElementsByClassName('yab'), a => {a.parentNode.className = ''})
    document.querySelector(`a[href='${page}']`).parentNode.className = 'active'
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    [].forEach.call(document.getElementsByClassName('yab'), a => {
      a.addEventListener('click', e => {
        e.preventDefault()
        let page = a.attributes['href'].value
        showTab(page)
        history.pushState({page:page}, page.toUpperCase(), page)
      })
    })
    
    showTab('home')
  })
  
  window.addEventListener('popstate', e => {
    if (e.state.page) showTab(e.state.page)
  })