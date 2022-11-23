import Comments from "./comments/Comments";

function App() {
  return (
    <div>
      <h1>Tous les commentaires</h1>
      <Comments currentUserId="1" />
    </div>
  );
}

export default App;
