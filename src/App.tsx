import { useState } from "react";
import { Dialog } from "./components";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>
    </main>
  );
}

export default App;
