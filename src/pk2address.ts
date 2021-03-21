import { Address, NetworkType } from 'symbol-sdk';

const publicKey = 'B794672A15A26882898B87F51864D57529675AA8DDA8DB0986722227FEDAD6BA';
const address = Address.createFromPublicKey(publicKey, NetworkType.MAIN_NET);
console.log(address.plain());
