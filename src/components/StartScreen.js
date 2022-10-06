import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Qual é a palavra?</h1>
      <p>Clique no botão para iniciar!</p>
      <button onClick={startGame}>Começar</button>
    </div>
  );
};

export default StartScreen;
