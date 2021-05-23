import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header>
      {/* 1st nav */}
      {/* logo */}
      <div className="flex items-center bg-amazon_blue py-3  flex-grow">
        <div className="flex mt-2 flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search bar */}
        <div className="bg-yellow-400 items-center h-12 flex-grow rounded-md hidden sm:flex hover:bg-yellow-500 cursor-pointer">
          <input
            type="text"
            name=""
            id=""
            className="h-full flex-grow p-2 w-6 rounded-md flex-shrink focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/*  */}
        <div className="text-white p-1 flex items-center text-xs space-x-6 mx-5">
          <div className="link">
            <p>Hello Hassan Rao</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 font-bold bg-yellow-400 h-4 w-4 text-center text-black rounded-full">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-5 ">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* 2nd nav */}
      <div className="bg-amazon_blue-light text-white text-sm flex space-x-3 p-2 pl-6">
        <p className="link flex items-center">
          <MenuIcon className="h-4 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again </p>
        <p className="link hidden lg:inline-flex">Shopper toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
