import { NavBar } from "@/components/NavBar";
import { SideBar } from "@/components/SideBar";

export default function Home() {
  return (
    <div className="w-full h-auto flex">
      <SideBar />
      <div className="ml-[18%] flex-1">
        <NavBar />
      </div>
    </div>
  );
}
