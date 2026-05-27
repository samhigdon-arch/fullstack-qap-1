function generatePassword(
  length = 8,
  useLowercase = true,
  useUppercase = false,
  useNumbers = false
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";

  let characterPool = "";

  if (useLowercase) characterPool += lowercaseChars;
  if (useUppercase) characterPool += uppercaseChars;
  if (useNumbers) characterPool += numberChars;

  // Default to lowercase if nothing selected
  if (characterPool.length === 0) {
    characterPool = lowercaseChars;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  return password;
}

module.exports = generatePassword;