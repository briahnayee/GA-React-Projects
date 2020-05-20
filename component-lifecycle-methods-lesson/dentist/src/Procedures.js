import React from 'react';
import { Link } from 'react-router-dom';

const Procedures = (props) => {
  return (
    <div>
      <h1>Procedures</h1>
      <p>Here at the Dentist Office we provide a wide variety of procedures.</p>
      <p>We accept all sorts of insurance and have competitve uninsured payment plans. Find the service you need and visit our contact page to find out how to reach out to us to make the appointment you need!</p>
      <ul>
        {
          props.procedures.map( (p, i) =>
            <li key={i}>
              <Link to={`/procedures/${i}`}>{p.title}</Link>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default Procedures;