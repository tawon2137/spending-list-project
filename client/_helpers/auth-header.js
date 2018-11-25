

export function authHeader() {
  //인증 헤더 내부 jwt 토큰 반환
  const user = JSON.parse(localStorage.getItem('user'));

  if(user && user.token) {
    return { 'Authoriazion': `Bearer ${user.token}` };
  }else {
    return {};
  }
}
