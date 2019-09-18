import React from 'react';

class Projects extends React.Component {
  render() {
    return (
    <div>
      <article>
        <h3>Projects</h3>
        <section>
          <h4>QuickBite</h4>
          <div>Application allowing users to check reviews for restaurant deliveries</div>
          <ul>
            <li>
              Horizontally scaled and deployed microservice backend to handle 2200 RPS with an average latency of 60ms utilizing
              an Nginx load balancer and 3 express servers
            </li>
            <li>
              Tested server under load using k-6 testing and analyzed RPS and latency with newRelic software
            </li>
            <li>
              Generated and Seeded 30 million data points for MongoDB and Postgres to determine optimal database for
              microservice
            </li>
          </ul>
        </section>
        <section>
          <h4>Lazy Lodging</h4>
          <div>Application allowing users to view homes to rent modeled after Airbnb</div>
          <ul>
            <li>
              Designed photo stream component with React in order to render user uploaded photos
            </li>
            <li>
              Utilized React Inline styling to avoid styling conflicts with other microservices
            </li>
            <li>
              Created MySQL database and utilized AWS S3 to persist user uploaded images
            </li>
            <li>
              Deployed a microservice with Docker and AWS EC2 to reduce coupling with teams development environment
            </li>
          </ul>
        </section>
        <section>
          <h4>The Perfect Cup</h4>
          <div>Website for users who want to brew their own coffee</div>
          <ul>
            <li>
              Designed front-end using React components
            </li>
            <li>
              Implemented RESTful API routes with Express.js and MongoDB
            </li>
          </ul>
        </section>
      </article>
    </div>
    )
  }
}

export default Projects;