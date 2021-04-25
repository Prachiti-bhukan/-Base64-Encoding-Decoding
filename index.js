console.log("Welcome to the Base64 Base64 Encoder/Base64 Decoder\n\nWhat you want to try\n1. Base64 Encode\n2. Base64 Decode\n");

const readLineSync = require('readline-sync');
const userInput = readLineSync.question('Your Choice---> ');

 if(userInput==1)
{
const readLineSync = require('readline-sync');
const givenString = readLineSync.question('\n\nEnter the string to be encoded:\n\n');
base64Encode(givenString);
}

else if(userInput==2)
{
const readLineSync = require('readline-sync');
const givenBase64 = readLineSync.question('\n\nEnter the Base46 to be decoded:\n\n');
base64Decode(givenBase64);
}

else
{
  console.log("\n\nwrong Choice!!!\n\n");
}

function base64Encode(givenString)
{
console.log(`\n\nThe encoded String is --->\n\n${Buffer.from(givenString).toString('base64')}`);
}

function base64Decode(givenBase64)
{
console.log(`\n\nThe Decoded URL is --->\n\n${Buffer.from(givenBase64, 'base64').toString('ascii')}`);
}