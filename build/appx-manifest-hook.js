// Runs after electron-builder writes AppxManifest.xml: adds internet and microphone (voice notes) to the Store package.
const fs = require('fs');
module.exports = async function (manifestPath) {
  let xml = fs.readFileSync(manifestPath, 'utf8');
  if (!xml.includes('Name="microphone"')) {
    xml = xml.replace('<rescap:Capability Name="runFullTrust"/>',
      '<Capability Name="internetClient"/>\n    <rescap:Capability Name="runFullTrust"/>\n    <DeviceCapability Name="microphone"/>');
    fs.writeFileSync(manifestPath, xml);
  }
};
