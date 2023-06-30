import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import externalLinks from "../../helpers/externalLinks";
import HeroButton from "../HeroButton";
import { DataContext } from "../../App";

interface IProps {
  style?: { animation: string };
  onClick?: () => void;
}

const NavItems: React.FC<IProps> = (props: IProps) => {
  const { data }: any = useContext(DataContext);
  const generalInfo = data.generalInfo;

  const listItemData = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "MENU",
      link: "/menu",
    },
    {
      name: "UBEREATS",
      link: generalInfo.uberEats,
    },
    {
      name: "RESERVATIONS",
      link: generalInfo.reservations,
    },
    {
      name: "CONTACT US",
      link: "#footer",
    },
  ];

  const itemList = listItemData.map(
    (item: { name: string; link: string }, index) => {
      return (
        <motion.li
          key={item.name + "nav"}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {item.link === "#footer" ? (
            <HeroButton
              href={item.link}
              color="white"
              children={item.name}
              className="nav-button"
            />
          ) : (
            <HeroButton
              to={item.link}
              color="white"
              children={item.name}
              className="nav-button"
            />
          )}
        </motion.li>
      );
    }
  );

  return (
    <ul className="nav-items" style={props.style} onClick={props.onClick}>
      <AnimatePresence>{itemList}</AnimatePresence>
    </ul>
  );
};

export default NavItems;
