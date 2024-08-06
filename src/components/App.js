{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}

import React from 'react';
import Review from './Review';

const App = () => {
  return (
    <section className="container">
      <h2 id="review-heading">Our Reviews</h2>
      <main>
        <Review />
      </main>
    </section>
  )
}

export default App

