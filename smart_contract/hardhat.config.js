//https://eth-ropsten.alchemyapi.io/v2/HOcegL6IhSvdn8BV6up00zJHpmmH87Fl
require('@nomiclabs/hardhat-waffle');
module.exports={
  solidity:'0.8.0',
  networks: {
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/HOcegL6IhSvdn8BV6up00zJHpmmH87Fl',
      accounts:['fd5aa64ba3bab79b874be70730bea4993643f83c478ae5be280fa3d4cc1ed44f']
    }

  }
}