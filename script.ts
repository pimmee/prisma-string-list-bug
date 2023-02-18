import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that we can use async/await
async function main() {
  // Seed the database with users and posts
  console.log('Trying to upsert user with postIds (String[])')
  const email = 'demo@example.com'
  const user1 = await prisma.user.upsert({
    where: { email },
    update: { postIds: { push: 'post1' } },
    create: { postIds: { set: ['post1'] }, email },
  })
  console.log('Successfully upserted user')
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
