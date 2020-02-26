const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false
    }
  }
];

//**************************************************************************
// Make function for appending a chart in html for NBA games
// and give it class through JS
//**************************************************************************

const ulParent = document.createElement("ul");
const makeChart = (games, targetTeam) => {
  for (let game of games) {
    const { homeTeam, awayTeam } = game;
    const gameLi = document.createElement("li");
    gameLi.innerHTML = getScoreLine(game);
    gameLi.classList.add(isWinner(game, targetTeam) === true ? "win" : "loss");
    ulParent.append(gameLi);
  }

  return ulParent;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, points: hPoint } = homeTeam;
  const { team: aTeam, points: aPoint } = awayTeam;
  const teamNames = `${aTeam} @ ${hTeam}`;

  let scoreLine;
  if (aPoint > hPoint) {
    scoreLine = `<b>${aPoint}</b> - ${hPoint}`;
  } else {
    scoreLine = `${aPoint} - <b>${hPoint}</b>`;
  }

  return `${teamNames} ${scoreLine}`;
};

const houstonSection = document.querySelector("#hs");
const gsSection = document.querySelector("#gs");
const gsChart = makeChart(warriorsGames, "Golden State");
const hrChart = makeChart(warriorsGames, "Houston");

gsSection.appendChild(gsChart);
houstonSection.appendChild(hrChart);
