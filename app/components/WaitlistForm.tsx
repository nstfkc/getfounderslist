"use client";

import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

import { createWaitlistEntry } from "../waitlist";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-stone-900 px-4 py-2 h-[42px] text-white rounded-md shadow-md disabled:opacity-50"
    >
      Submit {pending ? "..." : ""}
    </button>
  );
};

export const WaitlistForm = () => {
  const [formState, formAction] = useFormState(createWaitlistEntry, {
    message: "",
    state: "idle",
  });

  if (formState.state === "succeeded") {
    return <div>{formState.message}</div>;
  }

  if (formState.state === "failed") {
    return <div>{formState.message}</div>;
  }

  return (
    <div className="py-4 flex flex-col gap-2">
      <div>Join the waitlist to get early access and 50% off.</div>
      <form action={formAction as any}>
        <div className="flex gap-4 items-end">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              className="bg-stone-100 rounded-md px-2 py-2 border"
              id="email"
              name="email"
              type="email"
              required
            />
          </div>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};
