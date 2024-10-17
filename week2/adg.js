const jwt = require('jsonwebtoken');
const jwtPassword =" secret "
const jod=require('zod');

const emailschema=zod.String().email();
const passwordSchema=zod.String().min(6);


function signJwt(username,password){
const usernameResponse = emailschema.safeParse(username);
const passwordResponse = passwordSchema.safeParse(password);
 if(!usernameResponse.success|| !passwordResponse.success){
    return null;
 } 


const signature=   jwt.sign({
        username
    },JwtPassword)
    return signature;
}
const ans = signJwt("neeraj","bgashdbgfijdf")
console.log(ans);