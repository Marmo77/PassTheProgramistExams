import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button className="cursor-pointer active:scale-95 duration-300 ease-in-out hover:scale-105">
        Click me
      </Button>
    </div>
  );
}

export default App;
