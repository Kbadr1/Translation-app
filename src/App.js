import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import InputText from "./components/InputText";
import OutpuText from "./components/OutpuText";

function App() {
  const [languages, setLanguages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [inputLanguage, setInputLanguage] = useState("en");
  const [outputLanguage, setOutputLanguage] = useState("ar");

  const getAllLanguages = () => {
    axios
      .get("https://libretranslate.de/languages")
      .then((res) => {
        setLanguages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const translate = (e) => {
    e.preventDefault();
    let data = {
      q: inputText,
      source: inputLanguage,
      target: outputLanguage,
    };
    axios
      .post(`https://libretranslate.de/translate`, data)
      .then((res) => {
        setOutputText(res.data.translatedText);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllLanguages();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:border border-indigo-100 shadow-md rounded-none sm:rounded-md p-5 my-8">
        <InputText
          inputText={inputText}
          setInputText={setInputText}
          setInputLanguage={setInputLanguage}
          languages={languages}
          translate={translate}
        />
        <OutpuText
          outputText={outputText}
          languages={languages}
          outputLanguage={outputLanguage}
          setOutputLanguage={setOutputLanguage}
        />
      </div>
    </div>
  );
}

export default App;
