import { useState } from 'react';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { HomePage } from './pages/home/HomePage';
import { RecipesPage } from './pages/recipes/RecipesPage';
import { NewsPage } from './pages/news/NewsPage';
import { AboutPage } from './pages/about/AboutPage';
import { FeedBackPage } from './pages/feedback/FeedBackPage';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'recipes':
        return <RecipesPage />;
      case 'news':
        return <NewsPage />;
      case 'about':
        return <AboutPage />;
      case 'feedback':
        return <FeedBackPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <Header currentPage={page} onNavigate={setPage} />
      <main className="app-main">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
