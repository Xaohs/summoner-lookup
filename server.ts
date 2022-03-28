import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Connect the client
    await prisma.$connect()
    // ... you will write your Prisma Client queries here
    const allData = await prisma.allData.create({
        data: {
            puuid: "gfdfdfd",
            matchID: "fffffff"
        }
    })
    console.log(allData);
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })