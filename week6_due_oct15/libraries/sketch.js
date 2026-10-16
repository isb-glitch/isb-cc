// Import the library
import { WaveBackground } from '@redesigner/wave.js'
//background('#3D5A80');

// Initialize on any container
const wave = new WaveBackground('#container', {
  theme:     'blue hour',
  waveCount: 12,
  opacity: 1,
  blur: 0,
  speed:     0.5,
})

fetch("tides-hilo.json")
  .then(res => res.json())
  .then(json => console.log(json));


        function fetchJSONData() {
            fetch('./tides-hilo.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();  
                })
                .then(data => console.log(data))  
                .catch(error => console.error('Failed to fetch data:', error)); 
        }
        fetchJSONData();  