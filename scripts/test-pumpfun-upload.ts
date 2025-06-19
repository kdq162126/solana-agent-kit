import { uploadMetadata } from "../src/tools/pumpfun/launch_pumpfun_token";

async function testUpload() {
  const testData = {
    tokenName: "Test Token",
    tokenTicker: "TEST",
    description: "A test token for verification",
    // Using SOL token logo as test image
    imageUrl: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    options: {
      website: "https://test.com",
      twitter: "test_twitter",
      telegram: "test_telegram"
    }
  };

  console.log("Starting metadata upload test...");
  console.log("Test data:", testData);

  try {
    const result = await uploadMetadata(
      testData.tokenName,
      testData.tokenTicker,
      testData.description,
      testData.imageUrl,
      testData.options
    );

    console.log(result)

    console.log("\nUpload successful! ✅");
    console.log("Response:", JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("\nUpload failed! ❌");
    console.error("Error:", error);
  }
}

// Run the test
testUpload().catch(console.error);
