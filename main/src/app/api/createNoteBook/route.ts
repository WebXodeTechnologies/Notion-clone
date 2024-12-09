import { generateImagePrompt } from "@/lib/openai";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Validate Clerk authentication
    const { userId } = await auth();
    if (!userId) {
      console.error('User is not authenticated');
      return new NextResponse('Unauthorized', { status: 401 });
    }
    // Parse request body
    const body = await req.json();
    const { name } = body;
    console.log('Creating notebook with name:', name);
    // Generate image description prompt based on the name
    const image_description = await generateImagePrompt(name);
    console.log('Generated image description:', image_description);
    // You can perform other actions like saving the notebook in a database here
    // Respond with a success message
    return new NextResponse('ok');
  } catch (error) {
    console.log("Error creating notebook:", error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
