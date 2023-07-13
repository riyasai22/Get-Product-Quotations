import React from "react";
import "./SkinModelTable.css";
const SkinModelRow = ({
  description,
  additionalInformation,
  cellOrigin,
  quantity,
  onChange,
}) => {
  const cellOriginOptions = [
    "Keratinocytes",
    "Fibroblasts",
    "Melanocytes",
    "Langerhans cells",
  ];

  return (
    <tr>
      <td>{description}</td>
      <td>{additionalInformation}</td>
      <td>
        <select
          value={cellOrigin}
          onChange={(e) => onChange("cellOrigin", e.target.value)}
        >
          {cellOriginOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </td>
      <td>
        <input
          type="number"
          value={quantity}
          onChange={(e) => onChange("quantity", e.target.value)}
        />
      </td>
    </tr>
  );
};

const SkinModelTable = (props) => {
  const handleSkinModelChange = (index, key, value) => {
    props.changeSkinModel(
      props.skinModels.map((skinModel, i) => {
        if (i === index) {
          return { ...skinModel, [key]: value };
        } else {
          return skinModel;
        }
      })
    );
    props.setCellOrigin("Langerhans cells");
    props.setQuantity("10");
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Additional Information</th>
          <th>Cell Origin</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {props.skinModels.map((skinModel, index) => (
          <SkinModelRow
            key={index}
            {...skinModel}
            onChange={(key, value) => handleSkinModelChange(index, key, value)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SkinModelTable;
// table {
//     border-collapse: collapse;
//     width: 100%;
//     margin-bottom: 20px;
//   }

//   thead th {
//     text-align: left;
//     padding: 10px;
//     font-weight: bold;
//     background-color: #080b0a;
//     font-size: 14px;
//   }

//   tbody td {
//     padding: 10px;
//     font-size: 12px;

//     /* border-bottom: 1px solid #ccc; */
//   }

//   tbody tr:nth-child(even) {
//     background-color: #2c584f91;
//   }

//   select {
//     font-size: 12px;
//     padding: 6px 10px;
//     /* border: 1px solid #ccc; */
//     border-radius: 4px;
//     background-color: #ffffff;
//     color: #555;
//     width: 100%;
//     max-width: 300px;
//   }

//   input[type="number"] {
//     font-size: 12px;
//     padding: 6px 10px;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     background-color: #fff;
//     color: #555;
//     width: 100%;
//     width: 100px;
//   }

//   input[type="number"]:focus {
//     outline: none;
//     box-shadow: 0 0 0 2px #3875d7;
//   }
