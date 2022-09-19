/**
 * You might want to use this template to display each new characters
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#examples
 */
const characterTemplate = document.getElementById("template");
const charactersContainer = document.querySelector(".characters-container");

document
  .getElementById("fetch-all")
  .addEventListener("click", async function (event) {
    const { data } = await axios.get("http://localhost:3000/api/characters");
    data.forEach((characters) => {
      const clone = characterTemplate.content.cloneNode(true);
      clone.querySelector(".character-id").textContent = character._id;
      clone.querySelector(".name").textContent = character.name;
      clone.querySelector(".cartoon").textContent = character.cartoon;
      clone.querySelector(".weapon").textContent = character.weapon;
      charactersContainer.append(clone);
    });
  });

document
  .getElementById("fetch-one")
  .addEventListener("click", function (event) {});

document
  .getElementById("delete-one")
  .addEventListener("click", function (event) {});

document
  .getElementById("edit-character-form")
  .addEventListener("submit", function (event) {});

document
  .getElementById("new-character-form")
  .addEventListener("submit", function (event) {});
