const { HfInference } = require('@huggingface/inference');
const hf = new HfInference(process.env.HF_TOKEN);

const convertToQuery = async (naturalQuery) => {
  const prompt = `
  Convert this natural language to MongoDB query:
  "${naturalQuery}"
  
  Format: {
    "collection": "collection_name",
    "filter": {field: value},
    "options": {limit: number}
  }`;

  const response = await hf.textGeneration({
    model: 'google/flan-t5-base',
    inputs: prompt,
    parameters: { max_new_tokens: 150 }
  });

  return JSON.parse(response.generated_text);
};

module.exports = { convertToQuery };