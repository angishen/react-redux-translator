import React, { Component } from "react";
import WordSearchBar from "../containers/word-search-bar";
import TranslationsList from "../containers/translations_list";
import LanguageSelector from "../containers/language_selector";
import "../app.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <WordSearchBar />
        <LanguageSelector />
        <TranslationsList />
      </div>
    );
  }
}
