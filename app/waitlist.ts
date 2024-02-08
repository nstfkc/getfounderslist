"use server";
import { sql } from "@vercel/postgres";

type State = {
  state: "idle" | "failed" | "succeeded";
  message: string;
};

export async function createWaitlistEntry(
  _: any,
  formData: FormData
): Promise<State> {
  const email = formData.get("email")?.toString()!;

  // create table if not exists
  await sql`CREATE TABLE IF NOT EXISTS founders_waitlist (
    email TEXT PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
  )`;

  // check if email already exists
  const emailExists = await sql`
    SELECT email FROM founders_waitlist WHERE email = ${email}
  `;

  if (emailExists.rows.length) {
    return {
      state: "succeeded",
      message:
        "You have been added to the waitlist! We will notify you when we are ready to launch.",
    };
  }

  try {
    await sql`INSERT INTO founders_waitlist (email) VALUES (${email})`;
    return {
      state: "succeeded",
      message:
        "You have been added to the waitlist! We will notify you when we are ready to launch.",
    };
  } catch (err) {
    console.log(err);
    return {
      state: "failed",
      message: "Something went wrong, please try again later.",
    };
  }
}
