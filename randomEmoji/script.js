const emojiButton = document.getElementById("emoji-btn");
const emojiName = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=6dd3f8285a482b8efd2cd51288c814724a3462ed"
  );

  data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

emojiButton.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  emojiButton.innerText = emoji[randomNum].emojiName;
  emojiName.innerText = emoji[randomNum].emojiCode;
});
