import TestButton from "./components/testButton";
import ProductCard from "./components/productCard";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <TestButton />
      <div className="flex gap-4 flex-col">
        <ProductCard />
      </div>
    </>
  );
}
