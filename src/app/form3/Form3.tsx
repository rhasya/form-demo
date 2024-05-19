import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submit } from "@/lib/service";

export default function Form3() {
  async function doAction(formData: FormData) {
    "use server";

    const inputData = Object.fromEntries(formData) as { username: string; password: string; };
    const res = await submit(inputData);

    console.log(res.message);
  }

  return (
    <>
      <form className="w-[480px] m-auto flex flex-col gap-4" action={doAction}>
        <h2 className="text-xl font-bold text-center">Login(3)</h2>
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
        <Button type="submit">Submit</Button>
      </form>
    </>
  )
}