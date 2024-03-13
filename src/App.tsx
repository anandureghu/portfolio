import AppRouter from "./main/container/AppRouter";
import AppLayout from "./main/container/Layout/AppLayout";

function App() {
  return (
    <>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </>
  );
}

export default App;
