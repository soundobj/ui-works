import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import './technologies.css';
import _technologies from '../../resources/technologies.json';

const Technology = (technology) => {
    console.error('@ tech', technology);
    return (
      <article className="technologies__technology">
          <section>
              <img className="technologies__technology__logo" src={technology.logo} />
          </section>
      </article>
    );
}

console.error('@ tec', _technologies);
export default function technologies() {
    return (
        <ul className="technologies">
            {_technologies.map((x, i) =>
                <li key={i}>
                    <Technology {...x} />
                </li>
            )}
        </ul>
    );
}