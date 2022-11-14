import readlineSync from 'readline-sync';

export default function sayHello() {
  const userName = readlineSync.question(
    'brain-games \nWelcome to the Brain Games!\nMay I have your name? '
  );

  console.log(`Hello, ${userName}!`);
  return userName;
}
