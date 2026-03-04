import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// 1. Dashboard par product list dikhane ke liye
export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  });
  return NextResponse.json(products);
}

// 2. Quick Edit ko save karne ke liye (PUT)
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, name, price } = body;

    const updatedProduct = await prisma.product.update({
      where: { id: id },
      data: {
        name: name,
        price: parseInt(price), 
      },
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    return NextResponse.json({ error: "Update fail ho gaya" }, { status: 500 });
  }
}

// ✅ 3. DELETE Function (Maine ye add kar diya hai)
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID missing hai" }, { status: 400 });
    }

    await prisma.product.delete({
      where: { id: id },
    });

    return NextResponse.json({ message: "Product delete ho gayi!" });
  } catch (error) {
    console.error("Delete API Error:", error);
    return NextResponse.json({ error: "Delete fail ho gaya. Shayad ID galat hai." }, { status: 500 });
  }
}