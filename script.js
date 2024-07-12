document.title = "Sharad Patel";
// Click on download CV button to download my CV
const cvButton = document.querySelector(".my-cv");
cvButton.addEventListener("click", () => {
  window.open("Sharad Patel CV.pdf", "_blank");
});

async function getProfile() {
  try {
    const url =
      "https://script.google.com/macros/s/AKfycbxGXPKima8v6GeroNLD1Hp3z811UIn1tWG7nV6UB3kJd7k5wPQBIwe8A-hq0YyYDS4s/exec";
    const res = await fetch(url);

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function createProfile() {
  const profile = await getProfile();

  const profileParagraph = document.getElementById("profile");
  profileParagraph.textContent = profile.data;
}

createProfile();