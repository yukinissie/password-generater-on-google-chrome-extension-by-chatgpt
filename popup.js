const form = document.getElementById("formId")
const password = document.getElementById("password");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  password.textContent = generatePassword(
    length,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
});

function generatePassword(
  length,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  let characters = "abcdefghijklmnopqrstuvwxyz";
  let password = "";

  if (includeUppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    characters += "0123456789";
  }
  if (includeSymbols) {
    characters += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
  }

  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}
