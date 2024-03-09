function skillsMember() {
  return {
    name: "John",
    age: 25,
    skills: ["JavaScript", "React", "Node", "MongoDB"],
    greet: function () {
      console.log("Hello, " + this.name);
    },
  };
}