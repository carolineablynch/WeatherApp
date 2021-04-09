import { Card } from "react-bootstrap";
import { FaThermometerHalf, FaWind } from "react-icons/fa";

function uvIndexColor(uvIndex) {
    if (uvIndex <= 3) return "rgba(0, 120, 6, 0.6)";
    if (uvIndex <= 6) return "rgba(208, 119, 0, 0.6)";
  
    return "rgba(208, 0, 0, 0.6)";
  }