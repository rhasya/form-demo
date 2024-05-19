"use client";

import { useActionState } from "react";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submit } from "@/lib/service";

interface FormState {
  message?: string;
}

const initialState: FormState = {
  message: ''
};

export default function Form4() {
  const [state, doAction, pending] = useActionState(handleSubmit, {...initialState});
  const { message } = state;

  async function handleSubmit(prevState: FormState, formData: FormData) {
    const inputData = Object.fromEntries(formData) as { username: string; password: string; };
    const res = await submit(inputData);
    return { message: res.message };
  }

  return (
    <>
      <form className="w-[480px] m-auto flex flex-col gap-4" action={doAction}>
        <h2 className="text-xl font-bold text-center">Login(4)</h2>
        <Input
          type="text"
          placeholder="Username"
          name="username"
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
        />
        <Button type="submit" disabled={pending}>
          {pending && <Loader2 className="w-[20px] h-[20px] animate-spin mr-4"/>}Submit
        </Button>
      </form>
      <div className="w-[480px] m-auto mt-8">
        {message && <p className="text-red-700">{message}</p>}
      </div>
    </>
  )
}