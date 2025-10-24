# Monad Registry

A registry for managing DApp and NFT collection information operating on the Monad testnet.

## 📋 Overview

This project manages metadata for registering various decentralized applications (DApps) and NFT collections operating on the Monad blockchain network to nadradar.

## 🏗️ Data Structure

### DApp Information

DApp registration information has the following structure:

```json
{
  "name": "Application name",
  "type": "Category (DeFi, Game, Staking, etc.)",
  "logo": "Logo image URL",
  "website": "Official website URL",
  "description": "Application description",
  "monad_exclusive": "Whether it's Monad exclusive (boolean)",
  "contracts": ["Array of smart contract addresses"]
}
```

### NFT Collection Information

NFT collection information has the following structure:

```json
{
  "name": "NFT collection name",
  "contracts": ["Array of contract addresses"]
}
```

## 📊 Schema Validation

### DApp Schema
- Validation of all required fields (name, type, logo, website, description, monad_exclusive, contracts)
- Contract address format validation (0x + 40-character hexadecimal)
- URL format validation

### NFT Schema
- Required field validation (name, contracts)
- Contract address format validation

## 🔧 Registration Method

### DApp Registration

1. **Prepare Required Information**
   - Application name
   - Category (DeFi, Game, Staking, etc.)
   - Logo image URL
   - Official website URL
   - Application description
   - Monad exclusive status (true/false)
   - Smart contract address list

2. **Write in JSON Format**
   ```json
   {
     "name": "Your DApp Name",
     "type": "DeFi",
     "logo": "https://your-logo-url.com/logo.jpg",
     "website": "https://your-website.com",
     "description": "Your DApp description",
     "monad_exclusive": true,
     "contracts": ["0x1234567890abcdef1234567890abcdef12345678"]
   }
   ```

3. **Verify Schema Validation**
   - Check if all required fields are included
   - Verify contract addresses are in correct format (0x + 40-character hexadecimal)
   - Verify URLs are in valid format

### NFT Collection Registration

1. **Prepare Required Information**
   - NFT collection name
   - Contract address list

2. **Write in JSON Format**
   ```json
   {
     "name": "Your NFT Collection",
     "contracts": ["0x1234567890abcdef1234567890abcdef12345678"]
   }
   ```

3. **Verify Schema Validation**
   - Name and contract addresses are required
   - Verify contract address format

## 📝 Notes

- All contract addresses follow Ethereum address format (0x + 40-character hexadecimal)
- The `monad_exclusive` field indicates whether the DApp operates exclusively on the Monad network
- Logo images must be in HTTP/HTTPS URL format

---

*This registry is continuously updated with the growth of the Monad testnet ecosystem.*
