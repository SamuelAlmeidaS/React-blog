import { useState, useEffect } from 'react';
import { Header } from '../src/components/header/index';
import style from './App.module.css';
import { Post } from './components/posts';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadingPosts()
  }, []);

  const loadingPosts = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    setPosts(json);
  }

  return (
    <main>
      <Header />
      <div className={style.container} >
        {posts.map((item, index) => (
          <Post 
          key={index} 
          date='02 de jan, 2023' 
          title={item.title} 
          body={item.body} 
          >

          </Post>
        ))}
      </div>
    </main>
  );
}

export default App
