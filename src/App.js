import axios from 'axios';
import { useEffect , useState} from 'react';

function App() {

  const [news,setNews] = useState([])

useEffect(()=>{
fetchweather();
},[])


const  fetchweather = async ()=>{

  const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-12-08&sortBy=publishedAt&apiKey=6cde0e1305da46d19f6443ca5f509255');
  const articles = response.data.articles;
  console.log(articles,"news");
  setNews(articles);
}

  return (
    <div className='text-[24px] font-bold text-gray-600 text-center'>
      Latest News
    <div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {news.length > 0 ? (
          news.map((article, index) => (

            
            <div
              key={index}
              className="mb-6 p-4 border-b border-gray-200 shadow-md rounded-lg"
            >
              <img className='min-w-32 max-w-36' src={article.urlToImage} alt='media_image' />

              <h2 className="text-xl font-semibold text-blue-600 text-left">{article.title}</h2>
              <p className="text-gray-400 mt-2 text-sm text-left">{article.description}</p>

              <p className='text-left'>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-4 text-[10px]"
              >
                Read more
              </a>
                </p>
            </div>
          
          
          ))
        ) : (
          <p className="text-center text-gray-500">Loading news...</p>
        )}
      </div>
   
    </div>

    </div>
  );
}

export default App;
