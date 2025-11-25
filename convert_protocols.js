#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const JSON5 = require('/tmp/node_modules/json5');

function categorizeType(categories) {
    if (!categories || categories.length === 0) {
        return "Other";
    }

    const category = categories[0];

    // Check more specific categories first before broader ones
    if (category.includes("Oracle")) {
        return "Oracle";
    } else if (category.includes("Bridge") || category.includes("Interoperability")) {
        return "Bridge";
    } else if (category.includes("AI")) {
        return "AI";
    } else if (category.includes("DeFi")) {
        return "DeFi";
    } else if (category.includes("NFT")) {
        return "NFT";
    } else if (category.includes("Gaming") || category.includes("Game")) {
        return "Gaming";
    } else if (category.includes("Social")) {
        return "Social";
    } else if (category.includes("DePIN")) {
        return "DePIN";
    } else if (category.includes("Infra")) {
        return "Infrastructure";
    } else {
        return "Other";
    }
}

function convertProtocol(data) {
    const name = data.name || "";
    const description = data.description || "";
    const categories = data.categories || [];
    const addresses = data.addresses || {};
    const links = data.links || {};

    const website = links.project || "";
    const contracts = Object.values(addresses);
    const dappType = categorizeType(categories);

    return {
        name,
        type: dappType,
        logo: "",
        website,
        description,
        monad_exclusive: false,
        contracts
    };
}

async function main() {
    const inputDir = "/tmp/monad-protocols/mainnet";
    const outputFile = "/Users/parkshinhwi/Development/monad-dapp-list/converted_protocols.json";

    const convertedDapps = [];
    const files = fs.readdirSync(inputDir)
        .filter(f => f.endsWith('.json') || f.endsWith('.jsonc'))
        .sort();

    for (const file of files) {
        const filepath = path.join(inputDir, file);
        try {
            const content = fs.readFileSync(filepath, 'utf-8');
            const data = JSON5.parse(content);

            if (!data.name) {
                console.log(`Skipping ${file}: No name field`);
                continue;
            }

            const converted = convertProtocol(data);
            convertedDapps.push(converted);
            console.log(`Converted: ${converted.name}`);

        } catch (error) {
            console.log(`Error processing ${file}: ${error.message}`);
            continue;
        }
    }

    fs.writeFileSync(outputFile, JSON.stringify(convertedDapps, null, 4));

    console.log(`\n✓ Converted ${convertedDapps.length} protocols`);
    console.log(`✓ Output saved to: ${outputFile}`);
}

main().catch(console.error);
