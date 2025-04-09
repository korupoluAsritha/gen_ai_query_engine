// const { HfInference } = require('@huggingface/inference');
// const hf = new HfInference(process.env.HF_TOKEN);

// const convertToQuery = async (naturalQuery) => {
//   const prompt = `
//   Convert this natural language to MongoDB query:
//   "${naturalQuery}"
  
//   Format: {
//     "collection": "collection_name",
//     "filter": {field: value},
//     "options": {limit: number}
//   }`;

//   const response = await hf.textGeneration({
//     model: 'google/flan-t5-base',
//     inputs: prompt,
//     parameters: { max_new_tokens: 150 }
//   });

//   return JSON.parse(response.generated_text);
// };

// module.exports = { convertToQuery };

const { HfInference } = require('@huggingface/inference');
const hf = new HfInference(process.env.HF_TOKEN);

// Enhanced JSON extractor with fallback
function parseJSONResponse(text) {
  try {
    // First try direct parse
    return JSON.parse(text);
  } catch {
    // Fallback: Extract JSON from malformed responses
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[0]);
      } catch {
        throw new Error('Invalid JSON format in response');
      }
    }
    throw new Error('No JSON found in response');
  }
}

// Query mapping fallback
const QUERY_MAP = {
  'active users': {
    collection: 'users',
    filter: { status: 'active' },
    options: { limit: 10 }
  },
  'inactive users': {
    collection: 'users',
    filter: { status: 'inactive' },
    options: { limit: 10 }
  }
};

const convertToQuery = async (naturalQuery) => {
  // Check for exact matches first
  const lowerQuery = naturalQuery.toLowerCase();
  if (QUERY_MAP[lowerQuery]) {
    return QUERY_MAP[lowerQuery];
  }

  // Enhanced prompt with strict formatting
  const prompt = `
Convert this query to EXACT JSON format (NO OTHER TEXT).

QUERY: "${naturalQuery}"

MongoDB collection is likely "users". Possible fields: "status", "isActive".

STRICTLY OUTPUT ONLY:
{
  "collection": "users",
  "filter": {"field": "value"},
  "options": {"limit": number}
}`;


  try {
    const response = await hf.textGeneration({
      model: 'google/flan-t5-base',
      inputs: prompt,
      parameters: {
        max_new_tokens: 150,
        temperature: 0.1,  // More deterministic
        do_sample: false   // Disable random outputs
      }
    });

    console.log('Raw model output:', response.generated_text);
    return parseJSONResponse(response.generated_text);
    
  } catch (error) {
    console.error('AI Processing Error:', error);
    // Final fallback to simple query
    return {
      collection: 'users',
      filter: {},
      options: { limit: 5 }
    };
  }
};

module.exports = { convertToQuery };