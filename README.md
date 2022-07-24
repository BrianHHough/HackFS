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

## Local Deployment via Hardhat

By running `npx hardhat run scripts/run.js` this will run the Scoops `Domains.sol` smart contract and then deploy the input of `polygon` as the Scoops Domain name.

See image here for reference: <a href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzAiIGhlaWdodD0iMjcwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMCAwaDI3MHYyNzBIMHoiLz48ZGVmcz48ZmlsdGVyIGlkPSJkIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaGVpZ2h0PSIyNzAiIHdpZHRoPSIyNzAiPjxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSIxIiBzdGREZXZpYXRpb249IjIiIGZsb29kLW9wYWNpdHk9Ii4yMjUiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiLz48L2ZpbHRlcj48L2RlZnM+PHN2ZyB3aWR0aD0iOTgiIGhlaWdodD0iMTU3IiB2aWV3Qm94PSIwIDAgOTggMTM3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBmaWxsPSJ1cmwoI2IpIiBkPSJNMCAwaDk4djEzN0gweiIvPjxkZWZzPjxwYXR0ZXJuIGlkPSJiIiBwYXR0ZXJuQ29udGVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgd2lkdGg9IjEiIGhlaWdodD0iMSI+PHVzZSB4bGluazpocmVmPSIjYyIgdHJhbnNmb3JtPSJtYXRyaXgoLjAwMzA5IDAgMCAuMDAyMiAtLjA1MyAtLjAwMSkiLz48L3BhdHRlcm4+PGltYWdlIGlkPSJjIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeGxpbms6aHJlZj0iaHR0cHM6Ly9nYXRld2F5LnBpbmF0YS5jbG91ZC9pcGZzL1FtU1E3UmRFUVJ6cjdGcUxjVjZwTGY3UzRhclUya2tqaHBReXpTU2YxdFVDNVgiLz48L2RlZnM+PC9zdmc+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCIgeTE9IjAiIHgyPSIyNzAiIHkyPSIyNzAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkJCMzM2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkEwOTU1IiBzdG9wLW9wYWNpdHk9Ii45OSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjx0ZXh0IHg9IjMyLjUiIHk9IjIzMSIgZm9udC1zaXplPSIyNyIgZmlsbD0iI2ZmZiIgZmlsdGVyPSJ1cmwoI2QpIiBmb250LWZhbWlseT0iUGx1cyBKYWthcnRhIFNhbnMsRGVqYVZ1IFNhbnMsTm90byBDb2xvciBFbW9qaSxBcHBsZSBDb2xvciBFbW9qaSxzYW5zLXNlcmlmIj5wb2x5Z29uLnBvbHk8L3RleHQ+PC9zdmc+">Image</a>

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

