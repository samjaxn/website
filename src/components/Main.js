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

  initialized = false,
  animation,
  clickable = false,
  particle,
  canvas,
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

const Main = () => {
    const canvasRef = React.useRef(null);

    const updateWindowDimensions = () => {
        //console.log("dimensions changed");
        initialized = false;
        cancelAnimationFrame(animation);
        handleOnClick();
    }

    window.addEventListener('resize', updateWindowDimensions);
    window.addEventListener('orientationchange', updateWindowDimensions);

    const createCanvas = () => {
        canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx = canvas.getContext("2d");
    }

    function init() {
        w = canvas.width;
        h = canvas.height;
        
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
        //console.log(ROWS);
        //console.log(COLS);
        //console.log(list.length);
        //console.log(NUM_PARTICLES);
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
    
        animation = requestAnimationFrame(step);
    }

    const drawLogo = () => {
        ctx.font = "15px Arial";
        ctx.textBaseline = 'middle';
        ctx.textAlign = "center";
        ctx.fillStyle = 'white';
        ctx.fillText("G H O S T   A T E L I E R", w/2, h/2);
    }

    const handleOnClick = (e) => {
        if(!initialized){
            createCanvas();
            init();
            animation = requestAnimationFrame(step);
            initialized = true;
        }
        else{
            //console.log(`x: ${e.clientX}, y: ${e.clientY}`);
            clickableLink();
        }
    }

    const handleMouseAction = (e) => {
        //console.log("handleMouseAction");
        //console.log(`x: ${e.clientX}, y: ${e.clientY}`)
        let x = e.clientX;
        let y = e.clientY;

        let linkWidth = 175;
        let linkX = w/2 - linkWidth/2;
        let linkHeight = 17;
        let linkY = h/2 - linkHeight/2;

        mx = x;
        my = y;

        if(x>=linkX && x <= (linkX + linkWidth) && y>=linkY && y<= (linkY + linkHeight)){
            document.body.style.cursor = "pointer";
            clickable=true;
        }
        else{
            document.body.style.cursor = "";
            clickable=false;
        }
        
    }

    const handleTouchAction = (e) => {
        //console.log("handleMouseAction");
        //console.log(`x: ${e.clientX}, y: ${e.clientY}`)
        var touch = e.touches[0];
        mx = touch.pageX;
        my = touch.pageY;
        e.preventDefault();
    }

    const handleTouchEnd = (e) => {
        mx = undefined;
        my = undefined;
    }

    const clickableLink = () => {
        if(clickable){
            window.open('https://www.instagram.com/ghostatelier/', '_blank');
        }
    }

    return (
        <>
            <canvas
                ref={canvasRef}
                width={window.innerWidth}
                height={window.innerHeight}
                onClick={e => {handleOnClick(e)}}
                onMouseMove={e => {handleMouseAction(e)}}
                onTouchMove={e => {handleTouchAction(e)}}
                onTouchEnd={e=> {handleTouchEnd(e)}}
            />
        </>
    )
}

export default Main
