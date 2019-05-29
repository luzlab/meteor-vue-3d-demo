import Bonjour from 'bonjour';

const mdns = Bonjour();

// advertise an HTTP server on port 3000
export const mockInstrumentService = mdns.publish({
  name: 'Mock Instrument',
  type: 'abi-instrument',
  port: 3000,
});

mockInstrumentService.start();
