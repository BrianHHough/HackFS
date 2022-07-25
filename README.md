# Scoops Domain Service

This is a domain registry for Polygon (an extremely scalable and powerful Ethereum Layer 2 protocol) to allow users to turn any 1:1 name into a pointer NFT on the blockchain.

Example: Jordan wants to have a pointer to their address so they don't have to remember `0x1234567890...`. Jordan can simply go to Scoops Domains, register `Jordan.poly` and once the NFT is minted, there is a pointer linking `Jordan.poly`::`0x1234567890...`.

## To run this contract locally:

We leverage the Hardhat framework, and to test if this works, install all of the dependencies of the project with `npm i` or `yarn install`.

Then run this from the root of the project:

```bash
npx hardhat run scripts/run.js
```

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## Deployed Contract:

```
Compiled 15 Solidity files successfully
Scoops Domains contract deployed to:  0xEB2648a8c9aE50605973821855056068103c9b88
Minted Scoops domain polygon.poly
Correctly set record for owner: polygon.poly
Owner of Scoops Domain `polygon` is:  0xdF297aA23C72C39a0338EC6DEB5Ea669aC986E32
Balance of contract: 0.01
```

## Local Deployment via Hardhat

By running `npx hardhat run scripts/run.js` this will run the Scoops `Domains.sol` smart contract and then deploy the input of `polygon` as the Scoops Domain name.

See image here for reference: <a href="https://testnets.opensea.io/collection/scoops-domains-on-polygon-v3">Open Sea Marketplace</a> and an <a href="https://openseauserdata.com/files/4f8956be78a28091ee5591e13ca2ddb8.svg">NFT's image</a>

```
Compiled 1 Solidity file successfully
poly Scoops Domain deployed,
===================================================================================
Scoops Domains contract deployed to:  0x5FbDB2315678afecb367f032d93F642f64180aa3
===================================================================================
Contract deployed by:  0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Registering polygon.poly on the contract with tokenID 0

--------------------------------------------------------
Final tokenURI: data:application/json;base64,eyJuYW1lIjogInBvbHlnb24ucG9seSIsICJkZXNjcmlwdGlvbiI6ICJBIGZyZXNobHkgbWludGVkIFNjb29wcyBEb21haW5zIG9uIFBvbHlnb24iLCAiaW1hZ2UiOiAiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l5TnpBaUlHaGxhV2RvZEQwaU1qY3dJaUJtYVd4c1BTSnViMjVsSWo0OGNHRjBhQ0JtYVd4c1BTSjFjbXdvSTJFcElpQmtQU0pOTUNBd2FESTNNSFl5TnpCSU1Ib2lMejQ4WkdWbWN6NDhabWxzZEdWeUlHbGtQU0prSWlCamIyeHZjaTFwYm5SbGNuQnZiR0YwYVc5dUxXWnBiSFJsY25NOUluTlNSMElpSUdacGJIUmxjbFZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ2FHVnBaMmgwUFNJeU56QWlJSGRwWkhSb1BTSXlOekFpUGp4bVpVUnliM0JUYUdGa2IzY2daSGc5SWpBaUlHUjVQU0l4SWlCemRHUkVaWFpwWVhScGIyNDlJaklpSUdac2IyOWtMVzl3WVdOcGRIazlJaTR5TWpVaUlIZHBaSFJvUFNJeU1EQWxJaUJvWldsbmFIUTlJakl3TUNVaUx6NDhMMlpwYkhSbGNqNDhMMlJsWm5NK1BITjJaeUIzYVdSMGFEMGlPVGdpSUdobGFXZG9kRDBpTVRVM0lpQjJhV1YzUW05NFBTSXdJREFnT1RnZ01UTTNJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklqNDhjR0YwYUNCbWFXeHNQU0oxY213b0kySXBJaUJrUFNKTk1DQXdhRGs0ZGpFek4wZ3dlaUl2UGp4a1pXWnpQanh3WVhSMFpYSnVJR2xrUFNKaUlpQndZWFIwWlhKdVEyOXVkR1Z1ZEZWdWFYUnpQU0p2WW1wbFkzUkNiM1Z1WkdsdVowSnZlQ0lnZDJsa2RHZzlJakVpSUdobGFXZG9kRDBpTVNJK1BIVnpaU0I0YkdsdWF6cG9jbVZtUFNJall5SWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29MakF3TXpBNUlEQWdNQ0F1TURBeU1pQXRMakExTXlBdExqQXdNU2tpTHo0OEwzQmhkSFJsY200K1BHbHRZV2RsSUdsa1BTSmpJaUIzYVdSMGFEMGlOREF3SWlCb1pXbG5hSFE5SWpRd01DSWdlR3hwYm1zNmFISmxaajBpYUhSMGNITTZMeTluWVhSbGQyRjVMbkJwYm1GMFlTNWpiRzkxWkM5cGNHWnpMMUZ0VTFFM1VtUkZVVko2Y2pkR2NVeGpWalp3VEdZM1V6UmhjbFV5YTJ0cWFIQlJlWHBUVTJZeGRGVkROVmdpTHo0OEwyUmxabk0rUEM5emRtYytQR1JsWm5NK1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSmhJaUI0TVQwaU1DSWdlVEU5SWpBaUlIZ3lQU0l5TnpBaUlIa3lQU0l5TnpBaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJajQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqUmtKQ016TTJJaTgrUEhOMGIzQWdiMlptYzJWMFBTSXhJaUJ6ZEc5d0xXTnZiRzl5UFNJalJrRXdPVFUxSWlCemRHOXdMVzl3WVdOcGRIazlJaTQ1T1NJdlBqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK1BDOWtaV1p6UGp4MFpYaDBJSGc5SWpNeUxqVWlJSGs5SWpJek1TSWdabTl1ZEMxemFYcGxQU0l5TnlJZ1ptbHNiRDBpSTJabVppSWdabWxzZEdWeVBTSjFjbXdvSTJRcElpQm1iMjUwTFdaaGJXbHNlVDBpVUd4MWN5QktZV3RoY25SaElGTmhibk1zUkdWcVlWWjFJRk5oYm5Nc1RtOTBieUJEYjJ4dmNpQkZiVzlxYVN4QmNIQnNaU0JEYjJ4dmNpQkZiVzlxYVN4ellXNXpMWE5sY21sbUlqNXdiMng1WjI5dUxuQnZiSGs4TDNSbGVIUStQQzl6ZG1jKyIsImxlbmd0aCI6IjcifQ==
--------------------------------------------------------

===================================================================================
Owner of Scoops Domain `polygon` is:  0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
===================================================================================
Balance of contract: 0.01
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
