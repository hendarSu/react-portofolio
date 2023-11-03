import React, { useEffect, useState } from 'react';
import projectData from '@/utils/project.json';
import FeatureItem from './FeatureItem';

export default function ProjectSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredBooks = projectData.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredBooks);
  };

  useEffect(() => {
    setResults(projectData);
  }, [])

  return (
    <div>
      <div className="row mb-5">
        <div className='col-auto'>
          <input
            className='form-control'
            type="text"
            placeholder="Cari buku"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className='btn btn-primary' onClick={handleSearch}>Cari</button>
        </div>
      </div>

      <div className="row mb-5">
        {results.map((book, index) => (
          <div className="col-md-3" key={index}>
              <FeatureItem/>
          </div>
        ))}
      </div>
    </div>
  );
}