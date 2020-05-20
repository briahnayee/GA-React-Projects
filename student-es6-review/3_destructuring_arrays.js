const winners = ["Jill", "Dave", "Billy"];

function winnersAre_v1(arr) {
  firstPlace = arr[0];
  secondPlace = arr[1];
  thirdPlace = arr[2];

  console.log(firstPlace);
  console.log(secondPlace);
  console.log(thirdPlace);
}

winnersAre_v1(winners);

const winnersAre_v2 = ([firstPlace, secondPlace, thirdPlace]) => {
        console.log(firstPlace);
        console.log(secondPlace);
        console.log(thirdPlace);
    }
}