import React from 'react';

const News = () => {
  const newsItems = [
    {
      date: '6 October 2024',
      source: 'SIRC',
      title: 'Saudi Arabia draws a map for recycling and exporting chips...',
      link: 'https://shorturl.at/ZRHBu',
      description: 'Saudi Arabia is accelerating its steps to enhance the recycling industry...'
    },
    {
      date: '7 October 2024',
      source: 'Ministry of Environment',
      title: 'Saudi Arabia plans to recycle 95% of waste...',
      link: 'https://shorturl.at/0pm7J',
      description: 'The Saudi Ministry of Environment revealed a plan to recycle 95% of waste...'
    },
  ];

  return (
    <div className="news-section py-8">
      <h2 className="text-3xl text-center font-bold text-green-700 mb-6">Latest News</h2>
      <div className="flex justify-center flex-wrap gap-8">
        {newsItems.map((news, index) => (
          <div
            key={index}
            className="news-box bg-opacity-60 bg-black p-4 rounded-lg shadow-lg max-w-xs text-white"
          >
            <span className="text-green-300 text-sm">{news.date} / {news.source}</span>
            <h3 className="text-lg font-bold mt-2">{news.title}</h3>
            <p className="text-gray-300 mt-2">{news.description}</p>
            <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-green-300 mt-4 inline-block hover:text-green-500">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
