const TARGET = 100;

const COLOR_DICTIONARY = {
  red: "card-red",
  yellow: "card-yellow",
  green: "card-green",
  blue: "card-blue",
};

const list = document.querySelector(".summary-list");

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    if (!list) return;

    data.forEach((dt) => {
      const cardEl = document.createElement("div");
      cardEl.classList.add("card", COLOR_DICTIONARY[dt.color]);

      const titleContainerEl = document.createElement("div");
      titleContainerEl.classList.add("center-aligned");

      const iconEl = document.createElement("img");
      iconEl.setAttribute("src", dt.icon);
      iconEl.setAttribute("alt", dt.category);

      const titleEl = document.createElement("p");
      titleEl.classList.add("aspect");
      titleEl.innerText = dt.category;

      titleContainerEl.appendChild(iconEl);
      titleContainerEl.appendChild(titleEl);

      cardEl.appendChild(titleContainerEl);

      const scoreEl = document.createElement("p");
      scoreEl.classList.add("score-common");
      scoreEl.innerHTML = `<span>${dt.score}</span> / ${TARGET}`;

      cardEl.appendChild(scoreEl);

      list.appendChild(cardEl);
    });
  });
