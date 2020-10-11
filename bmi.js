let M_height = 1.70,M_Mass = 49;//声明变量：存储Mark的身高、体重
let J_height = 1.75,J_Mass = 50;//声明变量：存储John的身高、体重

let M_BIM = M_Mass / (M_height * M_height);
let J_BIM = J_Mass / (J_height * J_height);
console.log("Mark的BIM值为：",M_BIM);
console.log("John的BIM值为：",J_BIM);

let compare;
compare = (M_BIM > J_BIM) ? true : false;
console.log(compare);

console.log("Mark的BMI是否比John的更高？",String(compare));