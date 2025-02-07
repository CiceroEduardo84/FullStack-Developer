const user = {
  name: "Rodrigo",
  email: "rodrigo@email.com",
  message: function () {
    // console.log(`Olá ${user.name}`);
    console.log(`Olá ${this.name}`);
  },
};

user.message();
