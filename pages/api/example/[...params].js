// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/api/example/[...params].js

export default function handler(req, res) {
  if (!req.query) {
    res.status(500).json({ message: 'No Parameters found!.' });
  } 
  const { params } = req.query;

  // Extracting multiple URL parameters
  const { ...otherParams } = params;

  console.log('Other Parameters:', otherParams);
  /*
    const storeParams = (name, data) => {
      if (typeof window !== 'undefined') localStorage.setItem(name, data);
    }
  */
  /* if (otherParams) {

    // Handle the parameters as needed
    const isConnected = otherParams['0']
    const maticBalance = otherParams['1']
    const centBalance = otherParams['2']

    console.log('isConnected:', isConnected);
    console.log('maticBalance:', maticBalance);
    console.log('centBalance:', centBalance);

    // Store parameters in local storage if not undefined or null
    if (isConnected !== undefined && isConnected !== null) {
      storeParams('isConnected', isConnected)
    }
    if (maticBalance !== undefined && maticBalance !== null) {
      storeParams('maticBalance', maticBalance);
    }
    if (centBalance !== undefined && centBalance !== null) {
      storeParams('centBalance', centBalance);
    }
    if (otherParams.length > 0) {
      // localStorage.setItem('otherParams', JSON.stringify(otherParams));
      console.log(otherParams)
    }

    // You can perform any additional processing or send a response
    res.status(200).json({ isConnected, maticBalance, centBalance });

  } else {
    res.status(500).json({ message: 'No Parameters found!.' });
  } */
}

