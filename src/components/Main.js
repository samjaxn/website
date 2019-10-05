import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Background from './Background'
import logo from '../ghostLogo.svg';

var ROWS,
  COLS,
  NUM_PARTICLES,
  THICKNESS = Math.pow(10, 4),
  SPACING = 5,
  COLOR = 220,
  DRAG = 0.9,
  EASE = 0.2,

  particle,
  list,
  ctx,
  tog,
  man,
  dx,
  dy,
  mx,
  my,
  d,
  t,
  f,
  a,
  b,
  n,
  w,
  h,
  p

particle = {
  vx: 0,
  vy: 0,
  x: 0,
  y: 0
};

const HOOK_SVG =  'm129.03125 63.3125c0-34.914062-28.941406-63.3125-64.519531-63.3125-35.574219 0-64.511719 28.398438-64.511719 63.3125 0 29.488281 20.671875 54.246094 48.511719 61.261719v162.898437c0 53.222656 44.222656 96.527344 98.585937 96.527344h10.316406c54.363282 0 98.585938-43.304688 98.585938-96.527344v-95.640625c0-7.070312-4.640625-13.304687-11.414062-15.328125-6.769532-2.015625-14.082032.625-17.960938 6.535156l-42.328125 64.425782c-4.847656 7.390625-2.800781 17.3125 4.582031 22.167968 7.386719 4.832032 17.304688 2.792969 22.160156-4.585937l12.960938-19.71875v42.144531c0 35.582032-29.863281 64.527344-66.585938 64.527344h-10.316406c-36.714844 0-66.585937-28.945312-66.585937-64.527344v-162.898437c27.847656-7.015625 48.519531-31.773438 48.519531-61.261719zm-97.03125 0c0-17.265625 14.585938-31.3125 32.511719-31.3125 17.929687 0 32.511719 14.046875 32.511719 31.3125 0 17.261719-14.582032 31.3125-32.511719 31.3125-17.925781 0-32.511719-14.050781-32.511719-31.3125zm0 0'
const FILL_PATH = new Path2D(HOOK_SVG)
const SCALE = 0.2;
const OFFSETX = 75;
const OFFSETY = 500;

const draw = () => {
  ctx.fillStyle = 'deepskyblue';
  ctx.shadowColor = 'dodgerblue';
  ctx.shadowBlur = 20;
  ctx.save();
  ctx.scale(0.2, 0.2);
  ctx.translate(w/2, h/2);
  ctx.fill(FILL_PATH);
  ctx.restore();
}


const Main = () => {
    const [locations, setLocations] = React.useState([]);
    const canvasRef = React.useRef(null);
    

    React.useEffect(() => {
        console.log("useEffect");
        /*const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, window.innerHeight, window.innerWidth)
        locations.forEach(location => draw(ctx, location))*/
    })

    const drawLogo = () => {
        ctx.font = "15px Arial";
        ctx.textBaseline = 'middle';
        ctx.textAlign = "center";
        ctx.fillStyle = 'white';
        ctx.fillText("G H O S T   A T E L I E R", w/2, h/2);   
    }

    function init() {
        const canvas = canvasRef.current

        w = canvas.width;
        h = canvas.height;
    
        ctx = canvas.getContext("2d");
        
        man = true;
        tog = true;
    
        list = [];

        ROWS = Math.floor(w/SPACING);
        COLS = Math.floor(h/SPACING);
        NUM_PARTICLES = 0;
    
        for (let i = 0; i < COLS; i++) {
            for (let j = 0; j < ROWS; j++){
                p = Object.create(particle);
                p.x = p.ox = SPACING * j;
                p.y = p.oy = SPACING * i;
    
                list[NUM_PARTICLES] = p;
                NUM_PARTICLES++;
            }
        }
        console.log(ROWS);
        console.log(COLS);
        console.log(list.length);
        console.log(NUM_PARTICLES);
    }
    
    function step() {
    
        if ((tog = !tog)) {
            if (!man) {
            t = +new Date() * 0.001;
            mx = w * 0.5 + Math.cos(t * 2.1) * Math.cos(t * 0.9) * w * 0.45;
            my = h * 0.5 + Math.sin(t * 3.2) * Math.tan(Math.sin(t * 0.8)) * h * 0.45;
            }
    
            for (let i = 0; i < NUM_PARTICLES; i++) {
            p = list[i];
    
            d = (dx = mx - p.x) * dx + (dy = my - p.y) * dy;
            f = -THICKNESS / d;
    
            if (d < THICKNESS) {
                t = Math.atan2(dy, dx);
                p.vx += f * Math.cos(t);
                p.vy += f * Math.sin(t);
            }
    
            p.x += (p.vx *= DRAG) + (p.ox - p.x) * EASE;
            p.y += (p.vy *= DRAG) + (p.oy - p.y) * EASE;
            }
        } 
        else {
            b = (a = ctx.createImageData(w, h)).data;
    
            for (let i = 0; i < NUM_PARTICLES; i++) {
            p = list[i];
            (b[(n = (~~p.x + ~~p.y * w) * 4)] = b[n + 1] = b[n + 2] = COLOR);
            (b[n + 3] = 255);
            }
    
            ctx.putImageData(a, 0, 0);
            drawLogo();
        }
    
        requestAnimationFrame(step);
    }

    const handleMouseAction = (e) => {
        console.log("handleMouseAction");
        console.log(`x: ${e.clientX}, y: ${e.clientY}`)
        mx = e.clientX;
        my = e.clientY;
    }

    //TODO: get init and step to start right away and take off scrolling, make sure the entire canvas covers the screen and get the logo on top of the canvas

    return (
        <>
            <canvas
                ref={canvasRef}
                width={window.innerWidth}
                height={window.innerHeight}
                onClick={e => {init();step();}}
                onMouseMove={e => {handleMouseAction(e)}}
            />
        </>
    )
}

export default Main
