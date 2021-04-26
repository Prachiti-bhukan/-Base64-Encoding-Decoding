 const welcomeNote = () =>
{
console.log("Welcome to the Base64 Base64 Encoder/Base64 Decoder\n\nWhat you want to try\n1. Base64 Encode\n2. Base64 Decode\n");
}

const takeInput = () =>
{
  const readLineSync = require('readline-sync');
  const userInput = readLineSync.question('Your Choice---> ');
  if(userInput==1)
  {
    base64Encode();
  }

  else if(userInput==2)
  {
    base64Decode();
  }

  else
  {
    console.log("\n\n INVALID !!!\n\n");
  }

}


const base64Encode = () =>
{
const readLineSync = require('readline-sync');
const givenString = readLineSync.question('\n\nEnter the string to be encoded:\n\n');
console.log(`\n\nThe encoded String is --->\n\n${Buffer.from(givenString).toString('base64')}`);
}


const base64Decode = () =>
{
const readLineSync = require('readline-sync');
const givenBase64 = readLineSync.question('\n\nEnter the Base46 to be decoded:\n\n');
console.log(`\n\nThe Decoded URL is --->\n\n${Buffer.from(givenBase64, 'base64').toString('ascii')}`);
}

function driver()
{
  welcomeNote();
  takeInput();
  
}

driver();