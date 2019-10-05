import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
//import particlesBG from '../js/particles'



export class Background extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: 0,
            height: 0,
            particlesArray: []
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.bgRef = React.createRef();
    }

    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        let canvas = document.createElement("canvas");
        //script.src = particlesBG;
        //script.async = true;

        //document.body.appendChild(script);
    }
      
    componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight, particlesArray: this.updateParticlesArray(window.innerWidth, window.innerHeight) });
    console.log(`height: ${this.state.height}`);
    console.log(`width: ${this.state.width}`);
    console.log(JSON.stringify(this.state.particlesArray));
    }

    updateParticlesArray(width, height){
        console.log(`updated`);
        let arr = [];
        let ctx = this.canvas.getContext("2d");
        let particle = {
            vx: 0,
            vy: 0,
            x: 0,
            y: 0
        };

        const w = Math.floor(width/10);
        const h = Math.floor(height/10);
        
        for(let i = 0; i < h; i++){
            for(let j = 0; j < w; j++){
                let p = Object.create(particle);
                p.x = p.ox = 10 * j;
                p.y = p.oy = 10 * i;

                arr.push(p); 
            }
        }
        return arr;
    }

    render() {
        return (
            <div>
                <canvas>
                    <h1>{this.state.height}</h1>
                    <h1>{this.state.width}</h1>
                </canvas>
            </div>
        )
    }
}

export default Background
