let man = {
  name: "Ali",
  lastName: "Aliev",
  age: 34,
  height: "180",
  login: "aaa",
  password: "1234",
  check: "$2133",
};
man.address = "Grozny";
console.log(man);

//

let box = "index";
if (man.password == "1234") {
  console.log("Добро пожаловать ");
} else {
  console.log("логин пароль не верный");
}

//

let num = 0;
while (num < 10) {
  // console.log(num);
  num++;
}

for (num = 0; num < 10; num++) {
  console.log(num);
}
