import { prisma } from "@/prisma";
import { log } from "console";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "EDu",
        email: "teste@gmail.com",
      },

      {
        name: "EDuado",
        email: "adu@gmail.com",
      },
    ],
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
