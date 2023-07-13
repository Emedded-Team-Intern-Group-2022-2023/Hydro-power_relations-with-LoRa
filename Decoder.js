function decodeUplink(input) {
  var data={};
      data.distance= ((input.bytes[0]<<24) + (input.bytes[1] << 16) + (input.bytes[2]<<8) + (input.bytes[3])),
      data.temperature = ((input.bytes[4]<<8 )+ (input.bytes[5]))/100;
      data.humidity = ((input.bytes[6]<<8 )+ (input.bytes[7]))/100;
      data.voltage= ((input.bytes[8]<<8) + (input.bytes[9]))/1000
    
  return {
data: data
  };
}
