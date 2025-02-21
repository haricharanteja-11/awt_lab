const id = Symbol("id");
const user = {
  name: "Hari Charan Teja",
  [id]: 101
};

console.log(user[id]);
