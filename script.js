fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const scoresList = document.querySelector("#scores-list");
    const userScore = document.querySelector("#your-score");

    const scores = [];

    for (let d of data) {
      scores.push(d.score);
      let li = document.createElement("li");
      let div = document.createElement("div");
      let image = document.createElement("img");
      let span = document.createElement("span");

      image.src = d.icon;
      image.alt = d.category + " icon";
      span.innerText = d.category;
      span.className = d.category.toLowerCase();
      li.className = d.category.toLowerCase();
      div.className = "category";

      div.append(image);
      div.append(span);

      li.append(div);

      div = document.createElement("div");
      span = document.createElement("span");

      //span.innerText = d.score + " / 100";
      span.innerText = d.score;
      span.className = "user-score";
      div.append(span);
      div.append(document.createTextNode("/ 100"));

      div.className = "score";

      li.append(div);

      scoresList.append(li);
    }

    const userAverageScore = Math.round(
      scores.reduce((acc, i) => acc + i, 0) / scores.length
    );
    userScore.append(userAverageScore);
  });
