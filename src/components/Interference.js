import {useEffect} from 'react';
import * as d3 from 'd3';

const makeScale = (size, domain) =>
  d3.scaleLinear().range([0, size]).domain([0, domain]);

function Interference({width, height}) {
  const target = '#graph';
  const w = width;
  const h = height;

  // These don't need to be state since d3 will manage them directly
  const points = 50;

  useEffect(() => {
    console.log('mounting svg');

    const dotgraph = d3
      .select(target)
      .append('svg')
      .attr('height', h)
      .attr('id', 'mainsvg')
      .attr('width', w)
      .append('g');

    const xscale = makeScale(w, points - 1);

    const linefunc = d3
      .line()
      .x((d, i) => xscale(i))
      .y((d) => d.cumulative)
      .curve(d3.curveBundle.beta(0.5));

    let direction = 1;
    const elems = [];

    const shuffle = (a) => {
      const z = a;
      for (let i = z.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [z[i], z[j]] = [z[j], z[i]];
      }
    };

    const appendGroup = () => {
      const seeder = (element, idx) => {
        const seed = elems.length === 0 ? 20 * Math.random() : Math.random();

        const offset = Math.floor(0.02 * h * seed);
        const midline = 0.5 * h;
        let cumulative;
        switch (elems.length) {
          case 0: {
            cumulative = midline - 0.02 * 10 * h + offset;
            break;
          }

          case 1: {
            cumulative = elems[0].pathspec[idx].cumulative - offset;
            break;
          }

          case 3: {
            cumulative = elems[0].pathspec[idx].cumulative + offset;
            break;
          }

          default: {
            console.log(elems);
            console.log(typeof elems);
            cumulative =
              elems.at(-2).pathspec[idx].cumulative +
							(2 * (elems.length % 2) - 1) * offset;
          }
        }

        return {
          seed,
          offset,
          cumulative,
        };
      };

      const l = dotgraph.selectAll('.sparkline').data(elems, (d) => d.id);

      if (direction === -1) {
        elems.shift();
        if (elems.length === 0) {
          direction = 1;
        }
      } else {
        const seedValue = Array.from({length: points}).map((element, idx) =>
          seeder(element, idx),
        );
        elems.push({pathspec: seedValue, id: Date.now()});
        if (seedValue[0].cumulative > 0.7 * h) {
          shuffle(elems);
          direction = -1;
        }
      }

      l.enter()
        .append('path')
        .attr('id', (d) => d.id)
        .attr('d', (d) => linefunc(d.pathspec))
        .attr('class', 'sparkline')
        .attr('fill', 'none')
        .attr('stroke', '#E24ADF')
        .attr('stroke-width', '.5')
        .attr('stroke-opacity', 0)
        .transition()
        .duration(700)
        .attr('stroke-opacity', 0.8);

      l.exit()
        .attr('stroke', '#4A90E2')
        .transition()
        .duration(500)
        .attr('stroke-opacity', 0)
        .remove();
    };

    const intval = d3.interval(appendGroup, 2000);
    return () => {
      console.log('unmounting');
      intval.stop();

      d3.select('#mainsvg').remove();
    };
  }, [w, h]);

  return <div id="graph" />;
}


export default Interference;
