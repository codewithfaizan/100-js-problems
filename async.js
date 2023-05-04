function resolveAfter2Seconds() {
    return new Promise( 
        resolve => {
      setTimeout(() => { resolve('resolved after 2 sec') }, 2000); 
    } );
  }
  
  async function asyncCall() {
    console.log('calling');

    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
  asyncCall();