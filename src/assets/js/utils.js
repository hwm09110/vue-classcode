function isPhoneNum(phone){
  let reg = /^1[2,3,4,5,6,7,8,9]\d{9}$/g
  return reg.test(phone)
}

function isIphone(){
  return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
}

export {
  isPhoneNum,
  isIphone
}