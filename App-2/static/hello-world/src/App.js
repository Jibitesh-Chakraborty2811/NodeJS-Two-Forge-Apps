import React, { useEffect, useState } from 'react';
import { events, invoke } from '@forge/bridge';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await invoke('getcontents');
        setData(response);
      };
      fetchData();
    }, []);

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
}

export default App;
