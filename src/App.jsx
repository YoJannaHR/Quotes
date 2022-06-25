import quotes from "./quotes.json";
import { useState } from "react";
import "./App.css";
import Container from "./components/Container";

function App() {
  const randomPhrases = Math.floor(Math.random() * quotes.length);

  const [index, setIndex] = useState(randomPhrases);

  const random = Math.floor(Math.random() * quotes.length);
  let colors = `hsl(${random}, 100%, 31%)`;
  const [color, setColor] = useState(colors);

  const change = () => {
    const random = Math.floor(Math.random() * quotes.length);
    let colors = `hsl(${random}, 100%, 31%)`;
    setColor(colors);

    const randomPhrases = Math.floor(Math.random() * quotes.length);

    setIndex(randomPhrases);
  };

  return (
    <>
      <Container
        color={color}
        phrases={quotes[index].quote}
        author={quotes[index].author}
        change={change}
      />
    </>
  );
}

export default App;
