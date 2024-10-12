var pet = {
   name :"tuffi",
   age :3,
   type: "cat",
   happiness:60,
   hunger:40,


 feed: function() {
   this.hunger = Math.max(0, this.hunger - 20);
   console.log(pet.hunger);
},

play: function() {
   this.happiness = Math.min(100, this.happiness + 20);
   console.log(this.happiness)
},

 agePet: function() {
   this.age = ++1;
   this.happiness = Math.max(this.happiness - 5);
   this.hunger = math.min(this.hunger + 10);
   console.log(this.age)
  }
}

let action = prompt(`What would you like to do with ${pet.name}? (feed, play, age, or quit)`);
if (action === "feed") {
     pet.feed();
} else if (action === "play") {
     pet.play();
} else if (action === "age") {
     pet.agePet();
} else {
     alert("Invalid action. Please try again.");
}
