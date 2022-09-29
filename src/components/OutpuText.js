import React from "react";

const OutpuText = ({
  outputText,
  languages,
  outputLanguage,
  setOutputLanguage,
}) => {
  return (
    <div>
      <select
        className="cursor-pointer border border-indigo-300 rounded-md p-2 text-indigo-500 font-medium mb-2"
        onChange={(e) => setOutputLanguage(e.target.value)}
      >
        {languages.map((language) => {
          return (
            <option
              key={language.code}
              value={language.code}
              selected={language.code === outputLanguage ? true : false}
            >
              {language.name}
            </option>
          );
        })}
      </select>
      <textarea
        className={`
            ${
              outputText ? `bg-indigo-200` : `bg-indigo-50`
            } w-full p-4 rounded-md resize-none text-gray-900 text-lg`}
        type="text"
        disabled
        rows={6}
        placeholder="Translation"
        value={outputText}
      />
    </div>
  );
};

export default OutpuText;
