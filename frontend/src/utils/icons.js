import {
  FaCar,
  FaTachometerAlt,
  FaMapMarkerAlt,
  FaLock,
  FaKey,
  FaTv,
} from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";

export const iconList = {
  model: <FaCar />,
  gears: <GiGearStickPattern />,
  kilometers: <FaTachometerAlt />,
  motor: <PiEngineFill />,
  gps: <FaMapMarkerAlt />,
  abs: <FaLock />,
  remoteKeyless: <FaKey />,
  rearSeatScreen: <FaTv />,
};
