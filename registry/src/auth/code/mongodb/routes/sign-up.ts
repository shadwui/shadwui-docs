import bcrypt from "bcryptjs";
import dbConnect from "@/registry/src/auth/code/mongodb/lib/db-connect";
import UserModel from "@/registry/src/auth/code/mongodb/model/user";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { username, email, password } = await request.json();

    const existingUserByEmail = await UserModel.findOne({
      email,
    });

    if (existingUserByEmail) {
      return Response.json(
        {
          success: false,
          message: "User already exist with this email.",
        },
        { status: 300 }
      );
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        role: "user",
      });

      await newUser.save();
    }

    return Response.json(
      {
        success: true,
        message: "user Register successfully verify your email",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error while registering user ", error);
    return Response.json(
      {
        success: false,
        message: "Error registering user",
      },
      {
        status: 500,
      }
    );
  }
}
