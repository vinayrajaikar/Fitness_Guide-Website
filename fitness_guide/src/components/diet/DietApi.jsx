import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyC1VHRr_zn58ak6HUnyLKV1S5Hnsv4OTG4"; // Replace with your actual Google API key

const genAI = new GoogleGenerativeAI(API_KEY);

const fetchDietPlan = async (age, height, weight, dietType) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Based on an individual's weight of ${weight} kg, height of ${height} cm, provide a ${dietType} indian diet plan with 3 meals: breakfast, lunch, and dinner, and also provide the protein intake, calories required, and BMI with no extra and no notes information as I need it to code, each section with a key and values like a JSON file. Please do not add any extra information within BMI as it needs to be numeric, also do not add any comments. Example output: { "Individual": { "Weight": 70, "Height": 175 }, "BMI": 22.8, "Calories": 2100, "Protein": { "Target": 56 }, "SampleMealPlan": { "Breakfast": { "Calories": 450, "Protein": 22, "Example": "Oatmeal with berries and nuts + veggie sausage" }, "Lunch": { "Calories": 650, "Protein": 20, "Example": "Lentil soup with whole-wheat bread + side salad" }, "Dinner": { "Calories": 800, "Protein": 14, "Example": "Stir-fried tofu with vegetables and brown rice" } } }`;

  try {
    const result = await model.generateContent(prompt);
    const response = extractResponse(result.response);
    return response;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
};

const extractResponse = (response) => {
  if (response.candidates && response.candidates.length > 0) {
    const candidate = response.candidates[0];
    if (candidate.content && candidate.content.parts) {
      return JSON.parse(
        candidate.content.parts.map((part) => part.text).join("")
      );
    } else {
      return JSON.parse(candidate.content || "");
    }
  }
  if (response.promptFeedback) {
    throw new Error(`Text not available. ${response.promptFeedback}`);
  }
  return {};
};

export { fetchDietPlan };
