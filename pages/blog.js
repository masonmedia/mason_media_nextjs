import React from 'react';
import fetch from 'isomorphic-unfetch';

function Blog(props) {

  console.warn("data",props);

    return (
      <div>
        <h1>Fetch data from API</h1>
      {
        props.data.map(data=>(
          <div>
            <ul>
              <li>Name: {data.name}</li>
              <li>User: {data.username}</li>
              <li>Email: {data.email}</li>
              <li>Address: {data.address.street}</li>
            </ul>
          </div>
        ))
      }

      </div>
    );
  }

  Blog.getInitialProps = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
      data
    }
  }
  
  // This function gets called at build time
  // export async function getStaticProps() {
  //   // Call an external API endpoint to get posts
  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const posts = await res.json()
  
  //   // By returning { props: posts }, the Blog component
  //   // will receive `posts` as a prop at build time
  //   return {
  //     props: {
  //       userId,
  //     },
  //   }
  // }
  
  export default Blog