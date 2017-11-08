import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

const makeScale = (size, domain) => d3.scaleLinear()
  .range([0, size])
  .domain([0, domain]);

// const seedVals = Array(...[100]).map(Function.call, Math.random);

class Interference extends Component {
  constructor(props) {
    super(props);
    this.target = '#graph';
    this.padding = 0;
    this.w = this.props.width;
    this.h = this.props.height;
    this.elems = [];
    this.currentoffset = 0;
    this.direction = 1;
    this.points = 50;
  }

  componentDidMount() {
    const dotgraph = d3.select(this.target).append('svg')
      .attr('height', this.h)
      .attr('width', this.w)
      .append('g');

    const xscale = makeScale(this.w, (this.points - 1));

    const linefunc = d3
      .line()
      .x((d, i) => xscale(i))
      .y(d => d.cumulative)
      .curve(d3.curveBundle.beta(0.5));

    let { direction } = this;
    const { elems } = this;

    const shuffle = (a) => {
      for (let i = a.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
    };

    const appendGroup = () => {
      const seeder = (elem, idx) => {
        let seed;
        if (elems.length === 0) {
          seed = 20 * Math.random();
        } else {
          seed = Math.random();
        }

        const offset = Math.floor(0.02 * this.h * seed);
        const midline = 0.5 * this.h;
        let cumulative;
        switch (elems.length) {
          case 0:
            cumulative = (midline - (0.02 * 10 * this.h)) + offset;
            break;
          case 1:
            cumulative = elems[0].pathspec[idx].cumulative - offset;
            break;
          case 3:
            cumulative = elems[0].pathspec[idx].cumulative + offset;
            break;
          default:
            cumulative = elems[(elems.length - 2)].pathspec[idx].cumulative +
            (((2 * (elems.length % 2)) - 1) * offset);
        }

        return {
          seed,
          offset,
          cumulative,
        };
      };

      const l = dotgraph
        .selectAll('.sparkline').data(elems, d => d.id);

      if (direction === -1) {
        elems.shift();
        if (elems.length === 0) {
          direction = 1;
        }
      } else {
        const seedVal = [...new Array(this.points)].map(seeder);
        elems.push({ pathspec: seedVal, id: Date.now() });
        if (seedVal[0].cumulative > 0.7 * this.h) {
          shuffle(elems);
          direction = -1;
        }
      }

      l
        .enter()
        .append('path')
        .attr('id', d => d.id)
        .attr('d', d => linefunc(d.pathspec))
        .attr('class', 'sparkline')
        .attr('fill', 'none')
        .attr('stroke', '#E24ADF')
        .attr('stroke-width', '.5')
        .attr('stroke-opacity', 0)
        .transition()
        .duration(700)
        .attr('stroke-opacity', 0.5);

      l
        .exit()
        .attr('stroke', '#4A90E2')
        .transition()
        .duration(500)
        .attr('stroke-opacity', 0)
        .remove();
    };

    d3.interval(appendGroup, 2000);
  }

  render() {
    return (<div id="graph" />);
  }
}

Interference.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Interference;
