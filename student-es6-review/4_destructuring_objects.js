const myFavourites = {
    food: "sushi",
    music: "jazz",
    animal: "cat",
  };
  function favouritesAre_v1(obj) {
    let food = obj.food;
    let music = obj.music;
    let animal = obj.animal;
    console.log(food);
    console.log(music);
    console.log(animal);
  }
  favouritesAre_v1(myFavourites);

  const favouritesAre_v2 = ({food, music, animal}) => {

  console.log(food);
  console.log(music);
  console.log(animal);
  }

  favouritesAre_v2(myFavourites)