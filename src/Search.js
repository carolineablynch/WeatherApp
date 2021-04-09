import { useState } from "react";
import { Form, ListGroup, Accordion, Card, Button } from "react-bootstrap";
import Downshift from "downshift";
import debounce from "debounce";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

export default function Search({ setLocation }) {
    const [autoCompleteList, setAutoCompleteList] = useState(null);
    const [cityInput, setCityInput] = useState(null);
    const [open, setOpen] = useState(false);
    const [history, setHistory] = useState(JSON.parse(localStorage.getItem("history")));
    const fetchAutoComplete = value => {
      if (value) {
        fetch(`/api/autocomplete/${value}`)
          .then(response => response.json())
          .then(cityData => {
            if (cityData) setAutoCompleteList(cityData);
          });
      }
    };