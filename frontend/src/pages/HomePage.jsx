import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

function HomePage() {
  const [healthStatus, setHealthStatus] = useState(null);
  const [helloMessage, setHelloMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [health, hello] = await Promise.all([
          apiService.healthCheck(),
          apiService.getHello()
        ]);
        setHealthStatus(health);
        setHelloMessage(hello);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <h2>Error connecting to backend</h2>
        <p>{error}</p>
        <p>Make sure the backend server is running on port 3001</p>
      </div>
    );
  }

  return (
    <div className="home-page">
      <h1>Welcome to Coding Agent Test</h1>
      
      <div className="api-status">
        <h2>Backend Status</h2>
        {healthStatus && (
          <div className="status-card">
            <h3>Health Check</h3>
            <p><strong>Status:</strong> {healthStatus.status}</p>
            <p><strong>Message:</strong> {healthStatus.message}</p>
            <p><strong>Timestamp:</strong> {healthStatus.timestamp}</p>
          </div>
        )}
        
        {helloMessage && (
          <div className="status-card">
            <h3>API Response</h3>
            <p>{helloMessage.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;