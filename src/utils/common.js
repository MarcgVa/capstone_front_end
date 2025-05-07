

const getRole = () => {
  return window.sessionStorage.getItem('role').toLowerCase();
}



export default getRole