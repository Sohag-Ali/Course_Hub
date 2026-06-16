import { dbConnect, collections } from "@/lib/dbConnect";

export async function GET() {
  try {
    const courseCollection = await dbConnect(
      collections.COURSES
    );

    const data = await courseCollection
      .find({})
      .toArray();

    return Response.json(data);
  } catch (error) {
    console.error("ERROR =>", error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}