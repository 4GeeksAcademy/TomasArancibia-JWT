import React, { useEffect } from 'react';
import axios from 'axios';
const API_URL = process.env.BACKEND_URL;

function PrivatePage() {
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
    } else {
      axios
        .get(`https://cuddly-disco-jpg4457g7x92pjq4-3001.app.github.dev/api/private`, {
          headers: { Authorization: token },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('There was an error!', error);
          sessionStorage.removeItem('token');
          window.location.href = '/login';
        });
    }
  }, []);

  return <h1>Private Page</h1>;
}

export default PrivatePage;