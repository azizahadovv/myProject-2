import { AiOutlineDown } from "react-icons/ai";
import {
  Bill,
  usa,
  Logo,
  Phone,
  Setting,
  SimCard2,
  russia,
  israil,
  lineRight,
  Voice,
  SMS,
  wifi,
  smartphone,
} from "./image";

export const sidebar = [
  { id: 1, img: Logo, title: "" },
  { id: 2, img: SimCard2, title: "My Account" },
  { id: 3, img: Bill, title: "Bill" },
  { id: 4, img: Phone, title: "Services" },
  { id: 5, img: Setting, title: "Support" },
];

export const countries = [
  {
    id: 1,
    img: usa,
    coutri: "Usa",
    check: true,
    number: [
      { nums: "+1 7602271144", check: false },
      { nums: "+1 7602270322", check: true },
      { nums: "+1 7602270333", check: false },
    ],
  },
  {
    id: 2,
    img: russia,
    coutri: "Russia",
    check: false,
    number: [{ nums: "+7 9583897416", check: false }],
  },
  {
    id: 3,
    img: israil,
    coutri: "Israil",
    check: false,
    number: [{ nums: "+972 553321747", check: false }],
  },
];

export const card = [
  {
    name: "Remaining Balance",
    prise: -151608.79,
    date: "Dec 3, 2021, 11:33:28 PM",
  },
  {
    name: "Current Charges",
    prise: 0.0,
    date: "Dec 1, 2021 - Dec 3, 2021",
  },

  {
    name: "Amount Due",
    prise: 42000.0,
    date: "Dec 1, 2021 - Jan 1, 2022",
  },
  {
    name: "Charges for Basic Services",
    prise: 0.0,
    date: "Dec 1, 2021 - Dec 3, 2021",
  },
];

export const card2 = [
  {
    name: "Home Zone Internet",
    prise: 30720,
    date: "Till Jan 1, 2022",
  },
  {
    name: "Home Zone Outgoing Calls",
    prise: 2500,
    date: "Till Jan 1, 2022",
  },
];

export const navbarBill = [
  { id: 1, title: "Itemization of Phone Calls" },
  { id: 2, title: "Monthly Bill" },
  { id: 3, title: "Payment History" },
  { id: 4, title: "Pay Your Bill" },
  { id: 5, title: "Autopay Setup" },
  { id: 6, title: "Previously Ordered Reports" },
];

/* ******************************************************** */
export const navbarServis = [
  { id: 1, title: "Admin your phone numbers" },
  { id: 2, title: "Plan Change" },
  { id: 3, title: "Services" },
  { id: 4, title: "Call Forwarding" },
];

export const navbarServisCard = [
  {
    id: 1,
    CountName: "USA",
    img: usa,
    number: "+1 7602270322",
    title: "The service is connected - Feb 26, 2020, 3:00:00 AM",
    btn: "Disconnect",
  },
  {
    id: 2,
    img: israil,
    CountName: "ISRAEL",
    number: "+972 553321747",
    title: "The service is connected - Nov 26, 2019, 3:00:00 AM",
    btn: "Disconnect",
  },
];

export const servisCard = [
  {
    id: 1,
    name: "Add a new number",
    title:
      "Select any country and quantity of numbers that we have available for you",
  },
  {
    id: 2,
    name: "History of changes",
    title: "Check your number management records",
  },
];

/* ******************************************* support ********************************************************* */

export const navberSupport = [
  { id: 1, title: "Personal Info Update" },
  { id: 2, title: "Password Change" },
];

export const nanbarLink = [
  { id: 1, title: "Plans" },
  { id: 2, title: "Coverage" },
  { id: 3, title: `About  ` },
  { id: 4, title: `Help` },
  { id: 5, title: "Partnerships" },
  { id: 6, title: "Contact" },
];

/* ***************************************** foote r****************************************************** */

export const footerLink1 = [
  { id: 1, title: "Plans" },
  { id: 2, title: "Coverage" },
  { id: 3, title: `About Us ` },
  { id: 4, title: `Partnerships` },
  { id: 5, title: "News" },
  { id: 6, title: "Contact" },
];
export const footerLink2 = [
  { id: 1, title: "Licenses" },
  { id: 2, title: "FAQ" },
  { id: 3, title: `Settings ` },
  { id: 4, title: `Corporate Services  ` },
  { id: 5, title: "Useful Commands" },
  { id: 6, title: "Download Our App" },
];

/* ************************************************ order button *************************************************** */

export const orderBtn = [
  { id: 1, img: lineRight, title: "Connection Type" },
  { id: 2, img: lineRight, title: "choose number" },
  { id: 3, img: lineRight, title: `cart ` },
  { id: 4, img: "", title: `PURCHASE ` },
];
export const orderINCLUDED = [
  { id: 1, img: "", key: "INCLUDED IN PACKAGE	", value: "WORLDWIDE*" },
  { id: 2, img: Voice, key: "Voice	", value: "500 minutes*" },
  { id: 3, img: SMS, key: "SMS	", value: "Unlimited" },
  { id: 4, img: wifi, key: "DATA	", value: "5 GB" },
  { id: 5, img: smartphone, key: "Phone Numbers	", value: "2 unit" },
];

export const tarif = [
  { id: 1, name: "Platinum" },
  { id: 2, name: "Gold" },
  { id: 3, name: "Silver" },
  { id: 4, name: "Bronze" },
  { id: 5, name: "Basic" },
];

export const ChooseNumberOrder1 = [
  {
    id: 1,
    number: "+7 (958) 928 2828 ",
    title: "$2000  /  €1764.5  /  ₽150000",
  },
  {
    id: 2,
    number: "+7 (958) 925 2525  ",
    title: "$2000  /  €1764.5  /  ₽150000",
  },
  {
    id: 3,
    number: "+7 (958) 927 2727  ",
    title: "$2000  /  €1764.5  /  ₽150000",
  },
  {
    id: 4,
    number: "+7 (958) 922 2225  ",
    title: "$2000  /  €1764.5  /  ₽150000",
  },
  {
    id: 5,
    number: "+7 (958) 926 2626  ",
    title: "$2000  /  €1764.5  /  ₽150000",
  },
  {
    id: 6,
    number: "+7 (958) 922 2223 ",
    title: "$2000  /  €1764.5  /  ₽150000",
  },
  {
    id: 7,
    number: "+7 (958) 926 6666  ",
    title: "$2000  /  €1764.5  /  ₽150000",
  },
  {
    id: 8,
    number: "+7 (958) 927 7777 ",
    title: "$2000  /  €1764.5  /  ₽150000",
  },
  {
    id: 9,
    number: "+7 (958) 925 5555 ",
    title: "$2000  /  €1764.5  /  ₽150000",
  },
];

/* ************************************************ YOUR ACCAUNT *************************************************** */

export const yourCard1 = [
  {
    id: 1,
    key: "01-11-2020",
    value: "$100.00",
  },
  {
    id: 2,
    key: "15-11-2020",
    value: "$100.00",
  },
  {
    id: 3,
    key: "21-11-2020",
    value: "$100.00",
  },
  {
    id: 4,
    key: "30-11-2020",
    value: "$100.00",
  },
];

export const yourCard2 = [
  {
    id: 1,
    key: "Тариф  V-1",
    value: "$100.00",
  },
  {
    id: 2,
    key: "Additional number",
    value: "$100.00",
  },
  {
    id: 3,
    key: "Additional number",
    value: "$100.00",
  },
  {
    id: 4,
    key: "Additional number",
    value: "$100.00",
  },
];
