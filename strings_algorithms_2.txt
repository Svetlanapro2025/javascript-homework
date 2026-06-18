let accountStatus = 'regular';
let username = 'Софья';
let cashbackPercentage;

if(accountStatus === 'extended' ) {
  cashbackPercentage = 15;
} else if(accountStatus === 'premium') {
  cashbackPercentage = 20;
} else if(accountStatus === 'vip') {
  cashbackPercentage = 30;
} else{accountStatus = 'regular';
  cashbackPercentage = 10;
}

console.log(`${username} | ${accountStatus} аккаунт`);

console.log(`Вы получаете ${cashbackPercentage} % с покупок на бонусный счёт`);

