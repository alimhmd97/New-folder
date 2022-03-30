import { ResponsiveDrawer } from "../UI/sideDrawer";

function SideBar() {
  const sideBarDetails = {
    showedSideBarIitems: ["Theme", "Age"],
    hiddenSideBarIitems: ["Brand", "Characters", "Stock availability"],
    Theme: [
      "space(44)",
      "Ninja(44)",
      "Transport(44)",
      "Building(44)",
      "Homes(44)",
    ],
    Age: [
      "Up to a year",
      "1 Year - 2 Years",
      "3 Year - 5 Years",
      "6Year - 10 Years",
      "Older than 12 Years old",
    ],
  };
  return (
    <div>
      <ResponsiveDrawer sideBarDetails={sideBarDetails} />
    </div>
  );
}

export default SideBar;
