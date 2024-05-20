import React, { useRef, useEffect } from 'react';

const Snowfall = ({ imageSrc, windSpeed = 0 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const particles = [];
    const particleCount = 25;
    const img = new Image();
    img.src = imageSrc;

    // canvas.width = window.innerWidth ;
    // canvas.height = window.innerHeight;

    const ratio = Math.ceil(window.devicePixelRatio);
    // const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 1 + 1;
        this.size = Math.random() * 70 + 5;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 2;
        this.xSpeed = (Math.random() - 0.5) * windSpeed;
      }

      update() {
        this.y += this.speed;
        this.x += this.xSpeed;
        this.rotation += this.rotationSpeed;

        if (this.y > canvas.height) {
          this.y = -this.size;
          this.x = Math.random() * canvas.width;
        }
        if (this.x > canvas.width) {
          this.x = 0;
        } else if (this.x < 0) {
          this.x = canvas.width;
        }
      }

      draw() {
        context.save();
        context.translate(this.x, this.y);
        context.rotate((this.rotation * Math.PI) / 180);
        context.drawImage(img, -this.size / 2, -this.size / 2, this.size, this.size);
        context.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    img.onload = animate;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [imageSrc, windSpeed]);

  return <canvas ref={canvasRef} style={{ display: 'block' }} />;
};

export default Snowfall;