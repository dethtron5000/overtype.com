import React from 'react';
import PropTypes from 'prop-types';
import './Speaking.css';

const groups = {};

const list = [
  {
    d: 'April 2013',
    title: 'Lightning Talk',
    venue: 'Data Science Meetup at Meetup',
    location: 'New York, New York',
    topic: 'modeling and ontology',
  },
  {
    d: 'May 2013',
    title: 'Ignite!',
    venue: 'Google IO',
    location: 'San Francisco, California',
    topic: 'modeling and ontology',
  },
  {
    d: 'August 2013',
    title: 'Solving Fictional Problems with NoSQL',
    venue: 'NoSQL Now!',
    location: 'San Jose, California',
    link: 'https://www.youtube.com/watch?v=ls679nb5rQ8&t=261s',
    topic: 'modeling and ontology',
  },
  {
    d: 'October 2013',
    title: 'Taming Galactus: How Marvel Uses Graph Theory and NoSQL to Understand its Fictional Universe',
    link: 'https://livestream.com/hugeinc/events/2474611',
    venue: 'Tech Talks at Huge',
    location: 'Brooklyn, New York',
    topic: 'graphs and graph theory',
  },
  {
    d: 'October 2013',
    title: 'Graph Theory at Marvel',
    venue: 'New York Graph Meetup',
    location: 'New York, New York',
    topic: 'graphs and graph theory',
  },
  {
    d: 'November 2013',
    title: 'Graphing the Marvel Universe',
    venue: 'GraphConnect',
    location: 'New York, New York',
    topic: 'graphs and graph theory',
  },
  {
    d: 'February 2014',
    title: 'Telling Stories with Data from Stories',
    venue: 'Visualized',
    location: 'New York, New York',
    topic: 'storytelling and visualization',
  },
  {
    d: 'April 2014',
    title: 'Heroes and Villains and Data',
    venue: 'Enterprise Data World',
    location: 'Austin, Texas',
    topic: 'modeling and ontology',
  },
  {
    d: 'March 2015',
    title: 'Stories in the Age of Data/Data in the Age of Story',
    venue: 'Wentworth Institute of Technology Digital Humanities Colloquium',
    location: 'Boston, Massachusetts',
    topic: 'storytelling and visualization',
  },
  {
    d: 'April 2015',
    title: 'The Data Experience',
    venue: 'CDO Vision',
    location: 'Washington, DC',
    topic: 'data experiences',
  },
  {
    d: 'March 2016',
    title: 'Design and Technology for Humans (and Super-Humans)',
    venue: 'NYU Tandon Grand Colloquium',
    location: 'Brooklyn, New York',
    topic: 'careers in design and technology',
  },
  {
    d: 'June 2016',
    title: 'Human-Centered Design/Human-Centered Data',
    venue: 'Northside Innovation Festival',
    location: 'Brooklyn, New York',
    topic: 'data experiences',
  },
  {
    d: 'July 2016',
    title: 'Data, Design and Humans',
    venue: 'Analytics Powering Outcomes for Veterans Summit',
    location: 'Alexandria, Virginia',
    topic: 'data and organizational purpose',
  },
  {
    d: 'October 2016',
    title: 'Graph Theory for Designers',
    venue: 'IDEO+ Orientation Day',
    location: 'New York, New York',
    topic: 'graphs and graph theory',
  },
  {
    d: 'September 2016',
    title: 'Data + Design + Organizations',
    venue: 'O\'Reily Strata',
    location: 'New York, New York',
    topic: 'data and organizational purpose',
  },
  {
    d: 'October 2016',
    title: 'Resilience by Design',
    venue: 'CNYCN Affordable Homeownership Summit',
    location: 'New York, New York',
    topic: 'design for resiliency and advocacy',
  },
  {
    d: 'October 2016',
    title: 'Careers in Design and Technology',
    venue: 'Wesleyan University Kai Entrepreneurship Speaker Series',
    location: 'Middletown, Connecticut',
    topic: 'careers in design and technology',
  },
  {
    d: 'August 2017',
    title: 'Your Purpose is in Your Data',
    venue: 'New Haven Data Science Meetup',
    location: 'New Haven, Connecticut',
    topic: 'data and organizational purpose',
  },
  {
    d: 'October 2017',
    title: 'Designing Resilient Communities',
    venue: 'EcoDistricts Summit 2017',
    location: 'Atlanta, Georgia',
    topic: 'design for resiliency and advocacy',
  },
  {
    d: 'October 2017',
    title: 'Data and Advocacy',
    venue: 'CNYCN Affordable Homeownership Summit',
    location: 'New York, New York',
    topic: 'design for resiliency and advocacy',
  },
];

const reducer = (topics, item) => {
  if (typeof topics[item.topic] === 'undefined') {
    topics[item.topic] = {
      topic: item.topic,
      entries: [item],
    };
  } else {
    topics[item.topic].entries.push(item);
  }

  return topics;
};

const rev = list.reverse().reduce(reducer, groups);
console.log(Object.keys(rev));

const HeadingText = (props) => {
  const linked = (typeof (props.link) !== 'undefined');
  if (linked) {
    return (<a href={props.link}>{props.title}</a>);
  }

  return props.title;
};

const SpeakingTopic = (props) => (
  <section>
    <h3>{props.topic}</h3>
    {
      props.entries.map(item => (
        <div className="speaking-item">
          <time>{item.d}</time>
          <h4>
            <HeadingText title={item.title} link={item.link} key={item.title} />
          </h4>

          <div>{item.venue}</div>
          <div>{item.location}</div>
        </div>
        )
      )
    }
  </section>
);

const Speaking = () => (
  <div className="speaking">
    {
      Object.keys(rev).map(key => {
        const item = rev[key];
        return (<SpeakingTopic topic={item.topic} entries={item.entries} />);
      })
    }
  </div>
);

const SpeakingItem = PropTypes.shape({
  d: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  venue: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
});
SpeakingItem.defaultProps = {
  link: undefined,
};

HeadingText.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
};
HeadingText.defaultProps = { link: undefined };

SpeakingTopic.propTypes = {
  topic: PropTypes.string.isRequired,
  entries: PropTypes.arrayOf(
    SpeakingItem
  ).isRequired,
};



export default Speaking;
