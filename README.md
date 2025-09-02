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
  "logo": "Collection logo URL",
  "contracts": ["Array of contract addresses"]
}
```

## 📊 Schema Validation

### DApp Schema
- Validation of all required fields (name, type, logo, website, description, monad_exclusive, contracts)
- Contract address format validation (0x + 40-character hexadecimal)
- URL format validation

### NFT Schema
- Required field validation (name, logo, contracts)
- Contract address format validation
- Logo URL or null values allowed

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
   - Collection logo URL (optional)
   - Contract address list

2. **Write in JSON Format**
   ```json
   {
     "name": "Your NFT Collection",
     "logo": "https://your-logo-url.com/collection.jpg",
     "contracts": ["0x1234567890abcdef1234567890abcdef12345678"]
   }
   ```

3. **Verify Schema Validation**
   - Name and contract addresses are required
   - Logo is optional (null or empty string allowed)
   - Verify contract address format

## 📝 Notes

- All contract addresses follow Ethereum address format (0x + 40-character hexadecimal)
- The `monad_exclusive` field indicates whether the DApp operates exclusively on the Monad network
- Logo images must be in HTTP/HTTPS URL format
- NFT collections may not have logos (null or empty string allowed)

---

*This registry is continuously updated with the growth of the Monad testnet ecosystem.*

