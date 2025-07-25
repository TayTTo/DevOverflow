import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Hello, start Next.js here (This is inter font)</h1>
      <h1 className="font-space-grotesk">Hello, start Next.js here (This is inter font)</h1>
      <h1>Brur, lmao</h1>
      <h1 className="font-space-grotesk">This is Gros_tesk font</h1>
      <Image src="/images/auth-dark.png" alt="Hi" width={20} height={20}/>
    </>
  );
}
