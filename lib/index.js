'use strict';
//binasciiJS
//Michael Coleman
//Stumpj@gmail.com

var hex_lookup = {
  '0': '0000',
  '1': '0001',
  '2': '0010',
  '3': '0011',
  '4': '0100',
  '5': '0101',
  '6': '0110',
  '7': '0111',
  '8': '1000',
  '9': '1001',
  'a': '1010',
  'b': '1011',
  'c': '1100',
  'd': '1101',
  'e': '1110',
  'f': '1111',
  'A': '1010',
  'B': '1011',
  'C': '1100',
  'D': '1101',
  'E': '1110',
  'F': '1111'
};

module.exports = {
	//Convert a single line of uuencoded data back to binary and return the binary data. 
	a2b_uu: function(_string) {
		return _string;
	},
	//Convert binary data to a line of ASCII characters, the return value is the converted line, including a newline char.
	b2a_uu: function(_data) {
		return _data;
	},
	//Convert a block of base64 data back to binary and return the binary data.
	a2b_base64: function(_string) {
		var a2b = new Buffer(_string, 'base64');
		return a2b;
	},
	//Convert binary data to a line of ASCII characters in base64 coding. The return value is the converted line, including a newline char.
	b2a_base64: function(_data) {
		return btoa(_data);
	},
	//Convert a block of quoted-printable data back to binary and return the binary data. 
	a2b_qp: function(_string, header) {
		var data = new Buffer(_string);
	},
	//Convert binary data to a line(s) of ASCII characters in quoted-printable encoding. The return value is the converted line(s).
	b2a_qp: function(_data, tabs, istext, header) {},
	//Convert binhex4 formatted ASCII data to binary, without doing RLE-decompression
	a2b_hqx: function(_string) {},
	//Perform RLE-decompression on the data, as per the binhex4 standard. The algorithm uses 0x90 after a byte as a repeat indicator, followed by a count.
	rledecode_hqx: function(_data) {},
	//Perform binhex4 style RLE-compression on data and return the result.
	rlecode_hqx: function(_data) {},
	//Perform hexbin4 binary-to-ASCII translation and return the resulting string.
	b2a_hqx: function(_data) {},
	//Compute the binhex4 crc value of data, starting with an initial crc and returning the result.
	crc_hqx: function(_data, crc) {},
	//Compute CRC-32, the 32-bit checksum of data, starting with an initial crc.
	crc32: function(_data, crc) {},
	//Return the hexadecimal representation of the binary data.
	b2a_hex: function(_data) {},
	hexlify: function(_data) {},
	//Return the binary data represented by the hexadecimal string hexstr.
	a2b_hex: function(_string) {},
	unhexlify: function(_string) {}
};