import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname: string) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName: firstname,
            lastName: lastname
        },
        select: {
            id: true,
            password: true,
            firstName: true
        }
    })
    console.log(res);
}
insertUser("neeraj@gmail.com", "password", "neeraj", "pawar")