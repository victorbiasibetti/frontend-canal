import React, { useEffect, useState } from 'react';
import api from './services/api'

function App() {
  const [data, setData] = useState('');


  useEffect(() => {
    const loadData = async () => {
      const response = await api.get('/')
      setData(response.data.msg)
    }
    loadData();
  }, [])

  return (
    <div>
      <h1>{data}</h1>      
    </div>
  );
}

export default App;
