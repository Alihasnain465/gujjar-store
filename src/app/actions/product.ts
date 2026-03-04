"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const image = formData.get("image") as string;

  try {
    // Neon DB mein data save ho raha hai
    await prisma.product.create({
      data: {
        name,
        price,
        image,
      },
    });

    // Home page ko refresh karne ke liye taake naya maal nazar aaye
    revalidatePath("/"); 
    return { success: true };
  } catch (error) {
    console.error("Neon DB Error:", error);
    return { success: false };
  }
}