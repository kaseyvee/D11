import LandingPage from "./pages/LandingPage";
import { ContentfulClient, ContentfulProvider } from 'react-contentful';

const contentfulClient = new ContentfulClient({
  accessToken: "003LiaQKZbPsUB9otZEjfXNE1q2NSbu4pp8SUiQKUAE",
  space: "v9b7yte4wy9l",
});

function App() {
  return (
    <ContentfulProvider client={contentfulClient}>
      <div className="App">
        <LandingPage />
      </div>
    </ContentfulProvider>
  );
}

export default App;
