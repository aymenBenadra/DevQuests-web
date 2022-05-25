import { useContext } from "react";
import AlertContext from "../contexts/AlertContext";

export default function useAlert() {
  return useContext(AlertContext);
}
