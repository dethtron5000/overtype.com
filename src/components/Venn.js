import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import './Venn.css';

const makeScale = (size, domain) => d3.scaleLinear()
  .range([0, size])
  .domain([0, domain]);

// const seedVals = Array(...[100]).map(Function.call, Math.random);

class Venn extends Component {
  constructor(props) {
    super(props);
    this.target = 'venn';
    this.padding = 0;
    this.w = 0;
    this.h = 0;
    this.elems = [
      ['Product & Design'],
      ['Technology'],
      ['Organizations & Systems'],
    ];
  }

  componentDidMount() {
    this.w = document.getElementById(this.target)
              .parentElement.clientWidth;

    this.h = this.w;

    const dotgraph = d3.select(`#${this.target}`).append('svg')
      .attr('height', Math.floor(0.8 * this.h))
      .attr('width', this.w)
      .append('g');

    const radscale = makeScale(2 * Math.PI, this.elems.length);
    const halfscale = d3.scaleLinear()
      .range([Math.PI / 2, 3 * Math.PI / 2])
      .domain([0, this.elems.length]);

    dotgraph
      .selectAll('circle .lg')
      .data(this.elems)
      .enter()
        .append('circle')
        .attr('cx', (d, i) => (Math.cos(radscale(i)) * (this.w / 7)) + this.w / 3)
        .attr('cy', (d, i) => (Math.sin(radscale(i)) * (this.w / 7)) + this.w / 3)
        .attr('r', (this.w / 5))
        .attr('class', 'blender lg');

    dotgraph
      .selectAll('circle .sm-circle')
      .data(this.elems)
      .enter()
        .append('circle')
        .attr('cx', (d, i) => (Math.cos(radscale(i)) * (this.w / 7)) + this.w / 3)
        .attr('cy', (d, i) => (Math.sin(radscale(i)) * (this.w / 7)) + this.w / 3)
        .attr('r', 5)
        .attr('class', 'sm-circle');

    dotgraph
      .selectAll('text')
      .data(this.elems)
      .enter()
        .append('text')
        .attr('x', (d, i) => (Math.cos(radscale(i)) * (this.w / 7)) + this.w / 1.8 + 5)
        .attr('y', (d, i) => (Math.sin(radscale(i)) * (this.w / 3)) + this.w / 3 + 5)
        .attr('class', 'venn-text')
        .attr('id', (d, i) => `textblock-${i}`)
        .text(d => d);

    dotgraph
      .selectAll('line')
      .data(this.elems)
      .enter()
        .append('line')
        .attr('x1', (d, i) => (Math.cos(radscale(i)) * this.w / 7 + this.w / 3))
        .attr('y1', (d, i) => (Math.sin(radscale(i)) * this.w / 7 + this.w / 3))
        .attr('y2', (d, i) => (Math.sin(radscale(i)) * (this.w / 3)) + this.w / 3)
        .attr('x2', (d, i) => (Math.cos(radscale(i)) * (this.w / 7)) + this.w / 1.8)
        .attr('class', 'guideline');

  }

  render() {
    return (<div id="venn" />);
  }
}

Venn.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Venn;
