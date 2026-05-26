const generatePassword = require("./generatePassword");

const args = process.argv.slice(2);

let length = 8;
let useLowercase = false;
let useUppercase = false;
let useNumbers = false;

// HELP FLAG
if (args.includes("--help")) {
  console.log(`
Password Generator Usage:

node passwordGenerator.js [flags]

Flags:
--help              Show this help message
--length <number>   Set password length
--lowercase         Include lowercase letters
--uppercase         Include uppercase letters
--numbers           Include numbers

Examples:
node passwordGenerator.js --length 12 --uppercase --numbers
  `);

  process.exit(0);
}

// LENGTH FLAG
const lengthIndex = args.indexOf("--length");

if (lengthIndex !== -1) {
  const value = parseInt(args[lengthIndex + 1]);

  if (isNaN(value) || value <= 0) {
    console.error("Error: Password length must be a positive number.");
    process.exit(1);
  }

  length = value;
}

// CHARACTER FLAGS
if (args.includes("--lowercase")) {
  useLowercase = true;
}

if (args.includes("--uppercase")) {
  useUppercase = true;
}

if (args.includes("--numbers")) {
  useNumbers = true;
}

// Default to lowercase if no flags selected
if (!useLowercase && !useUppercase && !useNumbers) {
  useLowercase = true;
}

const password = generatePassword(
  length,
  useLowercase,
  useUppercase,
  useNumbers
);

console.log(`Generated Password: ${password}`);
