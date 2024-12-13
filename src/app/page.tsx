import Hello from "./components/hello";

export default function Home() {
  console.log("WHich component am I?")
  return (
    <>
      <h1 className="font-bold text-3xl">Welcome to NextJS</h1>
      <Hello />
    </>
  );
}
