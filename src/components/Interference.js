import {useState,useEffect} from 'react';
import * as d3 from 'd3';
import './Interference.css'

const makeScale = (size, domain) =>
  d3.scaleLinear().range([0, size]).domain([0, domain]);



function Interference({width = 0, height=0}) {

  const w = width;
  const h = height;

  const points = 50;
  
  const offset = .25* height;

  const xscale = makeScale(w, points - 1);

  const yscale = d3.scaleLinear([0,40],[0,h])

  // line generator with default functions
  const linefunc = d3
    .line()
    .x((d, i) => xscale(i))
    .y((d) => yscale(d.cumulative))
    .curve(d3.curveBundle.beta(0.5));


  const [elems, setElems] = useState([]);
  const [direction, setDirection] = useState(1);


  const appendLine = (lines) => {
    const seeder = (element, idx) => {
      const seed = lines.length === 0 ? 20 * Math.random() : Math.random();
      
      const offset = seed
      let cumulative;
      switch (lines.length) {
        case 0: {
          cumulative = 0.02 * 10 + offset;
          break;
        }

        case 1: {
          cumulative = lines[0].pathspec[idx].cumulative - offset;
          break;
        }

        case 3: {
          cumulative = lines[0].pathspec[idx].cumulative + offset;
          break;
        }

        default: {
          cumulative =
            lines.at(-2).pathspec[idx].cumulative +
							(2 * (lines.length % 2) - 1) * offset;
        }
      }

      return {
        seed,
        offset,
        cumulative,
      };
    };

    const seedValue = Array.from({length: points}).map((element, idx) =>
      seeder(element, idx),
    );
    const out = [...lines,{pathspec: seedValue, id: `${lines.length}-${Date.now()}`, className: 'sparkline'}]
    return out
  };


  const removeLine = (lines) => {
    const fil = lines.filter((elem) => {
      return elem.className !== 'sparkline-fadeout'})
    return fil
    // return lines
  }

  const markLine = (lines) => {
    if(lines.length === 0) {
      return [];
    }

    const ext = Math.floor(Math.random()*lines.length)

    console.log(ext,lines[ext]);

    const newelem = lines[ext]
    newelem.className = 'sparkline-fadeout' 

    setTimeout(
      () => {
        setElems(removeLine)
      }, 500
    )

    return lines.with(ext,newelem)
  }

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      if(direction === 1) {
        setElems(appendLine)
        if(elems.length > 20) {
          setDirection(-1)
        }
      } else {
        setElems(markLine)
        if(elems.length === 0) {
          setDirection(1)
        }
      }
    }, 2000); 

    return () => {
      clearInterval(intervalId);
    };
  }, [width,height,direction,elems]);


  return (
    <svg id="mainsvg" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMinYMin meet">
      <g transform={`translate(0,${offset})`}>
        {elems.map(({pathspec,id,className}) => (
          <path
            key={id}
            id={id}
            className={className}
            fill="none"
            stroke="#E24ADF"
            strokeWidth=".5"
            d={linefunc(pathspec)}
          />
        ))}
      </g>
    </svg>
  );
}


export default Interference;
