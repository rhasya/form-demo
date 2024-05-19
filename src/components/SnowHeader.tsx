import Link from "next/link";

export default function SnowHeader() {
  return (
    <header className="container h-[60px] flex items-center gap-4">
      <h1 className="text-2xl font-bold">
        <Link href="/">FormDemo</Link>
      </h1>
      <ul className="flex items-center gap-4">
        <li><Link href="/form1">Form1</Link></li>
        <li><Link href="/form2">Form2</Link></li>
        <li><Link href="/form3">Form3</Link></li>
        <li><Link href="/form4">Form4</Link></li>
      </ul>
    </header>
  );
}