import readlineSync from 'readline-sync';

function sayHello() {
  const userName = readlineSync.question(
    'brain-games \nWelcome to the Brain Games!\nMay I have your name? ',
  );

  console.log(`Hello, ${userName}!`);
}
export default sayHello;
