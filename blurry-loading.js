document.querySelector('.button').addEventListener('click',function(){
      const load = document.querySelector('.loading-effect');
      load.classList.add('active');
      let time = 0;
      let int = setInterval(blurrying,30);

      function blurrying(){
          time++;
          if(time >99)
          {
              clearInterval(int);
              load.classList.remove('active');
          }

          document.querySelector('.container').style.filter= `blur(${scale(time,0,100,30,0)}px)`;
        
        }

        const scale = (num, in_min, in_max, out_min, out_max) => {
            return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }
});
