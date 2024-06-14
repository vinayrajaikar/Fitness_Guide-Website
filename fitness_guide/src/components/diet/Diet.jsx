import React, { useState } from "react";
import { fetchDietPlan } from "./DietApi";
import "./Diet.css";

function App() {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [dietType, setDietType] = useState("Vegetarian");
  const [loading, setLoading] = useState(false);
  const [dietData, setDietData] = useState(null);

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleDietTypeChange = (e) => {
    setDietType(e.target.value);
  };

  const handleGetDiet = async () => {
    setLoading(true);
    try {
      const response = await fetchDietPlan(age, height, weight, dietType);
      setDietData(response);
    } catch (error) {
      console.error("Error fetching diet plan:", error);
    } finally {
      setLoading(false);
    }
  };

  const populateValues = () => {
    return (
      <div id="dietDataContainer">
        <div id="statContainer">
          <div className="sobo" id="bmiCont">
            <h3 id="bmiVal">{dietData.BMI}</h3>
            <p>BMI</p>
          </div>
          <div className="sobo" id="calCont">
            <h3 id="calVal">{dietData.Calories}</h3>
            <p>Calories</p>
          </div>
          <div className="sobo" id="proteinCont">
            <h3 id="proVal">{dietData.Protein.Target}g</h3>
            <p>Protein</p>
          </div>
        </div>
        <div id="mealContainer">
          <h4>Meals</h4>
          <hr />
          <div className="wrapper">
            <div className="box a">Time</div>
            <div className="box b">Food</div>
            <div className="box c">Calories</div>
            <div className="box d">Protein</div>

            {/* Table Rows */}
            <div className="row r1">
              <div className="box e">Breakfast</div>
              <div className="box f" id="bf">
                {dietData.SampleMealPlan.Breakfast.Example}
              </div>
              <div className="box g" id="bfCal">
                {dietData.SampleMealPlan.Breakfast.Calories} Calories
              </div>
              <div className="box h" id="bfPro">
                {dietData.SampleMealPlan.Breakfast.Protein}g Protein
              </div>
            </div>

            <div className="row r2">
              <div className="box e">Lunch</div>
              <div className="box f" id="lf">
                {dietData.SampleMealPlan.Lunch.Example}
              </div>
              <div className="box g" id="lfCal">
                {dietData.SampleMealPlan.Lunch.Calories} Calories
              </div>
              <div className="box h" id="lfPro">
                {dietData.SampleMealPlan.Lunch.Protein}g Protein
              </div>
            </div>

            <div className="row r3">
              <div className="box e">Dinner</div>
              <div className="box f" id="df">
                {dietData.SampleMealPlan.Dinner.Example}
              </div>
              <div className="box g" id="dfCal">
                {dietData.SampleMealPlan.Dinner.Calories} Calories
              </div>
              <div className="box h" id="dfPro">
                {dietData.SampleMealPlan.Dinner.Protein}g Protein
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="mainContainer">
      <div id="topContainer">
        <img
          id="cnclIcn"
          src="https://cdn-icons-png.flaticon.com/128/748/748122.png"
          alt=""
        />
      </div>
      <div id="bottomContainer">
        <div id="leftContainer">
          <p id="text">Before we start, we'd like to get to know you better.</p>
          <div id="ageContainer">
            <input
              className="band"
              type="number"
              name="age"
              id="ageVal"
              placeholder="Age"
              value={age}
              onChange={handleAgeChange}
            />
            <p>yrs</p>
          </div>
          <div id="heightContainer">
            <input 
              className="band"
              type="number"
              name="height"
              id="heightVal"
              placeholder="Height"
              value={height}
              onChange={handleHeightChange}
            />
            <p>cm</p>
          </div>
          <div id="weightContainer">
            <input
              className="band"
              type="number"
              name="weight"
              id="weightVal"
              placeholder="Weight"
              value={weight}
              onChange={handleWeightChange}
            />
            <p>kg</p>
          </div>
          <div id="preferContainer">
            <div>
              <input
                id="veg"
                type="radio"
                name="Pref"
                value="Vegetarian"
                checked={dietType === "Vegetarian"}
                onChange={handleDietTypeChange}
              />
              <label htmlFor="veg">Vegetarian</label>
            </div>
            <div>
              <input
                id="nonVeg"
                type="radio"
                name="Pref"
                value="nonVegetarian"
                checked={dietType === "nonVegetarian"}
                onChange={handleDietTypeChange}
              />
              <label htmlFor="nonVeg">Non-Vegetarian</label>
            </div>
          </div>
          <button className="getDiet" onClick={handleGetDiet}>
            Get Diet Plan
          </button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : dietData ? (
          populateValues()
        ) : null}
      </div>
    </div>
  );
}

export default App;
