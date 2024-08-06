// Create a function that generates random passwords and console.log() that password.
 export const passwordGenerator = generatePassword
 
 function generatePassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    let password = "";
    for (let i = 0; i < passwordLength; i++){
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    console.log(password);
}
generatePassword()
 
