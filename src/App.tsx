import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";

function App() {
  return (
    <Layout>
      <Header />
      <Editor />
      <Preview />
    </Layout>
  );
}

export default App;
