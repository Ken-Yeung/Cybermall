import TestButton from "./components/testButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-6">
      <h1>Hello World</h1>
      {/* <a href="/next" className="text-blue-300 underline">Next Page</a> */}
      <TestButton />
    </main>
  );
}
