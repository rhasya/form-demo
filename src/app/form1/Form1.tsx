"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submit } from "@/lib/service";
import {Loader2} from "lucide-react";

export default function Form1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<string|undefined>('');

  async function handleSubmit() {
    setPending(true);
    try {
      const res = await submit({username, password});
      setMessage(res.message);
    } finally {
      setPending(false);
    }

    setUsername("");
    setPassword("");
  }

  return (
    <>
      <div className="w-[480px] m-auto flex flex-col gap-4">
        <h2 className="text-xl font-bold text-center">Login(1)</h2>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="button" onClick={handleSubmit} disabled={pending}>
          {pending && <Loader2 className="w-[20px] h-[20px] animate-spin mr-4"/>}Submit
        </Button>
      </div>
      <div className="w-[480px] m-auto mt-8">
        {message && <p className="text-red-700">{message}</p>}
      </div>
    </>
  )
}