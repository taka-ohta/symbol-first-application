import { MosaicId, Address, NetworkType, TransferTransaction, Deadline, Mosaic, UInt64, PlainMessage, Account, RepositoryFactoryHttp } from "symbol-sdk";

// replace with mosaic id
const mosaicIdHex = '7460F899DF487963';
const mosaicId = new MosaicId(mosaicIdHex);
// replace with customer address
const rawAddress = 'TDDH3J-UCWMFW-2VSKLD-JM7GB3-P7LIDI-L54RBS-2QA';
const recipientAddress = Address.createFromRawAddress(rawAddress);
// replace with network type
const networkType = NetworkType.TEST_NET;

const transferTransaction = TransferTransaction.create(
  Deadline.create(1573430400),
  recipientAddress,
  [new Mosaic(mosaicId, UInt64.fromUint(1))],
  PlainMessage.create('enjoy your ticket'),
  networkType,
  UInt64.fromUint(2000000),
);

// replace with ticket vendor private key
const privateKey = 'A1C760B38DA4F36A1FE1825C5B355D03223B84163D01ABAEDAF11B119DAB3ACB';
const account = Account.createFromPrivateKey(privateKey, networkType);
// replace with meta.networkGenerationHash (nodeUrl + '/node/info')
const networkGenerationHash =
  '45FBCF2F0EA36EFA7923C9BC923D6503169651F7FA4EFC46A8EAF5AE09057EBD';
const signedTransaction = account.sign(
  transferTransaction,
  networkGenerationHash,
);

// replace with node endpoint
const nodeUrl = 'http://api-01.us-east-1.testnet.symboldev.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);

const transactionHttp = repositoryFactory.createTransactionRepository();

transactionHttp.announce(signedTransaction).subscribe(
  (x) => console.log(x),
  (err) => console.error(err),
);
