"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submit } from "@/lib/service";

interface FormState {
  username: string;
  password: string;
}

export default function Form2() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormState>();

  const [result, setResult] = useState('');

  async function onSubmit(state: FormState) {
    const { username, password } = state;
    const res = await submit({ username, password });

    setResult(res.message!);
    reset();
  }

  return (
    <>
      <form className="w-[480px] m-auto flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-bold text-center">Login(2)</h2>
        <Input
          type="text"
          placeholder="Username"
          {...register("username")}
        />
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="w-[20px] h-[20px] animate-spin mr-4"/>}Submit
        </Button>
      </form>
      <div className="w-[480px] m-auto mt-8">
        {result && <p className="text-red-700">{result}</p>}
      </div>
    </>
  )
}