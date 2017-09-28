
// prints out random object:
console.log(fetchPublicTransport());


// accessing values in the response
let variable : PublicTransportResponse = fetchPublicTransport();
console.log(variable.validFor) // accessing the known property
console.log(variable['property3']) // accessing dynamic property. Accessing is only possible thanks to [key: string]: string | number line in our interface



/** Interfaces and implementation */

// Known properties interface
interface WeatherResponse {
  location: string,
  temperature: number,
  unit: string
}

// Partialy known properties interface
interface PublicTransportResponse {
  validFor: Date;
  [key: string]: string | number;
}

function fetchWeather(location: string): WeatherResponse {
    let serverResponse = {
      location: 'Amsterdam',
      temperature: 20,
      unit: 'degree'
    }
    return serverResponse;
}


function fetchPublicTransport(): PublicTransportResponse {
    let serverResponse: PublicTransportResponse = {
      validFor: new Date()
    }
    for(let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * 10);
      let value;

      if (randomNumber % 2) {
        value = randomNumber;
      } else {
        value = 'This is string';
      }

      serverResponse['property' + randomNumber] = value;
    }
    serverResponse['property2000'] = new Date();
    // serverResponse[5] = 'hello'; // wont work because key is of type string in the interface
    return serverResponse;
}
