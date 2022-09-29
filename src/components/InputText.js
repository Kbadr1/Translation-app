import React from "react";
import icon from "../icons/free_icon_1.svg";

const InputText = ({
  languages,
  inputText,
  setInputText,
  translate,
  setInputLanguage,
}) => {
  return (
    <div>
      <select
        className="cursor-pointer border border-indigo-300 rounded-md p-2 text-indigo-500 font-medium mb-2"
        onChange={(e) => setInputLanguage(e.target.value)}
      >
        {languages.map((language) => {
          return (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          );
        })}
      </select>
      <form onSubmit={translate}>
        <textarea
          className="w-full p-4 bg-indigo-50 resize-none rounded-md text-gray-700 text-lg"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          maxLength={200}
          rows={6}
        />
        <div className="flex justify-end">
          <span className="text-xs text-gray-500">
            {inputText.length} / 200
          </span>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className={`${
              inputText
                ? ` bg-indigo-500 hover:bg-indigo-800 cursor-pointer`
                : ` bg-indigo-400 hover:bg-indigo-400 cursor-auto`
            } text-white p-2 w-1/3 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-full font-medium mt-2 flex justify-center items-center`}
            disabled={inputText ? false : true}
          >
            Translate <img className="ml-2 w-7" src={icon} alt="" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputText;
