import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log:['info','query'],})

//SELECT * FROM POST OFFSET 0 LIMIT 10
//SELECT * FROM POST OFFSET 10 LIMIT 20
//SELECT * FROM POST OFFSET 20 LIMIT 30
async function main() {
  let res = await prisma.post.findMany({
     take:3,
     skip : 1 
  })
  console.log(res);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })