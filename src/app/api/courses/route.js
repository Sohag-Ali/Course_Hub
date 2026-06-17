import { dbConnect, collections } from "@/lib/dbConnect";



import { ObjectId } from "mongodb";

export async function DELETE(
  req,
  { params }
) {
  try {
    const { id } =
      await params;

    const collection =
      await dbConnect(
        collections.COURSES
      );

    const result =
      await collection.deleteOne(
        {
          _id:
            new ObjectId(
              id
            ),
        }
      );

    return Response.json(
      result
    );
  } catch (error) {
    return Response.json(
      {
        error:
          error.message,
      },
      {
        status: 500,
      }
    );
  }
}



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

export async function POST(req) {
  const body =
    await req.json();

  const collection =
    await dbConnect(
      collections.COURSES
    );

  const result =
    await collection.insertOne(
      body
    );

  return Response.json(
    result
  );
}