import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import "./NewQuery.css";
import TopNav from "../../components/TopNav.jsx";

const NewQuery = () => {
  const [formData, setFormData] = useState({
    budgetLow: "",
    budgetHigh: "",
    carStyle: [],
    focus: "",
    condition: "new",
    mileLow: "",
    mileHigh: "",
    fuelType: [],
    nonNegotiables: "",
  });

  const carStyles = [
    "Sedan",
    "SUV",
    "Truck",
    "Convertible",
    "Mini Van",
    "Wagon",
    "Coup",
    "Hatchback",
  ];
  const focuses = ["Luxury", "Comfort", "Sporty", "Track", "Commuter"];
  const fuelTypes = ["Hybrid", "Gas", "EV"];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "carStyle") {
      setFormData((prev) => ({
        ...prev,
        carStyle: checked
          ? [...prev.carStyle, value]
          : prev.carStyle.filter((style) => style !== value),
      }));
    } else if (type === "checkbox" && name === "fuelType") {
      setFormData((prev) => ({
        ...prev,
        fuelType: checked
          ? [...prev.fuelType, value]
          : prev.fuelType.filter((type) => type !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <>
      <TopNav />

      <form onSubmit={handleSubmit} className="new-query-form">
        <h2>Car Search Query</h2>

        {/* Budget Range */}
        <div className="form-group">
          <label>Budget Range:</label>
          <div className="input-group">
            <InputText
              type="number"
              name="budgetLow"
              placeholder="Min"
              value={formData.budgetLow}
              onChange={handleInputChange}
            />
            -
            <InputText
              type="number"
              name="budgetHigh"
              placeholder="Max"
              value={formData.budgetHigh}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Car Style */}
        <fieldset className="form-group">
          <legend>Car Style (Select all that apply):</legend>
          {carStyles.map((style) => (
            <label key={style} className="checkbox-label">
              <input
                type="checkbox"
                name="carStyle"
                value={style}
                checked={formData.carStyle.includes(style)}
                onChange={handleInputChange}
              />
              {style}
            </label>
          ))}
        </fieldset>

        {/* Focus */}
        <div className="form-group">
          <label>Focus:</label>
          <select
            name="focus"
            value={formData.focus}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            {focuses.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>

        {/* New or Used */}
        <fieldset className="form-group">
          <legend>Condition:</legend>
          <label>
            <input
              type="radio"
              name="condition"
              value="new"
              checked={formData.condition === "new"}
              onChange={handleInputChange}
            />
            New
          </label>
          <label>
            <input
              type="radio"
              name="condition"
              value="used"
              checked={formData.condition === "used"}
              onChange={handleInputChange}
            />
            Used
          </label>
        </fieldset>

        {/* Mile Range (if used) */}
        {formData.condition === "used" && (
          <div className="form-group">
            <label>Mile Range:</label>
            <div className="input-group">
              <InputText
                type="number"
                name="mileLow"
                placeholder="Min"
                value={formData.mileLow}
                onChange={handleInputChange}
              />
              -
              <InputText
                type="number"
                name="mileHigh"
                placeholder="Max"
                value={formData.mileHigh}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}

        {/* Fuel Type */}
        <fieldset className="form-group">
          <legend>Fuel Type (Select all that apply):</legend>
          {fuelTypes.map((type) => (
            <label key={type} className="checkbox-label">
              <input
                type="checkbox"
                name="fuelType"
                value={type}
                checked={formData.fuelType.includes(type)}
                onChange={handleInputChange}
              />
              {type}
            </label>
          ))}
        </fieldset>

        {/* Non-Negotiables */}
        <div className="form-group">
          <label>Non-Negotiables (List them below!):</label>
          <textarea
            name="nonNegotiables"
            placeholder="Enter a list of your non-negotiables..."
            value={formData.nonNegotiables}
            onChange={handleInputChange}
            rows="4"
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </>
  );
};

export default NewQuery;
